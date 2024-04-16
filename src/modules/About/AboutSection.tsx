import AboutBanner from "./Components/AboutBanner";
import OurTeam from "./Components/OurTeam";
import WhyChooseUs from "./Components/WhyChooseUs";

const AboutSection = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <AboutBanner />
      <WhyChooseUs />
      <OurTeam />
    </div>
  );
};

export default AboutSection;
