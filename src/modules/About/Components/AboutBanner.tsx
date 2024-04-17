import about_bg from "../../../images/about_bg.jpg";
import "./style/about.css";

const AboutBanner = () => {
  return (
    <div className="relative w-full h-screen">
      <img src={about_bg} alt="" className="h-[88dvh] w-full object-cover" />
      <div className="absolute left-[15%] top-[30%] flex flex-col gap-4 flex-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-libre">
          About Products
        </h1>
        <button className="explore-button">Explore Now</button>
      </div>
    </div>
  );
};

export default AboutBanner;
