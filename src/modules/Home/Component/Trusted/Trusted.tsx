import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

const Trusted = () => {
  const images = [
    "https://img.freepik.com/free-vector/logo-with-shape-3d_1043-51.jpg?t=st=1711976002~exp=1711979602~hmac=c6d43af917143d9fd72fedf2d654b880d14c034242b5774036085b4c5fd9686c&w=740",
    "https://img.freepik.com/free-vector/logo-with-metallic-abstract-shapes_1017-1088.jpg?t=st=1711975980~exp=1711979580~hmac=a2cf27f51789f38ec35bd919a33f63bb135bccc63eab12a29c428279ff71dcc2&w=740",
    "https://img.freepik.com/free-vector/geometrical-logo-warm-tones_1043-156.jpg?t=st=1711975959~exp=1711979559~hmac=c582b8e0b22fa4bc7f24fe8948095456ff482395aa12dad77da608cde123d504&w=740",
    "https://img.freepik.com/free-vector/airlines-company-logo-template_1043-164.jpg?t=st=1711975940~exp=1711979540~hmac=cf720dcefbb10f66129d728aa7bcc27c2c610f1ffaf7762b786bb7ae9d176642&w=740",
    "https://img.freepik.com/free-vector/people-group-colorful-gradient-logo_343694-1962.jpg?t=st=1711975918~exp=1711979518~hmac=af64b1b53bc1ac7b8785cd7f1b950869b8ac3c714ed8559df7a46d374ab88f83&w=740",
    "https://img.freepik.com/free-vector/abstract-orange-triangle-logo_1043-120.jpg?t=st=1711975888~exp=1711979488~hmac=660959ef4fcbedca45c996fa3959b44d32630798115316585625f82bf1768d6d&w=740",
  ];

  const swiperOptions: SwiperOptions = {
    breakpoints: {
      640: {
        slidesPerView: 4,
      },
      0: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <div className="relative my-10 md:mb-20 flex flex-col gap-5 w-[90%] mx-auto -z-10">
      <div className="text-center capitalize text-[#1d1d1dcc] text-2xl font-bold">
        Trusted By 1000+ Companies
      </div>
      <div className="relative h-auto flex items-center justify-center mx-[10%]">
        <Swiper
          spaceBetween={20}
          loop={true}
          {...swiperOptions}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((imagesUrl) => (
            <SwiperSlide
              key={imagesUrl}
              className="flex items-center justify-center"
            >
              <div className="flex items-center justify-center shadow-lg bg-light my-10 h-[150px] w-[150px] rounded-[20px]">
                <img
                  src={imagesUrl}
                  alt={imagesUrl}
                  className="rounded-[20px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Trusted;
