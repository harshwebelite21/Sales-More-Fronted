import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductImages = () => {
  const images: string[] = [
    "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg",
    "https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.jpg?s=612x612&w=0&k=20&c=EWKEahyVLY8iAHyirCCDESHRGW37lqUJ7In0SssNSLE=",
    "https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688502.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712102400&semt=ais",
    "https://st2.depositphotos.com/1760420/5432/i/450/depositphotos_54324565-stock-photo-online-shopping-and-e-commerce.jpg",
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div className="lg:flex hidden gap-5 m-3 ">
        <div className="flex flex-col gap-4 h-full lg:w-[25%] md:w-[45%] ">
          <div className="w-full flex-col flex gap-3 justify-center md:justify-start">
            {images.map((image: string) => (
              <img
                key={image}
                src={image}
                alt={image}
                onClick={() => handleImageClick(image)}
                className="cursor-pointer rounded-md"
              />
            ))}
          </div>
        </div>

        <div className="h-96 w-full size-56">
          <img
            src={selectedImage}
            alt={selectedImage}
            className="object-cover h-full w-full rounded-md"
          />
        </div>
      </div>
      <div className="gap-5 m-3 lg:hidden">
        <Swiper className="mySwiper">
          {images.map((image) => (
            <SwiperSlide key={image}>
              <div className=" relative">
                <img
                  src={image}
                  alt={image}
                  className="w-full h-auto rounded-[20px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductImages;
