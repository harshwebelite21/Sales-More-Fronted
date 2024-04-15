import { Button, TextField } from "@mui/material";
import { useCartContext } from "../../../Context/CartContext";
import { useState } from "react";

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
      <div className="flex lg:w-[60%] m-3 justify-center ">
        <div className="flex lg:flex-row md:flex-col gap-5 justify-center items-center">
          <TextField
            id="outlined-basic"
            variant="outlined"
            InputLabelProps={{
              shrink: false,
            }}
            onChange={(e) => setCouponValue(e.target.value)}
            error
            sx={{
              "& .MuiInputBase-input": {
                height: "10px",
              },
              "& .MuiOutlinedInput-root": {
                minHeight: "unset",
                borderColor: "red",
              },
            }}
          />
          <Button
            variant="contained"
            className="h-10 whitespace-nowrap "
            onClick={() => applyCoupon?.(couponValue)}
            sx={{
              margin: "10px",
              paddingInline: "40px",
              fontFamily: "inherit",
              fontWeight: "bold",
              backgroundColor: "red",
              color: "White",
              borderColor: "#ff9900",
              "&:hover": {
                backgroundColor: "red",
                borderColor: "red",
              },
            }}
          >
            Apply Coupon
          </Button>
        </div>
      </div>

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
          {couponApplied ? (
            <div>
              <span className="text-green-500">Coupon Applied :</span>
              <span>{appliedCouponValue}</span>
            </div>
          ) : null}
        </div>
        <hr />
        <div className="flex justify-between ">
          <h3 className="text-bold text-sm">Order Total</h3>
          <div className="text-bold text-lg">${orderTotal}</div>
        </div>
        <hr />

        <div className="w-full flex-center ">
          <Button
            className="flex w-full"
            size="small"
            sx={{
              margin: "10px",
              fontFamily: "inherit",
              fontWeight: "bold",
              backgroundColor: "#ff9900",
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
        </div>
      </div>
    </div>
  );
};

export default CartCalculations;
