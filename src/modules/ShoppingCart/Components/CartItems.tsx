import { FaCircle, FaTrash } from "react-icons/fa";
import CartAmountToggle from "../../SingleProduct/Components/ProductView/components/CartAmountToggle";
import { CartItemType } from "../../../Types/ProductsTypes";
import { useCartContext } from "../../../Context/CartContext";

const CartItems = ({ cart }: { cart: CartItemType[] }) => {
  const handleQuantityChange = () => {};

  const { removeItemFromCart } = useCartContext();
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
        {cart.map((product) => {
          return (
            <div key={product.id} className="grid grid-cols-7 gap-4 ">
              <div className="grid grid-cols-2 col-span-3 items-center  ">
                <div className="m-1 flex">
                  <img
                    src={product.image}
                    alt={product.image}
                    className="rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-1 m-3 ">
                  <div className="font-bold text-xl">{product.name}</div>
                  <div className="flex items-center">
                    <span className="pr-1">Color : </span>
                    <span>
                      <FaCircle color={product.selectedColor} />
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
                    mQuantity={product.quantity}
                    handleQuantity={handleQuantityChange}
                    id={product.id}
                  />
                </div>
              </div>
              <div className="flex-center text-[#46c832] ">
                ₹{product.subTotal}
              </div>

              <div
                className="flex-center cursor-pointer "
                onClick={() => removeItemFromCart?.(product.id)}
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
