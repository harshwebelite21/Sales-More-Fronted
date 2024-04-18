import { useState } from "react";
import PropTypes from "prop-types";

const ColorSelection = ({
  colors,
  onColorChange,
}: {
  colors: string[];
  onColorChange: (color: string) => void;
}) => {
  const [selectedColor, setSelectedColor] = useState(colors?.[0]);

  const handleClick = (color: string) => {
    setSelectedColor(color);
    onColorChange(color);
  };

  return (
    <div className="flex gap-2 items-center">
      {colors?.map((color: string) => {
        return (
          <div
            key={color}
            className={` p-1  cursor-pointer rounded-full border-black border-2  underline ${selectedColor === color ? "size-6" : "size-4"}`}
            style={{ backgroundColor: color }}
            onClick={() => handleClick(color)}
          />
        );
      })}
    </div>
  );
};
ColorSelection.propTypes = { colors: PropTypes.arrayOf(PropTypes.string) };

export default ColorSelection;
