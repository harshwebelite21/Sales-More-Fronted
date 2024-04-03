import { useState } from "react";

const ColorSelection = () => {
  const colors: string[] = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleClick = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex gap-2 items-center">
      {colors.map((color) => {
        return (
          <div
            key={color}
            className={` p-1  cursor-pointer rounded-full  underline ${selectedColor === color ? "size-6" : "size-4"}`}
            style={{ backgroundColor: color }}
            onClick={() => handleClick(color)}
          ></div>
        );
      })}
    </div>
  );
};

export default ColorSelection;
