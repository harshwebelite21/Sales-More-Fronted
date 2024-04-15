import { Button, TextField } from "@mui/material";
import RatingStars from "../../../../../components/RatingStars";
import { ProductReview } from "../../../../../Types/ProductsTypes";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { number, object, string } from "yup";
import { useSendRequestContext } from "../../../../../Context/SendRequestContext";
import { useParams } from "react-router-dom";

const ReviewData = ({
  reviewData,
  isReviewLoading,
}: {
  reviewData: ProductReview[];
  isReviewLoading: boolean;
}) => {
  const { id } = useParams();

  const { addReview, isReviewAdded } = useSendRequestContext();
  const schema = object().shape({
    userName: string()
      .min(5)
      .matches(/^[a-zA-Z]+$/)
      .required(),
    userEmail: string()
      .email()
      .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
      .required(),
    rating: number().oneOf([1, 2, 3, 4, 5]).required(),
    reviewText: string().min(15).required(),
    productId: string().required(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      userEmail: "",
      rating: 1,
      reviewText: "",
      productId: "",
    },
    resolver: yupResolver(schema),
  });

  setValue("productId", id!);
  const handleStarChange = (newValue: number) => {
    setValue("rating", newValue);
  };

  return (
    <div className="w-full mx-auto p-2 flex flex-col">
      {Object.keys(reviewData).length === 0 ? (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-gray-700">No Review Found For This Product</p>
        </div>
      ) : (
        <>
          {isReviewLoading ? (
            <>Data is Loading</>
          ) : (
            <>
              {reviewData?.map((item) => (
                <div className="flex w-full p-2 gap-3" key={item._id}>
                  <div className=" w-[10%]  hidden md:flex justify-center">
                    <img
                      src={item.image}
                      alt={item.userName}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div className="md:w-[90%] w-full bg-[#f5f7f7] rounded-md md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-3xl md:rounded-tl-none  p-2 md:min-h-28">
                    <strong className="font-bold mb-2 text-[#969696]">
                      {item.userName}
                    </strong>
                    <div className="text-[#777]">{item.reviewText}</div>
                  </div>
                </div>
              ))}
            </>
          )}
        </>
      )}

      <hr className="my-10" />

      {!isReviewAdded ? (
        <div className="w-full mt-3">
          <div className="text-2xl font-bold text-[#212529] w-full px-5 mb-2">
            Add To Review
          </div>
          <div>
            <form onSubmit={handleSubmit((data) => addReview?.(data))}>
              <div className="px-5 m-1 ml-0">
                <label
                  htmlFor=" Rating"
                  className="font-bold text-[#212529] text-lg m-1 ml-0"
                >
                  Rating *
                </label>
                <div className="m-1 ml-0">
                  <RatingStars
                    readOnly={false}
                    stars={0}
                    onStarChange={handleStarChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 px-5 gap-2">
                <div className="">
                  <label
                    htmlFor="name"
                    className="font-bold text-[#212529] text-lg"
                  >
                    Name
                  </label>
                  <div>
                    <Controller
                      control={control}
                      name="userName"
                      render={({ field }) => (
                        <TextField
                          {...field}
                          id="outlined"
                          error={!!errors.userName}
                          variant="outlined"
                          className="w-full"
                          {...register}
                          InputLabelProps={{ shrink: false }}
                          helperText={
                            errors.userName ? errors.userName.message : ""
                          }
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor=" userEmail"
                    className="font-bold text-[#212529] text-lg"
                  >
                    Email
                  </label>
                  <div>
                    <Controller
                      control={control}
                      name="userEmail"
                      render={({ field }) => (
                        <TextField
                          {...field}
                          id="outlined-basic"
                          error={!!errors.userEmail}
                          variant="outlined"
                          className="w-full"
                          helperText={
                            errors.userEmail ? errors.userEmail.message : ""
                          }
                          {...register}
                          InputLabelProps={{ shrink: false }}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="px-5">
                <label
                  htmlFor=" reviewText"
                  className="font-bold text-[#212529] text-lg"
                >
                  Review
                </label>
                <div className="w-full min-h-32">
                  <Controller
                    control={control}
                    name="reviewText"
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="outlined-basic"
                        variant="outlined"
                        error={!!errors.reviewText}
                        helperText={
                          errors.reviewText ? errors.reviewText.message : ""
                        }
                        className="w-full"
                        {...register}
                        rows={5}
                        multiline={true}
                        InputLabelProps={{ shrink: false }}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="px-5 py-3">
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="bg-green-200 text-green-800 px-4 py-2 mb-4 rounded-md">
          Review Added Successfully
        </div>
      )}
    </div>
  );
};

export default ReviewData;
