import PropTypes from "prop-types";
import { FaMinus, FaPlus } from "react-icons/fa";

interface CartAmountToggleProps {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

const CartAmountToggle: React.FC<CartAmountToggleProps> = ({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) => (
  <div className="flex flex-center bg-white border-2 rounded-md p-[10px] gap-3 h-[50px]">
    <FaMinus
      className="text-[#333] cursor-pointer hover:text-[#007bff]"
      onClick={decreaseQuantity}
    />
    <h2 className="my-[20px] text-2xl"> {quantity}</h2>
    <FaPlus
      className="text-[#333] cursor-pointer hover:text-[#007bff]"
      onClick={increaseQuantity}
    />
  </div>
);

CartAmountToggle.propTypes = {
  quantity: PropTypes.number.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

export default CartAmountToggle;
