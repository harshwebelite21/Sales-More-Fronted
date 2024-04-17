import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { PaymentContextType, PaymentDetails } from "../Types/ProductsTypes";

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

  const addPayment = (data: PaymentDetails) => {
    setUState((prevState) => ({
      ...prevState,
      paymentInfo: [data, ...prevState.paymentInfo],
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
