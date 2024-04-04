import ProductDetails from "./ProductDetails";
import ProductImages from "./ProductImages";

const ProductView = () => {
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2">
      <div>
        <ProductImages />
      </div>
      <div>
        <ProductDetails />
      </div>
    </div>
  );
};

export default ProductView;
