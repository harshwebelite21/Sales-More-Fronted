import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import "./Style/cartMobile.css";
import { FaCircle } from "react-icons/fa";
import CartAmountToggle from "../../SingleProduct/Components/ProductView/components/CartAmountToggle";
import { useState } from "react";

const CartMobileItems = () => {
  const products = [
    {
      id: 1,
      name: "Laptopasdfghjkluiopsdfghjklsdfghjkl;''asdfghjklasdfghjkl;",
      image: "https://via.placeholder.com/150",
      color: "Silver",
      price: 1200,
      quantity: 2,
    },
    {
      id: 2,
      name: "Smartphone gfhthhhhhhhhhhhhhhh",
      image: "https://via.placeholder.com/150",
      color: "Black",
      price: 800,
      quantity: 1,
    },
    {
      id: 3,
      name: "Tablet",
      image: "https://via.placeholder.com/150",
      color: "Space Gray",
      price: 500,
      quantity: 3,
    },
    {
      id: 4,
      name: "Headphones",
      image: "https://via.placeholder.com/150",
      color: "red",
      price: 150,
      quantity: 2,
    },
    {
      id: 5,
      name: "Camera",
      image: "https://via.placeholder.com/150",
      color: "yellow",
      price: 1000,
      quantity: 1,
    },
    {
      id: 6,
      name: "Smartwatch",
      image: "https://via.placeholder.com/150",
      color: "Gold",
      price: 300,
      quantity: 2,
    },
  ];
  const textTruncate = (text = "", length = 35) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };
  return (
    <div className=" rounded-md flex flex-col gap-3">
      <Button
        size="small"
        sx={{
          margin: "10px",
          fontFamily: "inherit",
          fontWeight: "bold",
          color: "black",
          borderColor: "#ff9900",
          "&:hover": {
            backgroundColor: "#ffaa00",
            borderColor: "#ffaa00",
          },
        }}
      >
        Proceed To Buy
      </Button>
      <hr className="border-t-2" />
      {products.map((product) => {
        const shortDescription = textTruncate(`${product.name}`, 35);
        return (
          <Card key={product.id} sx={{ backgroundColor: "#f2f2f5" }}>
            <Box className="flex flex-row w-full" sx={{ display: "flex" }}>
              <div className="relative w-[50%] rounded-l m-[7px] overflow-hidden ">
                <CardMedia
                  component="img"
                  height="194"
                  image={product.image}
                  alt="Paella dish"
                />
                <Typography className="ribbon">
                  &nbsp; Best Seller &nbsp;{" "}
                </Typography>
              </div>
              <CardContent
                sx={{
                  width: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "7px",
                }}
              >
                <Typography className="max-w-md">
                  <h1 className="text-lg font-bold break-words">
                    {shortDescription}
                  </h1>
                </Typography>
                <Typography className="flex flex-row gap-6 justify-start items-center ">
                  <div className="text-xl font-bold">$299&apos;</div>
                  <div className="text-md text-blue-500">prime</div>
                </Typography>
                <Typography className="flex items-center">
                  <span className="pr-1">Color : </span>
                  <span>
                    <FaCircle color="blue" />
                  </span>
                </Typography>
                <Typography className="text-sm text-green-600">
                  in Stock
                </Typography>
                <Typography className="grid grid-cols-5 text-sm gap-12 items-center ">
                  <div className="col-span-1 whitespace-nowrap">Size :</div>
                  {/* <div className="text-sm tracking-wider">1kg(Pack Of 1)</div> */}
                  <div className="col-span-4">
                    <h1 className="text-sm break-words whitespace-nowrap">
                      1kg(Pack Of 1)
                    </h1>
                  </div>
                </Typography>
              </CardContent>
            </Box>
            <CardActions
              className="w-full flex gap-5 "
              sx={{ paddingInline: "20px" }}
            >
              <CartAmountToggle
                quantity={quantity}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />

              <Button
                size="small"
                sx={{
                  backgroundColor: "#ff9900",
                  color: "#fff",
                  borderColor: "#ff9900",
                  "&:hover": {
                    backgroundColor: "#ffaa00",
                    borderColor: "#ffaa00",
                  },
                }}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        );
      })}
      <hr className="my-4 border-t-2" />
    </div>
  );
};

export default CartMobileItems;
