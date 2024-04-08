import { Button, TextField } from "@mui/material";
import RatingStars from "../../../../../components/RatingStars";

const ReviewData = () => {
  const dummyData = [
    {
      name: "Product 1",
      description: "Description of Product 1",
      image:
        "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg",
    },
    {
      name: "Product 2",
      description: "Description of Product 2",
      image:
        "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg",
    },
    {
      name: "Product 3",
      description: "Description of Product 3",
      image:
        "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg",
    },
  ];

  return (
    <div className="w-full mx-auto p-2 flex flex-col">
      {dummyData.map((item) => (
        <div className="flex w-full p-2 gap-3" key={item.name}>
          <div className=" w-[10%]  hidden md:flex justify-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <div className="md:w-[90%] w-full bg-[#f5f7f7] rounded-md md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-3xl md:rounded-tl-none  p-2 md:min-h-28">
            <strong className="font-bold mb-2 text-[#969696]">
              {item.name}
            </strong>
            <div className="text-[#777]">{item.description}</div>
          </div>
        </div>
      ))}
      <hr className="my-10" />
      <div className="w-full mt-3">
        <div className="text-2xl font-bold text-[#212529] w-full px-5 mb-2">
          Add To Review
        </div>
        <div>
          <form>
            <div className="px-5 m-1 ml-0">
              <label
                htmlFor=" Rating"
                className="font-bold text-[#212529] text-lg m-1 ml-0"
              >
                Rating *
              </label>
              <div className="m-1 ml-0">
                <RatingStars readOnly={false} />
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
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    className="w-full"
                    InputLabelProps={{ shrink: false }}
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor=" email"
                  className="font-bold text-[#212529] text-lg"
                >
                  Email
                </label>
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    className="w-full"
                    InputLabelProps={{ shrink: false }}
                  />
                </div>
              </div>
            </div>
            <div className="px-5">
              <label
                htmlFor=" review"
                className="font-bold text-[#212529] text-lg"
              >
                Review
              </label>
              <div className="w-full min-h-32">
                <TextField
                  id="outlined-basic"
                  label="Review"
                  variant="outlined"
                  className="w-full"
                  rows={5}
                  multiline={true}
                  InputLabelProps={{ shrink: false }}
                />
              </div>
            </div>
            <div className="px-5 py-3">
              <Button variant="contained">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewData;
