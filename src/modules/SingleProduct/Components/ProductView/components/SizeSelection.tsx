import { useState } from "react";
const SizeSelection = ({
  sizes,
  handleSizeSelection,
}: {
  sizes: string[];
  handleSizeSelection: (size: string) => void;
}) => {
  const [selectedSize, setSelectedSize] = useState(sizes?.at(0));

  const handleClick = (size: string) => {
    setSelectedSize(size);
    handleSizeSelection(size);
  };

  return (
    <div className="flex gap-3">
      {sizes?.map((size) => (
        <div
          key={size}
          onClick={() => handleClick(size)}
          className={`cursor-pointer rounded-md p-1 text-sm ${selectedSize === size ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7] text-black"}`}
        >
          {size}
        </div>
      ))}
    </div>
  );
};

export default SizeSelection;
