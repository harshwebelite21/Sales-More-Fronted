import ProductDetails from "./components/ProductDetails";
import ProductImages from "./components/ProductImages";

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
