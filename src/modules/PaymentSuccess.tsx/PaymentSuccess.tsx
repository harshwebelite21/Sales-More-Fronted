import CartBanner from "../ShoppingCart/Components/CartBanner";
import PropTypes from "prop-types";
import SuccessMessage from "./components/SuccessMessage";

const PaymentSuccess = ({ activeState }: { activeState: number }) => {
  return (
    <div className="">
      <CartBanner activeState={activeState} />
      <SuccessMessage />
    </div>
  );
};

PaymentSuccess.propTypes = {
  activeState: PropTypes.number.isRequired,
};
export default PaymentSuccess;
