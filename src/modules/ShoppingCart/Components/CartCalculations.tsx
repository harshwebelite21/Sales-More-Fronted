import { Button, TextField } from "@mui/material";
import { useCartContext } from "../../../Context/CartContext";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const CartCalculations = () => {
  const {
    orderTotal,
    subTotal,
    shippingFee,
    applyCoupon,
    reductionValue,
    appliedCouponValue,
    couponApplied,
  } = useCartContext();
  const [couponValue, setCouponValue] = useState("");
  return (
    <div className="flex flex-col  md:flex-row w-full justify-center  ">
      <div className="lg:w-[40%] md:w-[50%] rounded-md m-3  border-2 p-5   flex flex-col gap-2  justify-end">
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

        {!couponApplied ? (
          <div className="justify-between flex">
            <span className="text-green-500">Coupon Applied :</span>
            <span className="flex flex-row gap-2 flex-center">
              <span>{appliedCouponValue}</span>
              <FaTrash color="red" />
            </span>
          </div>
        ) : (
          <div className="w-full flex flex-row justify-around gap-3">
            <Button
              size="small"
              variant="contained"
              onClick={() => applyCoupon?.(couponValue)}
              sx={{
                backgroundColor: "blue",
                color: "white",
                height: "40px",
                minWidth: "120px",
                fontSize: "12px",
              }}
              className="apply-coupon-btn"
            >
              Apply Coupon
            </Button>
            <TextField
              size="small"
              onChange={(e) => setCouponValue(e.target.value)}
              sx={{ height: "40px" }}
            />
          </div>
        )}

        <div className="w-full flex-center ">
          <Button
            className="flex w-full"
            size="small"
            sx={{
              margin: "10px",
              fontFamily: "inherit",
              fontWeight: "bold",
              backgroundColor: "#097F1E",
              color: "black",
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
  );
};

export default CartCalculations;
