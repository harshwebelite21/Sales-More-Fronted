import { Button, ButtonGroup } from "@mui/material";
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
  <div className="flex-center">
    <ButtonGroup
      variant="contained"
      aria-label="Basic button group"
      size="small"
      sx={{ borderColor: "gray", border: "2px solid gray" }}
    >
      <Button
        onClick={decreaseQuantity}
        sx={{
          backgroundColor: "#e0ded8",
          color: "#111",
          padding: "0px",
          "&:hover": {
            backgroundColor: "#d1d0ca",
          },
        }}
      >
        <FaMinus />
      </Button>
      <Button
        sx={{
          backgroundColor: "white",
          color: "#111",
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
        }}
      >
        {quantity}
      </Button>
      <Button
        onClick={increaseQuantity}
        sx={{
          backgroundColor: "#e0ded8",
          color: "#111",
          "&:hover": {
            backgroundColor: "#d1d0ca", // Change this color to your desired hover color
          },
        }}
      >
        <FaPlus />
      </Button>
    </ButtonGroup>
  </div>
);

CartAmountToggle.propTypes = {
  quantity: PropTypes.number.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
};

export default CartAmountToggle;
