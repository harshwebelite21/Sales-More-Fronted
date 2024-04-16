import { ReactNode } from "react";

export interface ProductsContextType {
  products: {
    _id: string;
    name: string;
    description: string;
    price: number;
    availableQuantity: number;
    category: string;
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
  category: string;
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
  sortOrder: string;
  handleSort?: (order: string) => Promise<void>;
  itemsAvailable: number;
  gridViewType: boolean;
  handleViewType?: () => Promise<void>;
}

export interface CartItemType {
  id: string;
  name: string;
  quantity: number;
  price: number;
  selectedColor: string;
  image: string;
  availableQuantity: number;
  size: string;
  subTotal?: number;
}
export interface CartContextType {
  cart: CartItemType[];
  cartLength: number;
  addToCart?: (
    _id: string,
    name: string,
    quantity: number,
    price: number,
    selectedColor: string,
    image: string,
    availableQuantity: number,
    size: string,
  ) => void;
  increaseCartQuantity?: (id: string) => void;
  decreaseCartQuantity?: (id: string) => void;
  removeItemFromCart?: (id: string) => void;
  clearCart?: () => void;
  subTotal: number;
  shippingFee: number;
  orderTotal: number;
  couponApplied?: boolean;
  applyCoupon?: (coupon: string) => void;
  appliedCouponValue: string;
  reductionValue: number;
  removeCoupon?: (coupon: string) => void;
}

export interface SendRequestContextType {
  isReviewAdded: boolean;
  addReview?: (data: ReviewData) => void;
  isTicketAdded: boolean;
  addTicket?: (data: TicketData) => void;
}

export interface ReviewData {
  userName: string;
  userEmail: string;
  reviewText: string;
  rating: number;
}

export interface TicketData {
  userName: string;
  userEmail: string;
  subject: string;
  description: string;
}
