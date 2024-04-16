import { createContext, useContext, useMemo, useState } from "react";
import {
  ReviewData,
  SendRequestContextType,
  TicketData,
} from "../Types/ProductsTypes";
import appConfig from "../config/appConfig";
import { post } from "../utils/axios";

const initialState: SendRequestContextType = {
  isReviewAdded: false,
  isTicketAdded: false,
};
export const SendRequestContext =
  createContext<SendRequestContextType>(initialState);

export const SendRequestContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState<SendRequestContextType>(initialState);

  const addReview = async (data: ReviewData) => {
    const response = await post("review", data, {
      token: appConfig.authToken,
    });

    if (
      response.data.success === true &&
      response.data.message === "Review added successfully"
    ) {
      setState((prevState) => ({ ...prevState, isReviewAdded: true }));
    }
  };

  const addTicket = async (data: TicketData) => {
    const response = await post("customer-support", data, {
      token: appConfig.authToken,
    });

    if (
      response.data.success === true &&
      response.data.message === "Ticket Created Successfully"
    ) {
      setState((prevState) => ({ ...prevState, isTicketAdded: true }));
    }
  };
  const contextValue = useMemo(() => {
    const { isReviewAdded, isTicketAdded } = state;

    return { isReviewAdded, addReview, addTicket, isTicketAdded };
  }, [state]);

  return (
    <SendRequestContext.Provider value={contextValue}>
      {children}
    </SendRequestContext.Provider>
  );
};

export const useSendRequestContext = () => useContext(SendRequestContext);
