import BannerImage from "../../../images/bannerImage.png";
export const BannerImageSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 w-[90%] mx-auto my-10 lg:py-10">
      <div className="flex flex-col gap-7 justify-center">
        <div>
          <h3 className="text-2xl ">WELCOME TO</h3>
          <h1 className="text-5xl text-[#512DA8] font-bold">Sales More</h1>
        </div>
        <p className="text-lg text-gray-700 w-[80%] md:w-[100%]">
          Be the first to know about the latest trends and must-have items. Our
          home page showcases a curated selection of trending products across
          various categories, including fashion, electronics, home essentials,
          and more. Whether you`re looking for stylish apparel, cutting-edge
          gadgets, or practical household items.
        </p>
      </div>
      <div className="flex justify-center">
        <img src={BannerImage} alt="banner" className="object-contain" />
      </div>
    </div>
  );
};
