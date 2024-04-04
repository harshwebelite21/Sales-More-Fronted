import CartCalculations from "./Components/CartCalculations";
import CartItems from "./Components/CartItems";

const ShoppingCart = () => {
  return (
    <div className="flex flex-col md:flex-row w-[90%] mx-auto relative">
      <div className="w-[70%] my-4">
        <CartItems />
      </div>
      <div className="w-[30%] my-4">
        <CartCalculations />
      </div>
    </div>
  );
};

export default ShoppingCart;
