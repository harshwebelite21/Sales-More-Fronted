import { Product } from "../../../../Types/ProductsTypes";
import ProductDetails from "./components/ProductDetails";
import ProductImages from "./components/ProductImages";

const ProductView = ({ product }: { product: Product }) => {
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 gap-7 md:grid-cols-2 mt-10">
      <div>
        <ProductImages product={product} isSingleLoading={false} />
      </div>
      <div>
        <ProductDetails product={product} />
      </div>
    </div>
  );
};

export default ProductView;
