import { useState } from "react";
import ColorSelection from "./ColorSelection";
import SizeSelection from "./SizeSelection";
import { FaHeart } from "react-icons/fa";
import { Button } from "@mui/material";
import RatingStars from "../../../../../components/RatingStars";
import { Product } from "../../../../../Types/ProductsTypes";
import { useCartContext } from "../../../../../Context/CartContext";
import { Link } from "react-router-dom";
import CartAmountToggle from "./CartAmountToggle";

const ProductDetails = ({ product }: { product: Product }) => {
  const { addToCart } = useCartContext();

  const socialMediaLinks = [
    { url: "https://facebook.com", iconClass: "fab fa-facebook-f" },
    { url: "https://twitter.com", iconClass: "fab fa-twitter" },
    { url: "https://instagram.com", iconClass: "fab fa-instagram" },
    { url: "https://linkedin.com", iconClass: "fab fa-linkedin-in" },
  ];

  const {
    _id,
    name,
    price,
    description,
    colors,
    stars,
    sizes,
    availableQuantity,
    images,
  } = product;
  const [quantity, setQuantity] = useState(1);
  const [addToWishList, setAddToWishList] = useState(false);
  let selectedSize: string;

  const [selectedColor, setSelectedColor] = useState<string>(
    colors?.at(0) as string,
  );

  const handleSizeSelection = (size: string) => {
    selectedSize = size;
  };
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };
  const handleQuantityChange = (que: number) => {
    setQuantity(que);
  };

  return (
    <div className=" gap-5 flex flex-col justify-start">
      <div className="text-4xl font-sans">{name}</div>
      <div className="text-lg text-[#9F9F9F] font-sans">Rs. {price}</div>
      <div className="icon-style flex items-center">
        <RatingStars readOnly={true} stars={stars} />
        <p className="mx-5 text-[#9F9F9F] border-1-">|</p>
        <p className="text-[#9F9F9F]">{stars} customer reviews</p>
      </div>
      <div className="text-sm font-sans">{description}</div>

      {Boolean(sizes?.length) && (
        <div className="flex flex-col">
          <div className="text-sm text-[#9F9F9F] font-semibold">Size</div>
          <div>
            <SizeSelection
              sizes={sizes}
              handleSizeSelection={handleSizeSelection}
            />
          </div>
        </div>
      )}

      {Boolean(colors?.length) && (
        <div className="flex flex-col">
          <div className="text-sm font-semibold text-[#9F9F9F] ">Color</div>
          <div>
            <ColorSelection colors={colors} onColorChange={handleColorChange} />
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-7 h-[50px]">
        <CartAmountToggle
          mQuantity={quantity}
          handleQuantity={handleQuantityChange}
          id={_id}
        />
        <Link to={"/cart"}>
          <Button
            size="medium"
            onClick={() => {
              addToCart?.(
                _id,
                name,
                quantity,
                price,
                selectedColor,
                images[0],
                availableQuantity,
                selectedSize,
              );
            }}
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
        </Link>
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
