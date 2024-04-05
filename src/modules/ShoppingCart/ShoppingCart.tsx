import ProductsBanner from "../Products/components/ProductsBanner";
import CartButtons from "./Components/CartButtons";
import CartCalculations from "./Components/CartCalculations";
import CartItems from "./Components/CartItems";
import CartMobileItems from "./Components/CartMobileItems";

const ShoppingCart = () => {
  return (
    <>
      <div className="w-full">
        <ProductsBanner />
      </div>
      <div className="flex-col w-[90%] mx-auto relative hidden md:flex">
        <div className="w-full my-4">
          <CartItems />
        </div>
        <div className="w-full my-4">
          <CartButtons />
        </div>
        <div className="w-full flex justify-end my-4">
          <CartCalculations />
        </div>
      </div>
      <div className="md:hidden flex-col">
        <div className="w-[90%] mx-auto my-4">
          <CartMobileItems />
        </div>
        <div className="w-[90%] mx-auto my-4">
          <CartButtons />
        </div>
        <div className="w-[90%] mx-auto my-4">
          <CartCalculations />
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
