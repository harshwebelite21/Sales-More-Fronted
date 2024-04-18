import { useCartContext } from "../../Context/CartContext";
import CartBanner from "./Components/CartBanner";
import CartCalculations from "./Components/CartCalculations";
import CartItems from "./Components/CartItems";
import CartMobileItems from "./Components/CartMobileItems";
import PropTypes from "prop-types";

const ShoppingCart = ({ activeState }: { activeState: number }) => {
  const { cart } = useCartContext();

  return (
    <>
      <div className="flex-col w-[90%] mx-auto relative hidden md:flex">
        <div className="w-full  h-auto">
          <CartBanner activeState={activeState} />
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
          <CartBanner activeState={activeState} />
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

ShoppingCart.propTypes = {
  activeState: PropTypes.number.isRequired,
};

export default ShoppingCart;
