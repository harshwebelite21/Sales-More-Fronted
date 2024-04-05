import { FaCircle, FaTrash } from "react-icons/fa";
import { useState } from "react";
import CartAmountToggle from "../../SingleProduct/Components/ProductView/components/CartAmountToggle";

const CartItems = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      image: "https://via.placeholder.com/150",
      color: "Silver",
      price: 1200,
      quantity: 2,
    },
    {
      id: 2,
      name: "Smartphone",
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
  const removeItem = (id: number) => {
    console.log("Remove item with id:", id);
  };
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  return (
    <div className="w-full mx-auto  rounded-md my-3  ">
      <div className=" w-[90%] mx-auto grid grid-cols-7 gap-4 font-bold text-xl my-3 text-center flex-center">
        <div className=" col-span-3  ">Item</div>
        <div className="  ">Price</div>
        <div className="  ">Quantity</div>
        <div className="   ">SubTotal</div>
        <div className="    ">Remove Product</div>
      </div>
      <hr className="my-4" />
      <div className="w-[90%] mx-auto">
        {products.map((product) => {
          return (
            <div key={product.id} className="grid grid-cols-7 gap-4 ">
              <div className="grid grid-cols-2 col-span-3 items-center  ">
                <div className="m-1 flex">
                  <img
                    src={product.image}
                    alt={product.image}
                    className="size-28 rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-1 m-3 ">
                  <div className="font-bold text-xl">{product.name}</div>
                  <div className="flex items-center">
                    <span className="pr-1">Color : </span>
                    <span>
                      <FaCircle color={product.color} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="  flex-center text-bold font-sans ">
                ₹{product.price}
              </div>
              <div className="flex-center">
                <div className=" flex-center h-10">
                  <CartAmountToggle
                    quantity={quantity}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                  />
                </div>
              </div>
              <div className="flex-center text-[#46c832] ">₹1000</div>

              <div
                className="flex-center cursor-pointer "
                onClick={() => removeItem(product.id)}
              >
                <FaTrash className="text-red-500" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartItems;
