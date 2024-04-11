import { useEffect, useState } from "react";
import {
  Button,
  MenuItem,
  Select,
  TextField,
  Slider,
  SelectChangeEvent,
} from "@mui/material";
import { useProductsContext } from "../../../Context/ProductsContext";
import { CategoryEnum } from "../../../utils/enums";
import { Product } from "../../../Types/ProductsTypes";

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const FilterSection = () => {
  const { getFilteredValue, products } = useProductsContext();

  // State variables
  const [selectedCategory, setSelectedCategory] = useState("7");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 1000);
  const [selectedCompany, setSelectedCompany] = useState("");

  // Derived data
  const categories = Object.values(CategoryEnum).filter(
    (category) => typeof category === "string",
  );

  // Handlers
  const handleCompanyChange = (event: SelectChangeEvent<string>) => {
    setSelectedCompany(event.target.value);
  };

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as [number, number]);
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const filterProductsByCompany = (
    products: Product[],
    selectedCategory: string,
  ): string[] => {
    const companies: Set<string> = new Set();
    products.forEach((company) => {
      if (selectedCategory === company.category) {
        companies.add(company.company);
      }
    });
    return Array.from(companies);
  };

  const company = filterProductsByCompany(products, selectedCategory);

  useEffect(() => {
    const queryParams = new URLSearchParams();

    if (selectedCategory !== "7") {
      queryParams.append("category", selectedCategory);
      queryParams.delete("company");
    } else {
      queryParams.delete("category");
    }
    if (selectedCategory === "7") {
      queryParams.delete("category");
    }

    if (priceRange[0] !== 0 || priceRange[1] !== 10000) {
      queryParams.append("minPrice", priceRange[0].toString());
      queryParams.append("maxPrice", priceRange[1].toString());
    }
    // Add other filters as needed
    if (selectedCompany) {
      queryParams.append("company", selectedCompany);
    }
    if (debouncedSearchValue !== "") {
      queryParams.append("name", debouncedSearchValue);
    }
    const queryString = queryParams.toString();
    console.log("🚀 ~ useEffect ~ queryString:", queryString);
    getFilteredValue?.(`products/filter/?${queryString}`);
  }, [selectedCategory, priceRange, debouncedSearchValue, selectedCompany]);

  return (
    <div className="sticky top-20">
      <div
        className={`flex flex-col gap-8 w-full h-fit md:border-r-2 border-gray-200  md:my-5  md:pl-0 p-5  ${isFilterVisible ? "block" : "hidden md:block"}`}
      >
        <div className="flex items-center mt-4 -z-10">
          <TextField
            id="outlined-basic"
            label="Search..."
            variant="outlined"
            size="small"
            className="w-full "
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-2xl text- m-1">Category</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {categories.map((category) => (
              <Button
                variant="contained"
                size="small"
                key={category}
                onClick={() =>
                  setSelectedCategory(CategoryEnum[category as number])
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-2xl text- m-1">Company</div>
          <Select
            value={selectedCompany}
            onChange={handleCompanyChange}
            displayEmpty
            className="w-full"
            size="small"
          >
            <MenuItem value="" disabled>
              Select Category
            </MenuItem>
            {company.map((category) => (
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
            max={10000}
            min={0}
            className="w-full"
          />
        </div>

        <div>
          <Button variant="contained" color="secondary" className="w-full">
            Clear Filters
          </Button>
        </div>
      </div>
      <button
        color="primary"
        onClick={toggleFilterVisibility}
        className={`${
          isFilterVisible
            ? "bg-red-500 hover:bg-red-700"
            : "bg-blue-500 hover:bg-blue-700"
        } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform active:scale-95 transition duration-150 ease-in-out w-full md:hidden`}
      >
        {isFilterVisible ? "Hide Filters" : "Apply Filters"}
      </button>
    </div>
  );
};

export default FilterSection;
