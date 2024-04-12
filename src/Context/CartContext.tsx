import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CartContextType } from "../Types/ProductsTypes";

const defaultState: CartContextType = {
  cart: [],
  couponApplied: false,
  cartLength: 0,
  subTotal: 0,
  orderTotal: 0,
  shippingFee: 0,
  appliedCouponValue: "",
  reductionValue: 0,
};

const localStorageData = localStorage.getItem("cartState");
const initialState: CartContextType = localStorageData
  ? JSON.parse(localStorageData)
  : defaultState;

export const CartContext = createContext<CartContextType>(initialState);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState<CartContextType>(initialState);

  const addToCart = (
    _id: string,
    name: string,
    quantity: number,
    price: number,
    selectedColor: string,
    image: string,
    availableQuantity: number,
    size: string,
  ) => {
    const existingItemIndex = state.cart.findIndex(
      (item) => item.id === _id + selectedColor,
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...state.cart];
      updatedCart[existingItemIndex].quantity += quantity;
      updatedCart[existingItemIndex].subTotal =
        updatedCart[existingItemIndex].price *
        updatedCart[existingItemIndex].quantity;
      setState((prevState) => ({
        ...prevState,
        cart: updatedCart,
      }));
    } else {
      const cartProduct = {
        name: name,
        id: _id + selectedColor,
        selectedColor,
        quantity: Math.min(quantity, availableQuantity),
        image: image,
        price: price,
        availableQuantity: availableQuantity,
        size: size,
        subTotal: quantity * price,
      };

      setState((prevState) => ({
        ...prevState,
        cart: [...prevState.cart, cartProduct],
      }));
    }
  };

  const increaseCartQuantity = (id: string) => {
    const existingItemIndex = state.cart.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...state.cart];
      updatedCart[existingItemIndex].quantity += 1;
      updatedCart[existingItemIndex].subTotal =
        updatedCart[existingItemIndex].price *
        updatedCart[existingItemIndex].quantity;
      setState((prevState) => ({
        ...prevState,
        cart: updatedCart,
      }));
    }
  };

  const decreaseCartQuantity = (id: string) => {
    const existingItemIndex = state.cart.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...state.cart];
      updatedCart[existingItemIndex].quantity -= 1;
      updatedCart[existingItemIndex].subTotal =
        updatedCart[existingItemIndex].price *
        updatedCart[existingItemIndex].quantity;
      setState((prevState) => ({
        ...prevState,
        cart: updatedCart,
      }));
    }
  };

  const removeItemFromCart = (id: string) => {
    setState((prevState) => ({
      ...prevState,
      cart: prevState.cart.filter((item) => item.id !== id),
    }));
  };

  const clearCart = () => {
    setState((prevState) => ({
      ...prevState,
      cart: [],
    }));
  };

  const cartLength = () => {
    setState((prevState) => ({
      ...prevState,
      cartLength: state.cart.reduce((total, item) => total + item.quantity, 0),
    }));
  };

  const cartCalculation = () => {
    const subTotal = state.cart.reduce(
      (total, item) => total + item.quantity * item.price,
      0,
    );
    const shippingFee = state.cart.length * 50;
    const couponDiscount = state.couponApplied ? 50 : 0;
    const orderTotal =
      subTotal +
      shippingFee -
      (subTotal + shippingFee > 100 ? couponDiscount : 0);

    setState((prevState) => ({
      ...prevState,
      orderTotal,
      subTotal,
      shippingFee,
    }));
  };

  const applyCoupon = (coupon: string) => {
    if (coupon === "harsh" && !state.couponApplied && state.orderTotal > 100) {
      const discountedValue = state.orderTotal - 50;
      setState((prevState) => ({
        ...prevState,
        orderTotal: discountedValue,
        couponApplied: true,
        appliedCouponValue: coupon,
        reductionValue: 50,
      }));
    }
  };

  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(state));
    cartLength();
    cartCalculation();
  }, [state.cart, state.couponApplied]);

  const contextValue = useMemo(() => {
    const {
      cart,
      cartLength,
      subTotal,
      orderTotal,
      shippingFee,
      couponApplied,
      reductionValue,
      appliedCouponValue,
    } = state;

    return {
      cart,
      increaseCartQuantity,
      addToCart,
      decreaseCartQuantity,
      removeItemFromCart,
      clearCart,
      cartLength,
      subTotal,
      orderTotal,
      shippingFee,
      applyCoupon,
      reductionValue,
      couponApplied,
      appliedCouponValue,
    };
  }, [state]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
