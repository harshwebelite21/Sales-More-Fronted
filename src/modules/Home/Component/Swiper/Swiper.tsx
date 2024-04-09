import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import { useProductsContext } from "../../../../Context/ProductsContext";
import { Product } from "../../../../Types/ProductsTypes";

const swiperOptions: SwiperOptions = {
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const MySwiper = () => {
  const { featureProducts } = useProductsContext();

  return (
    <div className="relative my-10 md:mb-20 flex flex-col gap-5 w-[90%] mx-auto -z-10">
      <div className=" relative">
        <div className="text-[#5138ee] pb-0 text-xl">Check Now!</div>
        <div className="text-4xl md:text-3xl lg:text-4xl pt-0 font-bold">
          Our Feature Services
        </div>
      </div>
      <div className="relative h-auto flex items-center justify-center">
        <Swiper
          spaceBetween={20}
          loop={true}
          {...swiperOptions}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {featureProducts.map((product: Product) => (
            <SwiperSlide key={product._id}>
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className=" border-2 rounded-[20px] h-[250px] w-[425px]  object-fit"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MySwiper;
