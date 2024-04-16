import { TextField } from "@mui/material";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { CartItemType } from "../../../Types/ProductsTypes";
import { useCartContext } from "../../../Context/CartContext";

const OrderDetails = () => {
  const { cart, orderTotal } = useCartContext();

  const schema = object().shape({
    userName: string()
      .min(5)
      .matches(/^[a-zA-Z]+$/)
      .required(),
    userEmail: string()
      .email()
      .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
      .required(),
    subject: string().min(15).required(),
    country: string(),
    description: string().min(30).required(),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      userEmail: "",
      subject: "",
      description: "",
      country: "",
    },
    resolver: yupResolver(schema),
  });
  return (
    <div className=" w-[80%] mx-auto flex flex-col md:flex-row gap-5">
      <div className="md:w-[50%] flex gap-5">
        <div className=" mx-auto flex flex-col w-full  lg:p-10 gap-2">
          <div className="font-libre text-xl">Billing Details</div>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="border-2 lg:p-12 p-5 flex flex-col gap-5">
              <div className="w-full">
                <Controller
                  control={control}
                  name="country"
                  render={({ field }) => (
                    <TextField
                      className="w-full"
                      placeholder="Country"
                      {...field}
                      {...register}
                      error={!!errors.country}
                      helperText={errors.country ? errors.country.message : ""}
                    />
                  )}
                />
              </div>

              <div className="flex gap-5 w-full">
                <div className="w-full">
                  <TextField placeholder="first name" />
                </div>
                <div className="w-full">
                  <TextField placeholder="last name" />
                </div>
              </div>

              <div className="w-full">
                <TextField
                  className="w-full"
                  placeholder="address"
                  multiline={true}
                  rows={5}
                />
              </div>

              <div className="w-full flex gap-5">
                <div className="w-full">
                  <TextField className="w-full" placeholder="state" />
                </div>
                <div className="w-full">
                  <TextField placeholder="pin code" />
                </div>
              </div>

              <div className="w-full flex gap-5">
                <div className="w-full">
                  <TextField className="w-full" placeholder="Your Email" />
                </div>{" "}
                <div className="w-full">
                  <TextField placeholder="phone" className="w-full" />
                </div>
              </div>

              <div className="w-full">
                <TextField
                  className="w-full"
                  rows={5}
                  multiline={true}
                  placeholder="notes"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="md:w-[50%] flex gap-5">
        <div className=" mx-auto flex flex-col w-full  lg:p-10 gap-2">
          <div className="font-libre text-xl">Your Orders</div>
          <div className="border-2 lg:p-12 p-5 flex flex-col gap-1">
            <div className="flex w-full justify-around font-bold text-xl        ">
              <div className="w-[50%]">Product</div>
              <div className="w-[50%]">Total</div>
            </div>

            {/* Render orders using map function */}
            {cart?.map((order: CartItemType) => (
              <>
                <hr />
                <div key={order.name} className="w-full flex justify-around">
                  <div className="w-[50%]">{order.name}</div>
                  <div className="w-[50%]">{order.subTotal}</div>
                </div>
              </>
            ))}
            <hr />
            <div className="flex w-full justify-around font-bold text-xl        ">
              <div className="w-[50%]">Order Total</div>
              <div className="w-[50%]">${orderTotal}</div>
            </div>
          </div>
          <div>
            <div>
              <button className="bg-black text-white w-full h-8">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
