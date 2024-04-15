import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./Style/cartMobile.css"; // Make sure to keep only necessary custom styles
import { FaCircle, FaTrash } from "react-icons/fa";
import CartAmountToggle from "../../SingleProduct/Components/ProductView/components/CartAmountToggle";
import { CartItemType } from "../../../Types/ProductsTypes";
import { useCartContext } from "../../../Context/CartContext";

const CartMobileItems = ({ cart }: { cart: CartItemType[] }) => {
  const handleQuantityChange = () => {};

  const { removeItemFromCart } = useCartContext();

  return (
    <div className="rounded-md flex flex-col gap-3">
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
        Proceed To Buy
      </Button>
      <hr className="border-t-2" />
      {cart.map((product: CartItemType) => (
        <Card key={product.id} sx={{ backgroundColor: "#f2f2f5" }}>
          <Box className="flex flex-row w-full">
            <div className="relative w-1/2 rounded-l m-2 overflow-hidden">
              <CardMedia
                component="img"
                height="194"
                image={product.image}
                alt="Product"
              />
              <Typography className="ribbon">Best Seller</Typography>
            </div>
            <CardContent className="w-1/2 flex flex-col justify-center p-2 gap-1">
              <Typography variant="h6" component="div">
                {product.name}
              </Typography>
              <div className="flex gap-6 items-center">
                <Typography variant="body1" className="font-bold">
                  $299
                </Typography>
                <Typography className="text-blue-500">prime</Typography>
              </div>
              <div className="flex items-center gap-2">
                <Typography component="span">Color:</Typography>
                <FaCircle color={product.selectedColor} />
              </div>
              <Typography className="text-green-600">in Stock</Typography>
              {product.size ? (
                <div className="flex items-center gap-2">
                  <Typography>Size:</Typography>
                  <Typography>{product.size}</Typography>
                </div>
              ) : null}
            </CardContent>
          </Box>
          <CardActions className="flex justify-around p-4">
            <CartAmountToggle
              mQuantity={product.quantity}
              handleQuantity={handleQuantityChange}
              id={product.id}
            />
            <div
              className="flex-center cursor-pointer "
              onClick={() => removeItemFromCart?.(product.id)}
            >
              <FaTrash className="text-red-500" />
            </div>
          </CardActions>
        </Card>
      ))}
      <hr className="my-4 border-t-2" />
    </div>
  );
};

export default CartMobileItems;
