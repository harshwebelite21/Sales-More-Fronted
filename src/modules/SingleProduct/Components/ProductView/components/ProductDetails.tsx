import { useState } from "react";
import ColorSelection from "./ColorSelection";
import CartAmountToggle from "./CartAmountToggle";
import SizeSelection from "./SizeSelection";
import { FaHeart } from "react-icons/fa";
import { Button } from "@mui/material";
import RatingStars from "../../../../../components/RatingStars";

const ProductDetails = () => {
  const socialMediaLinks = [
    { url: "https://facebook.com", iconClass: "fab fa-facebook-f" },
    { url: "https://twitter.com", iconClass: "fab fa-twitter" },
    { url: "https://instagram.com", iconClass: "fab fa-instagram" },
    { url: "https://linkedin.com", iconClass: "fab fa-linkedin-in" },
  ];
  const [quantity, setQuantity] = useState(1);
  const [addToWishList, setAddToWishList] = useState(false);
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const review = 5;

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  return (
    <div className=" gap-5 flex flex-col justify-start">
      <div className="text-4xl font-sans">Product 1</div>
      <div className="text-lg text-[#9F9F9F] font-sans">Rs. 25000</div>
      <div className="icon-style flex items-center">
        <RatingStars readOnly={true} />
        <p className="mx-5 text-[#9F9F9F] border-1-">|</p>
        <p className="text-[#9F9F9F]">{review} customer reviews</p>
      </div>
      <div className="text-sm font-sans">
        This code tells Tailwind CSS to use &quot;Poppins&quot; as the preferred
        font in the sans-serif font family stack. Make sure you have the
        &quot;Poppins&quot; font available in your project for this to work.
        This code tells Tailwind CSS to use &quot;Poppins&quot; as the preferred
        font in the sans-serif font family stack. Make sure you have the
        &quot;Poppins&quot; font available in your project for this to work.
      </div>

      <div className="flex flex-col">
        <div className="text-sm text-[#9F9F9F] font-semibold">Size</div>
        <div>
          <SizeSelection />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="text-sm font-semibold text-[#9F9F9F] ">Color</div>
        <div>
          <ColorSelection />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-7 h-[50px]">
        <CartAmountToggle
          quantity={quantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
        <Button
          size="medium"
          sx={{
            margin: "10px",
            fontFamily: "inherit",
            paddingInline: "55px",

            fontWeight: "bold",
            backgroundColor: "black",
            color: "white",
            borderColor: "#ff9900",
            "&:hover": {
              backgroundColor: "#ffaa00",
              borderColor: "#ffaa00",
            },
          }}
          className="whitespace-nowrap"
        >
          Add To Cart
        </Button>
        <Button
          size="medium"
          className="whitespace-nowrap"
          sx={{
            margin: "10px",
            paddingInline: "50px",
            fontFamily: "inherit",
            fontWeight: "bold",
            backgroundColor: "black",
            color: "white",
            borderColor: "#ff9900",
            "&:hover": {
              backgroundColor: "#ffaa00",
              borderColor: "#ffaa00",
            },
          }}
        >
          Compare +
        </Button>
      </div>
      <hr />

      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          {socialMediaLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="text-white hover:text-blue-600 flex items-center justify-center rounded-full bg-white size-8 border"
            >
              <i
                className={`${link.iconClass} fa-x rounded-full text-[#263238] p-2`}
              ></i>
            </a>
          ))}
        </div>
        <div className="flex gap-2 ">
          <FaHeart
            color={`${addToWishList ? "black" : "red"}`}
            className="  text-xl cursor-pointer "
            onClick={() => setAddToWishList(!addToWishList)}
          />
          <span
            className="text-gray-700 cursor-pointer"
            onClick={() => setAddToWishList(!addToWishList)}
          >
            Add to Wishlist
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
