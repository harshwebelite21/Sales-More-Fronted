import { TextField } from "@mui/material";
import { object, string, number, array } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { CartItemType } from "../../../Types/ProductsTypes";
import { useCartContext } from "../../../Context/CartContext";
import { usePaymentContext } from "../../../Context/PaymentContext";
import { useState } from "react";

const OrderDetails = () => {
  const { cart, orderTotal } = useCartContext();
  const [addConfirmed, setAddConfirmed] = useState(false);
  const { addPayment } = usePaymentContext();

  const schema = object().shape({
    userName: string()
      .min(5)
      .matches(/^[a-zA-Z]+$/)
      .required(),
    userEmail: string()
      .email()
      .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
      .required(),
    country: string().required(),
    address: string().required(),
    state: string().required(),
    pinCode: number().required(),
    mobileNo: number().required(),
    notes: string().required(),
    orderTotal: number().required(),
    cartItems: array()
      .required()
      .of(
        object().shape({
          id: string().required(),
          name: string().required(),
          quantity: number().required(),
          price: number().required(),
          selectedColor: string().required(),
          image: string().required(),
          availableQuantity: number().required(),
          size: string().required(),
          subTotal: number().required(),
        }),
      )
      .required(),
  });

  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      userEmail: "",
      country: "",
      state: "",
      address: "",
      notes: "",
      cartItems: [],
      orderTotal,
      pinCode: 0,
      mobileNo: 0,
    },
    resolver: yupResolver(schema),
  });

  const handleOrder = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setValue("orderTotal", orderTotal);
    const data = getValues();
    addPayment?.(data);
  };

  return (
    <div className=" w-[80%] mx-auto flex flex-col md:flex-row gap-5">
      <div className="md:w-[50%] flex gap-5">
        <div className=" mx-auto flex flex-col w-full  lg:p-10 gap-2">
          <div className="font-libre text-xl">Billing Details</div>
          <form
            onSubmit={handleSubmit(() => {
              setValue("cartItems", cart);
              setAddConfirmed(true);
            })}
          >
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

              <div className="w-full">
                <Controller
                  control={control}
                  name="userName"
                  render={({ field }) => (
                    <TextField
                      className="w-full"
                      placeholder="User Name"
                      {...field}
                      {...register}
                      error={!!errors.userName}
                      helperText={
                        errors.userName ? errors.userName.message : ""
                      }
                    />
                  )}
                />
              </div>

              <div className="w-full">
                <Controller
                  control={control}
                  name="address"
                  render={({ field }) => (
                    <TextField
                      className="w-full"
                      placeholder="Address"
                      {...field}
                      {...register}
                      error={!!errors.address}
                      helperText={errors.address ? errors.address.message : ""}
                      multiline={true}
                      rows={5}
                    />
                  )}
                />
              </div>

              <div className="w-full flex gap-5">
                <div className="w-full">
                  <Controller
                    control={control}
                    name="state"
                    render={({ field }) => (
                      <TextField
                        className="w-full"
                        placeholder="State"
                        {...field}
                        {...register}
                        error={!!errors.state}
                        helperText={errors.state ? errors.state.message : ""}
                      />
                    )}
                  />
                </div>
                <div className="w-full">
                  <Controller
                    control={control}
                    name="pinCode"
                    render={({ field }) => (
                      <TextField
                        className="w-full"
                        placeholder="Pin Code"
                        label="Pin Code"
                        type="number"
                        {...field}
                        {...register}
                        error={!!errors.pinCode}
                        helperText={
                          errors.pinCode ? errors.pinCode.message : ""
                        }
                      />
                    )}
                  />
                </div>
              </div>

              <div className="w-full flex gap-5">
                <div className="w-full">
                  <Controller
                    control={control}
                    name="userEmail"
                    render={({ field }) => (
                      <TextField
                        className="w-full"
                        placeholder="Your Email"
                        {...field}
                        {...register}
                        label="Mobile No"
                        error={!!errors.userEmail}
                        helperText={
                          errors.userEmail ? errors.userEmail.message : ""
                        }
                      />
                    )}
                  />
                </div>
                <div className="w-full">
                  <Controller
                    control={control}
                    name="mobileNo"
                    render={({ field }) => (
                      <TextField
                        className="w-full"
                        type="number"
                        placeholder="Mobile No"
                        {...field}
                        {...register}
                        error={!!errors.mobileNo}
                        helperText={
                          errors.mobileNo ? errors.mobileNo.message : ""
                        }
                      />
                    )}
                  />
                </div>
              </div>

              <div className="w-full">
                <Controller
                  control={control}
                  name="notes"
                  render={({ field }) => (
                    <TextField
                      className="w-full"
                      placeholder="Notes"
                      {...field}
                      {...register}
                      error={!!errors.notes}
                      helperText={errors.notes ? errors.notes.message : ""}
                      rows={5}
                      multiline={true}
                    />
                  )}
                />
              </div>

              <div className="w-full flex-center">
                <button
                  className="bg-black text-white w-fit h-8 px-10"
                  type="submit"
                >
                  Confirm Address
                </button>
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

            {cart?.map((order: CartItemType) => (
              <div key={order.name}>
                <hr />
                <div key={order.name} className="w-full flex justify-around">
                  <div className="w-[50%]">{order.name}</div>
                  <div className="w-[50%]">{order.subTotal}</div>
                </div>
              </div>
            ))}
            <hr />
            <div className="flex w-full justify-around font-bold text-xl        ">
              <div className="w-[50%]">Order Total</div>
              <div className="w-[50%]">${orderTotal}</div>
            </div>
          </div>
          <div>
            <div className="w-full flex-center">
              {addConfirmed ? (
                <button
                  className="bg-black text-white w-fit h-8 px-10"
                  type="submit"
                  onClick={handleOrder}
                >
                  Place Order
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
