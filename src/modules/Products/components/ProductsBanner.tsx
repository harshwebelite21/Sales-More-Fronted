import productsBanner from "../../../images/ProductsBanner.png";

const ProductsBanner = () => {
  return (
    <div className="relative h-[90%] -z-10">
      <img
        src={productsBanner}
        className="w-full h-[250px] md:h-[350px] object-cover"
        alt="Product Banner"
      />
      <div className="absolute inset-0 flex-center flex-col">
        <div className="text-red text-center text-5xl font-bold">Hello</div>
        <div className="flex">
          <div>Home-- </div>
          <div>Shop</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsBanner;
