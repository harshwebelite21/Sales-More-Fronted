import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { PaymentContextType, PaymentDetails } from "../Types/ProductsTypes";
import { get, post } from "../utils/axios";
import { v4 as uuid } from "uuid";

const defaultState: PaymentContextType = {
  paymentInfo: [],
};

const localStorageData = localStorage.getItem("PaymentState");
const initialState: PaymentContextType = localStorageData
  ? JSON.parse(localStorageData)
  : defaultState;

export const PaymentContext = createContext<PaymentContextType>(initialState);

export const PaymentContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [uState, setUState] = useState<PaymentContextType>(initialState);

  const addPayment = async (pData: PaymentDetails) => {
    const {
      data: { key },
    } = await get("http://localhost:4000/api/getkey");

    const orderIds = uuid();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { cartItems: _items, ...formData } = pData;

    const payload = {
      orderId: orderIds,
      ...formData,
    };

    const {
      data: { order },
    } = await post("http://localhost:4000/api/checkout", payload);

    const { notes, id } = order;
    const {
      userName,
      userEmail,
      orderTotal,
      orderId,
      notes: note,
      address,
      mobileNo,
      pinCode,
    } = notes;

    const options = {
      key: key,
      amount: order.amount,
      currency: "INR",
      name: { userName },
      description: { note },
      image: "https://lessonpix.com/drawings/96333/380x380/Lap.png",
      order_id: id,
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
        name: { userName },
        email: { userEmail },
        contact: { mobileNo },
        orderTotal,
      },
      notes: {
        address: { address },
        pinCode: { pinCode },
      },
      theme: {
        color: "#3399cc",
      },
    };
    //@ts-expect-error i added script in index.html
    const razor = new window.Razorpay(options);
    razor.open();

    setUState((prevState) => ({
      ...prevState,
      paymentInfo: [...prevState.paymentInfo, { id: orderId, cart: pData }],
    }));
  };

  useEffect(() => {
    localStorage.setItem("PaymentState", JSON.stringify(uState));
  }, [uState]);

  const contextValue = useMemo(() => {
    const { paymentInfo } = uState;

    return {
      paymentInfo,
      addPayment,
    };
  }, [uState]);

  return (
    <PaymentContext.Provider value={contextValue}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePaymentContext = () => useContext(PaymentContext);
