import { BannerImageSection } from "./Component/BannerImageSection";
import Services from "./Component/Services/Services";
import MySwiper from "./Component/Swiper/Swiper";

const Home = () => {
  return (
    <div>
      <BannerImageSection />
      <MySwiper />
      <Services />
    </div>
  );
};

export default Home;
