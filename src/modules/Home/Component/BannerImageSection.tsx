import BannerImage from "../../../images/hero.jpg";
import "./bannerimage.css";

export const BannerImageSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-12 justify-items-center relative -z-10">
      <div className="flex flex-col gap-5 justify-center md:text-left items-center md:items-start">
        <h3 className="text-[#5138ee] text-xl">WELCOME TO</h3>
        <h1 className="text-4xl font-bold">Sales More</h1>
        <p className="text-base w-[80%]">
          It wasn&lsquot quite yet time to panic. There was still time to
          salvage the situation. At least that is what she was telling himself.
          The reality was that it was time to panic and there wasn &lsquot time
          to salvage the situation, but he continued to delude himself into
          believing there was.
        </p>
      </div>

      <div className="hero-section-image pl-2 pr-6 lg:pr-10 mt-20 items-center justify-around ">
        <figure className="relative  ">
          <img
            src={BannerImage}
            alt="banner"
            className="h-auto w-auto md:h-96 md:w-full object-cover"
          />
        </figure>
      </div>
    </div>
  );
};
