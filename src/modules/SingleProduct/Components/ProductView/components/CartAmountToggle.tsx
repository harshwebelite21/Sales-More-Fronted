import { Button, ButtonGroup } from "@mui/material";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
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
            backgroundColor: "#d1d0ca",
          },
        }}
      >
        <FaPlus />
      </Button>
    </ButtonGroup>
  </div>
);

export default CartAmountToggle;
