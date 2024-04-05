import { Button } from "@mui/material";

const CartButtons = () => {
  return (
    <div className=" w-full md:px-10 mx-auto flex justify-between whitespace-nowrap items-center ">
      <div>
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
      </div>
      <div>
        <Button
          variant="outlined"
          className="h-10"
          size="medium"
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
