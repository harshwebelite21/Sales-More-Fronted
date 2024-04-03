import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

const SortSection = () => {
  const [gridView, setGridView] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = ["All", "jgs", "fgd", "dfv"];

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value);
  };

  const handleGridViewClick = () => {
    setGridView(true);
  };

  const handleListViewClick = () => {
    setGridView(false);
  };

  return (
    <div className="w-full border-2 rounded md:my-5 grid items-center p-3 grid-cols-2 md:grid-cols-3 gap-3">
      <div className="hidden md:flex">
        <button
          aria-label="Toggle grid view"
          className={`px-4 py-2 ${gridView ? "bg-gray-400" : "bg-white"} hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-l`}
          onClick={handleGridViewClick}
          type="button"
        >
          <BsFillGridFill className="text-2xl" />
        </button>

        <button
          aria-label="Toggle List view"
          type="button"
          className={`px-4 py-2 ${!gridView ? "bg-gray-400" : "bg-white"} hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-r`}
          onClick={handleListViewClick}
        >
          <BsList className="text-2xl" />
        </button>
      </div>

      <div>12 Products Available</div>

      <Select
        value={selectedCategory}
        onChange={handleCategoryChange}
        displayEmpty
        className="w-full"
        size="small"
      >
        <MenuItem value="" disabled>
          Select Category
        </MenuItem>
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SortSection;
