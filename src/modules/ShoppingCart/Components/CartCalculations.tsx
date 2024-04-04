import { Button, TextField } from "@mui/material";

const CartCalculations = () => {
  return (
    <div className="w-full rounded-md my-3  border-2 p-5 sticky top-24  flex flex-col gap-7 ">
      <div className="font-bold text-3xl">Cart Totals</div>
      <div className="flex justify-between ">
        <h3 className="text-bold text-lg">Subtotal</h3>
        <p className="text-bold text-lg">$431</p>
      </div>
      <hr />
      <div className="flex justify-between ">
        <h3 className="text-bold text-sm">Shipping Fee</h3>
        <div className="text-bold text-lg">$431</div>
      </div>
      <hr />
      <div className="flex justify-between ">
        <h3 className="text-bold text-sm">Order Total</h3>
        <div className="text-bold text-lg">$431</div>
      </div>
      <hr />
      <div className="flex items-center gap-2">
        <label htmlFor="coupon">Apply Coupon</label>
        <TextField id="standard-basic" label="Enter Hear" variant="standard" />
      </div>
      <div className="w-full flex-center ">
        <Button variant="contained" className="w-[80%] mx-auto">
          CheckOut
        </Button>
      </div>
    </div>
  );
};

export default CartCalculations;
