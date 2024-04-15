import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useCartContext } from "../../../../../Context/CartContext";

const buttonSx = {
  padding: "3px",
  color: "#111",
  "&:hover": {
    backgroundColor: "#d1d0ca",
  },
};

const CartAmountToggle = ({
  mQuantity,
  handleQuantity,
  id = "",
}: {
  mQuantity: number;
  handleQuantity: (que: number) => void;
  id: string;
}) => {
  const [quantity, setQuantity] = useState(mQuantity);
  const { increaseCartQuantity, decreaseCartQuantity } = useCartContext();

  const updateQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
    handleQuantity(newQuantity);
    newQuantity > quantity
      ? increaseCartQuantity?.(id)
      : decreaseCartQuantity?.(id);
  };

  const increaseQuantity = () => updateQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && updateQuantity(quantity - 1);

  return (
    <div className="flex-center">
      <ButtonGroup
        variant="contained"
        aria-label="Quantity adjustment buttons"
        size="small"
      >
        <Button
          onClick={decreaseQuantity}
          disabled={quantity <= 1}
          sx={{ ...buttonSx, backgroundColor: "#e0ded8" }}
        >
          <FaMinus />
        </Button>
        <Button
          sx={{
            ...buttonSx,
            backgroundColor: "white",
            "&:hover": { backgroundColor: "#f0f0f0" },
          }}
        >
          {quantity}
        </Button>
        <Button
          onClick={increaseQuantity}
          sx={{ ...buttonSx, backgroundColor: "#e0ded8" }}
        >
          <FaPlus />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default CartAmountToggle;
