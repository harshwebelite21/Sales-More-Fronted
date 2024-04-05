import { Button, TextField } from "@mui/material";

const CartCalculations = () => {
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
          <p className="text-bold text-lg">$431</p>
        </div>
        <hr />
        <div className="flex justify-between ">
          <h3 className="text-bold text-sm">Shipping Fee</h3>
          <div className="text-bold text-lg">$431</div>
        </div>

        <hr />
        <div className="flex justify-between ">
          <h3 className="text-bold text-sm">Reduction</h3>
          <div className="text-bold text-lg">-$431</div>
        </div>
        <hr />
        <div className="flex justify-between ">
          <h3 className="text-bold text-sm">Order Total</h3>
          <div className="text-bold text-lg">$431</div>
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
