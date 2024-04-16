import { Link } from "react-router-dom";
import productsBanner from "../images/ProductsBanner.png";

const Banner = ({ section }: { section: string }) => {
  return (
    <div className="relative h-[90%] ">
      <img
        src={productsBanner}
        className="w-full h-[250px] md:h-[300px] object-cover"
        alt="Product Banner"
      />
      <div className="absolute inset-0 flex-center flex-col">
        <div className="text-red text-center text-5xl font-bold">{section}</div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-blue-500 hover:text-blue-700">
            <span className="font-semibold">Home</span> &gt;
          </Link>
          <div className="text-gray-800 font-semibold">{section}</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
