import { BannerImageSection } from "./Component/BannerSection/BannerImageSection";
import Services from "./Component/Services/Services";
import MySwiper from "./Component/Swiper/Swiper";
import Trusted from "./Component/Trusted/Trusted";

const Home = () => {
  return (
    <div>
      <BannerImageSection />
      <MySwiper />
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;
