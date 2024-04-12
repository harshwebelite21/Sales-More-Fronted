import { Button } from "@mui/material";
import { useCartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";

const CartButtons = () => {
  const { clearCart } = useCartContext();

  return (
    <div className="w-full md:px-10 mx-auto flex justify-between whitespace-nowrap items-center">
      <Link to="/products">
        <Button
          variant="outlined"
          size="medium"
          className="h-10"
          sx={{
            paddingInline: "35px",
            fontFamily: "inherit",
            fontWeight: "bold",
            borderColor: "#ff9900",
            backgroundColor: "#00008B",
            color: "white",
            "&:hover": {
              backgroundColor: "#000066",
            },
          }}
        >
          Shop More
        </Button>
      </Link>
      <Button
        variant="outlined"
        className="h-10"
        size="medium"
        onClick={() => clearCart?.()}
        sx={{
          paddingInline: "35px",
          fontFamily: "inherit",
          fontWeight: "bold",
          backgroundColor: "#FFA500",
          color: "black",
          "&:hover": {
            backgroundColor: "#FF8C00",
          },
        }}
      >
        Clear Cart
      </Button>
    </div>
  );
};

export default CartButtons;
