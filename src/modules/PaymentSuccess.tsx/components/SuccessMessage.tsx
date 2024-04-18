import { Link, useSearchParams } from "react-router-dom";
import trolley from "../../../images/trolley.png";
import { usePaymentContext } from "../../../Context/PaymentContext";

const SuccessMessage = () => {
  const query = useSearchParams()[0];
  const { getPaymentDetails } = usePaymentContext();

  const data = getPaymentDetails?.(query.get("payment_id")!);

  const {
    cart: { userName, userEmail, orderTotal, address, time },
    order_Id,
  } = data!;

  return (
    <div className="w-full flex-center">
      <div className="md:w-[70%] border-2 h-full  mx-auto md:justify-around flex-col md:flex-row flex p-5 m-3 mb-10 rounded-xl gap-5 flex-center">
        <div className="lg:w-[50%] w-full h-full flex-center flex flex-col text-center ">
          <div>
            <img
              src={trolley}
              alt="trolly"
              className="object-cover h-[200px] w-[200px]"
            />
          </div>

          <div className="font-libre text-5xl">Thank You!</div>

          <div className="font-muli text-2xl">
            You order was successfully completed.
          </div>
        </div>

        <div className=" lg:w-[50%] w-full flex flex-col gap-5 flex-center">
          <div className=" mx-auto flex flex-col w-full p-5 gap-1 rounded-xl">
            <div>
              <div className="w-full flex justify-between">
                <div className="font-muli">Name</div>
                <div className="font-bold">{userName}</div>
              </div>
            </div>
            <div>
              <div className="w-full flex justify-between">
                <div className="font-muli">Email</div>
                <div className="font-bold">{userEmail}</div>
              </div>
            </div>
            <div>
              <div className="w-full flex justify-between">
                <div className="font-muli">Amount Paid</div>
                <div className="font-bold">{orderTotal}</div>
              </div>
            </div>
            <div>
              <div className="w-full flex justify-between">
                <div className="font-muli">Date & Time</div>
                <div className="font-bold">{time?.toLocaleString()}</div>
              </div>
            </div>
            <div>
              <div className="w-full flex justify-between">
                <div className="font-muli">Reference Id</div>
                <div className="font-bold">{order_Id}</div>
              </div>
            </div>
            <div>
              <div className="w-full flex justify-between">
                <div className="font-muli">Address</div>
                <div className="font-bold">{address}</div>
              </div>
            </div>
          </div>
          <div className="w-full flex-center">
            <Link to="/products">
              <button
                className="bg-black text-white w-fit h-8 px-10"
                type="submit"
              >
                BACK TO SHOP
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
