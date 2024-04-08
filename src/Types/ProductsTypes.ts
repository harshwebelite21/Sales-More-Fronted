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
  image?: string;
  company?: string;
  stars?: number;
  featured?: boolean;
  colors?: string[];
  attributes?: { name: string; value: string }[];
}

export interface ProductsContextProviderProps {
  children: ReactNode;
}

export interface ProductAction {
  type: string;
  payload?: Product | Product[];
}

export interface ProductsInitialState {
  isLoading: boolean;
  isError: boolean;
  products: Product[];
  featureProducts: Product[];
  singleProduct?: Product; // Optional property (might not always have a single product)
  isSingleLoading?: boolean; // Optional property (might not always be fetching a single product)
}
