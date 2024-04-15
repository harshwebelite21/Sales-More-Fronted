import {
  Button,
  Card,
  CardContent,
  IconButton,
  TextField,
} from "@mui/material";
import { useCartContext } from "../../../Context/CartContext";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDiscount } from "react-icons/md";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const CartCalculations = () => {
  const {
    orderTotal,
    subTotal,
    shippingFee,
    applyCoupon,
    reductionValue,
    appliedCouponValue,
    couponApplied,
    removeCoupon,
    clearCart,
  } = useCartContext();
  const [couponValue, setCouponValue] = useState("");
  return (
    <div className="flex flex-col gap-10 lg:flex-row flex-center w-[90%] mx-auto ">
      <Card className="lg:w-[40%] w-full mx-auto lg:h-full h-fit ">
        <CardContent className="h-full my-auto">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col bg-gray-100 p-4 rounded-lg shadow">
              <div className="flex items-center gap-2">
                <span className="text-blue-500">
                  <MdDiscount />
                </span>
                <hr className="w-full border-t-2 border-blue-300" />
              </div>
              <div className="w-[90%] mx-auto flex flex-col justify-center text-gray-700">
                <ul className="list-none">
                  <li className="p-2 hover:bg-blue-100 rounded-md transition duration-200 ease-in-out">
                    Coupon : ABC : 50% Discount
                  </li>
                  <li className="p-2 hover:bg-blue-100 rounded-md transition duration-200 ease-in-out">
                    Coupon : DEF : 40% Discount
                  </li>
                  <li className="p-2 hover:bg-blue-100 rounded-md transition duration-200 ease-in-out">
                    Coupon : GHI : 30% Discount
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h1 className="font-baskerville text-[1.5rem]">Coupon</h1>
              <p className="font-muli">
                Enter your coupon code if you have one.
              </p>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-between gap-3">
              <TextField
                size="small"
                onChange={(e) => setCouponValue(e.target.value)}
                sx={{ height: "40px" }}
                className="w-full"
              />
              <Button
                size="small"
                variant="contained"
                color="success"
                onClick={() => applyCoupon?.(couponValue)}
                sx={{
                  height: "40px",
                  minWidth: "120px",
                  fontSize: "12px",
                }}
                className="bg-red-500"
              >
                Apply Coupon
              </Button>
            </div>
            <div className="flex flex-row gap-8 w-full justify-between">
              <Link to="/products">
                <Button
                  startIcon={<ArrowBackIosNewIcon fontSize="small" />}
                  variant="outlined"
                  color="primary"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "13px",
                    paddingInline: "10px",
                  }}
                >
                  Continue Shopping
                </Button>
              </Link>
              <Button
                endIcon={<RemoveShoppingCartIcon fontSize="small" />}
                variant="outlined"
                color="warning"
                onClick={() => clearCart?.()}
                sx={{
                  fontWeight: "bold",
                  paddingInline: "10px",
                  fontSize: "12px",
                }}
              >
                Clear Cart
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <hr className="md:hidden border-t-2 flex  w-full mx-auto m-3" />
      <Card className="flex lg:w-[60%] w-full mx-auto ">
        <CardContent className="w-full">
          <div className="flex flex-col w-full md:flex-row flex-center  ">
            <div className=" rounded-md m-3 p-5 w-full   flex flex-col gap-2  justify-end">
              <div className="font-bold text-3xl">Cart Totals</div>
              <div className="flex justify-between ">
                <h3 className="text-bold text-lg">Subtotal</h3>
                <p className="text-bold text-lg">${subTotal}</p>
              </div>
              <hr />
              <div className="flex justify-between ">
                <h3 className="text-bold text-sm">Shipping Fee</h3>
                <div className="text-bold text-lg">${shippingFee}</div>
              </div>

              <hr />
              <div className="flex flex-col justify-between ">
                <div className="flex justify-between">
                  <h3 className="text-bold text-sm">Reduction</h3>
                  <div className="text-bold text-lg">-${reductionValue}</div>
                </div>
              </div>
              <hr />
              <div className="flex justify-between ">
                <h3 className="text-bold text-sm">Order Total</h3>
                <div className="text-bold text-lg">${orderTotal}</div>
              </div>

              <hr />

              {couponApplied ? (
                <div className="justify-between flex">
                  <div className="text-green-600">
                    Coupon Applied :{" "}
                    <span className="text-black">{appliedCouponValue}</span>
                  </div>
                  <span className="flex flex-row  flex-center">
                    <IconButton
                      size="small"
                      onClick={() => removeCoupon?.(appliedCouponValue)}
                    >
                      <FaTrash color="red" />
                    </IconButton>
                  </span>
                </div>
              ) : null}

              <div className="w-full flex-center ">
                <Button
                  className="flex"
                  size="medium"
                  sx={{
                    margin: "10px",
                    fontWeight: "bold",
                    backgroundColor: "#097F1E",
                    color: "white",
                    borderColor: "#ff9900",
                    "&:hover": {
                      backgroundColor: "#097F1E",
                      borderColor: "#ffaa00",
                    },
                  }}
                >
                  Proceed To Buy
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CartCalculations;
