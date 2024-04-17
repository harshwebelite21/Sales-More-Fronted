import CartBanner from "../ShoppingCart/Components/CartBanner";
import OrderDetails from "./Components/OrderDetails";
import PropTypes from "prop-types";

const CheckOut = ({ activeState }: { activeState: number }) => {
  return (
    <div>
      <CartBanner activeState={activeState} />
      <OrderDetails />
    </div>
  );
};

CheckOut.propTypes = {
  activeState: PropTypes.number.isRequired,
};

export default CheckOut;
