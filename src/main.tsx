import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductsContextProvider } from "./Context/ProductsContext.tsx";
import { CartContextProvider } from "./Context/CartContext.tsx";
import { SendRequestContextProvider } from "./Context/SendRequestContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProductsContextProvider>
    <CartContextProvider>
      <SendRequestContextProvider>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </SendRequestContextProvider>
    </CartContextProvider>
  </ProductsContextProvider>,
);
