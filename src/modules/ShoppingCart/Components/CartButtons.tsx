import { Button } from "@mui/material";
import { useCartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";

const CartButtons = () => {
  const { clearCart } = useCartContext();
  return (
    <div className=" w-full md:px-10 mx-auto flex justify-between whitespace-nowrap items-center ">
      <div>
        <Link to="/products">
          <Button
            variant="outlined"
            size="medium"
            className="h-10 bg-[#ff9900]"
            sx={{
              paddingInline: "35px",
              backgroundColor: "#ff9900",
              borderColor: "#ff9900",
              color: "black",
              fontFamily: "inherit",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#ffaa00",
                borderColor: "#ffaa00",
              },
            }}
          >
            Shop More
          </Button>
        </Link>
      </div>
      <div>
        <Button
          variant="outlined"
          className="h-10"
          size="medium"
          onClick={() => clearCart?.()}
          sx={{
            paddingInline: "35px",
            backgroundColor: "#ff9900",
            borderColor: "#ff9900",
            color: "black",
            margin: "10px",
            fontFamily: "inherit",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#ffaa00",
              borderColor: "#ffaa00",
            },
          }}
        >
          Clear Cart
        </Button>
      </div>
    </div>
  );
};

export default CartButtons;
