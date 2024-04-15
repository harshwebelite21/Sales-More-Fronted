import { useCartContext } from "../../Context/CartContext";
import CartBanner from "./Components/CartBanner";
import CartCalculations from "./Components/CartCalculations";
import CartItems from "./Components/CartItems";
import CartMobileItems from "./Components/CartMobileItems";

const ShoppingCart = () => {
  const { cart } = useCartContext();

  return (
    <>
      <div className="flex-col w-[90%] mx-auto relative hidden md:flex">
        <div className="w-full  h-auto">
          <CartBanner />
        </div>
        <hr />
        <div className="w-full my-4 h-auto max-h-[500px] overflow-y-auto">
          <CartItems cart={cart} />
        </div>
        <hr />

        <div className="w-full flex justify-end my-4">
          <CartCalculations />
        </div>
      </div>
      <div className="md:hidden flex-col">
        <div className="w-[90%] mx-auto my-4">
          <CartBanner />
        </div>
        <div className="w-[90%] mx-auto my-4">
          <CartMobileItems cart={cart} />
        </div>
        <div className="w-[90%] mx-auto my-4">
          <CartCalculations />
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
