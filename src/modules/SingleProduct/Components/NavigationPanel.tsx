import { Link } from "react-router-dom";

const NavigationPanel = () => {
  return (
    <div className="w-full bg-[#F9F1E7] h-[100px] flex-center gap-5">
      <Link to="/" className="text-[#9F9F9F] text-lg">
        Home
      </Link>

      <div className="text-gray-500 text-2xl">&gt;</div>

      <Link to="/products" className="text-[#9F9F9F] text-lg">
        Shop
      </Link>

      <div className="text-gray-500 text-2xl">&gt;</div>

      <span className="text-gray-500 text-lg">Product Name</span>
    </div>
  );
};

export default NavigationPanel;
