import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

// Sample data for products
const products = [
  {
    id: 1,
    name: "Product 1",
    imageUrl:
      "https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Product 2",
    imageUrl:
      "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Product 3",
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Product 4",
    imageUrl:
      "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

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
  return (
    <div className="mt-40 mb-20 w-[90%] mx-auto flex flex-col gap-5">
      <div className="md:px-10">
        <div className="text-[#5138ee] pb-0 text-xl">Check Now!</div>
        <div className="text-4xl pt-0  font-bold">Our Feature Services</div>
      </div>
      <div className="h-auto flex items-center justify-center">
        <Swiper
          spaceBetween={30}
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
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="m-10 mt-0">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-auto rounded"
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
