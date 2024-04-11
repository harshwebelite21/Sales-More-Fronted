import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Product, ProductContext } from "../Types/ProductsTypes";
import { get } from "../utils/axios";
import appConfig from "../config/appConfig";

const initialState: ProductContext = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {} as Product,
  isReviewLoading: false,
  review: [],
  filterProducts: [],
  sortOrder: "asc",
  itemsAvailable: 0,
};

const authToken = appConfig.authToken;

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
        filterProducts: products,
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

  const getProductReview = async (url: string) => {
    try {
      setState((prevState) => ({
        ...prevState,
        isReviewLoading: true,
      }));

      const res = await get(url, {
        token: authToken,
      });
      const review = await res.data;
      setState((prevState) => ({
        ...prevState,
        review,
        isReviewLoading: false,
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        isError: true,
        isLoading: false,
      }));
    }
  };
  const getFilteredValue = async (url: string) => {
    try {
      setState((prevState) => ({
        ...prevState,
        isLoading: true,
      }));

      const res = await get(url);
      const filterProducts = await res.data;

      setState((prevState) => ({
        ...prevState,
        filterProducts: filterProducts,
        itemsAvailable: Object.keys(filterProducts).length,
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
  const handleSort = async (order: string) => {
    try {
      setState((prevState) => ({
        ...prevState,
        isLoading: true,
      }));
      setState((prevState) => ({
        ...prevState,
        sortOrder: order,
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
      isReviewLoading,
      review,
      sortOrder,
      itemsAvailable,
      filterProducts,
    } = state;

    return {
      isLoading,
      isError,
      products,
      featureProducts,
      isSingleLoading,
      singleProduct,
      isReviewLoading,
      review,
      itemsAvailable,
      sortOrder,
      getSingleProduct,
      getProductReview,
      filterProducts,
      getFilteredValue,
      handleSort,
    };
  }, [state]);

  useEffect(() => {
    getProducts("products");
  }, []);

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
