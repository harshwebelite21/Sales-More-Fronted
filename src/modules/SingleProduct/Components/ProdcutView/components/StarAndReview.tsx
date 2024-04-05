import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarModule = () => {
  const star = 3.5;
  const review = 5;
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    const rating = index + 1;
    const isHalfStar = star >= rating - 0.5 && star < rating;
    const isFullStar = star >= rating;

    return (
      <span key={index}>
        {isFullStar ? (
          <FaStar className="icon " color="orange" />
        ) : isHalfStar ? (
          <FaStarHalfAlt className="icon" color="orange" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });
  return (
    <div className="icon-style flex items-center">
      {ratingStar}
      <p className="mx-5 text-[#9F9F9F] border-1-">|</p>
      <p className="text-[#9F9F9F]">{review} customer reviews</p>
    </div>
  );
};

export default StarModule;
