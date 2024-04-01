import { BannerImageSection } from "./Component/BannerSection/BannerImageSection";
import MySwiper from "./Component/Swiper/Swiper";
import Trusted from "./Component/Trusted/Trusted";

const Home = () => {
  return (
    <div>
      <BannerImageSection />
      <MySwiper />
      <Trusted />
    </div>
  );
};

export default Home;
