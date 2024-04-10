import { ReactNode } from "react";

export enum CategoryEnum {
  Clothing = 1,
  Electronics,
  HomeAndFurniture,
  SportsAndOutdoors,
}

export interface ProductsContextType {
  products: {
    _id: string;
    name: string;
    description: string;
    price: number;
    availableQuantity: number;
    category: CategoryEnum;
    images: string[];
    image?: string;
    company?: string;
    stars?: number;
    featured?: boolean;
    colors?: string[];
    attributes?: { name: string; value: string }[];
  }[];

  featureProducts: Product[];
}
export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  availableQuantity: number;
  category: CategoryEnum;
  images: string[];
  image: string;
  company: string;
  sizes: string[];
  stars: number;
  featured: boolean;
  colors: string[];
  attributes: { name: string; value: string }[];
}

export interface ProductReview {
  _id: string;
  rating: number;
  reviewText: string;
  userName: string;
  productName: string;
  image: string;
}

export interface ProductsContextProviderProps {
  children: ReactNode;
}

export interface ProductAction {
  type: string;
  payload?: Product | Product[];
}

export interface ProductContext {
  isLoading: boolean;
  isError: boolean;
  products: Product[];
  featureProducts: Product[];
  isSingleLoading: boolean;
  singleProduct: Product;
  isReviewLoading: boolean;
  review: ProductReview[];
  getSingleProduct?: (url: string) => Promise<void>;
  getProductReview?: (url: string) => Promise<void>;
  filterProducts: Product[];
  getFilteredValue?: (url: string) => Promise<void>;
}
