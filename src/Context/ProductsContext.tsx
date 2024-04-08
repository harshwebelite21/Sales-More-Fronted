import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Product } from "../Types/ProductsTypes";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

export const ProductsContext = createContext<typeof initialState>(initialState);

export const ProductsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState(initialState);

  const getProducts = async (url: string) => {
    setState((prevState) => ({ ...prevState, isLoading: true }));
    try {
      const res = await axios.get(url);
      const products = await res.data;

      const featureProducts = products.filter(
        (product: Product) => product.featured === true,
      );

      setState((prevState) => ({
        ...prevState,
        products,
        featureProducts,
        isLoading: false,
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        isError: true,
        isLoading: false,
      }));
    }
  };

  const contextValue = useMemo(() => {
    const {
      products,
      isLoading,
      isError,
      featureProducts,
      isSingleLoading,
      singleProduct,
    } = state;

    return {
      isLoading,
      isError,
      products,
      featureProducts,
      isSingleLoading,
      singleProduct,
    };
  }, [state]);

  useEffect(() => {
    getProducts("http://localhost:3000/product");
  }, []);

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
