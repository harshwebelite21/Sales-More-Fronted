import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Product, ProductContext } from "../Types/ProductsTypes";
import { get } from "../utils/axios";

const initialState: ProductContext = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {} as Product,
};

export const ProductsContext = createContext<ProductContext>(initialState);

export const ProductsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState<ProductContext>(initialState);

  const getProducts = async (url: string) => {
    setState((prevState) => ({ ...prevState, isLoading: true }));
    try {
      const res = await get(url);
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

  const getSingleProduct = async (url: string) => {
    try {
      setState((prevState) => ({
        ...prevState,
        isSingleLoading: true,
      }));

      const res = await get(url);
      const singleProduct = await res.data;

      setState((prevState) => ({
        ...prevState,
        singleProduct: singleProduct.data,
        isSingleLoading: false,
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
      getSingleProduct,
    };
  }, [state]);

  useEffect(() => {
    getProducts("http://localhost:3000/products");
  }, []);

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
