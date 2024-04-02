import {
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Slider,
} from "@mui/material";
import { useState } from "react";

const FilterSection = () => {
  const categories = ["All", "jgs", "fgd", "dfv"];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value);
  };
  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as [number, number]);
  };

  return (
    <div className="flex flex-col gap-8 w-full h-fit border-r-2 border-gray-200 my-5 p-5 sticky top-20">
      <div className="flex items-center mt-4 -z-10">
        <TextField
          id="outlined-basic"
          label="Search..."
          variant="outlined"
          size="small"
          className="w-full "
        />
      </div>

      <div className="flex flex-col">
        <h3 className="text-2xl text- m-1">Category</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {categories.map((category) => (
            <Button variant="contained" key={category}>
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <div className="text-2xl text- m-1">Company</div>
        <Select
          value={selectedCategory}
          onChange={handleCategoryChange}
          displayEmpty
          className="w-full size-10"
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

      <div>
        <div className="text-2xl text- m-1">Price</div>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          max={100}
          min={0}
          className="w-full"
        />
      </div>

      <div>
        <Button variant="contained" color="secondary">
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterSection;
