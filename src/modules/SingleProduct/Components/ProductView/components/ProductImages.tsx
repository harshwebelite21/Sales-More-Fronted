import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Product } from "../../../../../Types/ProductsTypes";

const ProductImages = ({ product }: { product: Product }) => {
  const isSingleLoading = false;
  const [selectedImage, setSelectedImage] = useState(product?.images?.at(0));

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const applyCss = () => {};
  return (
    <>
      {isSingleLoading ? (
        <div>Loading product images...</div>
      ) : (
        <>
          <div className="md:flex flex-col gap-5 w-full h-full hidden">
            <div className=" w-full h-[380px]">
              <img
                src={selectedImage}
                alt={selectedImage}
                onChange={() => applyCss()}
                className="object-cover h-full w-full rounded-md random"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product?.images?.map((image: string) => (
                <img
                  key={image}
                  src={image}
                  alt={image}
                  onClick={() => handleImageClick(image)}
                  className={`cursor-pointer object-cover rounded-md w-[350px] h-[120px] `}
                />
              ))}
            </div>
          </div>
          <div className="gap-5 m-3 md:hidden">
            <Swiper
              className="mySwiper"
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {product?.images?.map((image) => (
                <SwiperSlide key={image}>
                  <div className=" relative">
                    <img
                      src={image}
                      alt={image}
                      className="w-full h-auto rounded-[20px] object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </>
  );
};

export default ProductImages;
