import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useProductsContext } from "../../../Context/ProductsContext";
// import { SortEnum } from "../../../utils/enums";

const SortSection = () => {
  const [selectedOrder, setSelectedOrder] = useState("name");
  // const sortOrder = Object.keys(SortEnum).filter(
  //   (category) => typeof category === "string",
  // );

  const sortOrder = ["name", "price"];

  const { handleSort, itemsAvailable, handleViewType, gridViewType } =
    useProductsContext();

  const handleOrderChange = (event: SelectChangeEvent<string>) => {
    handleSort?.(event.target.value.toLowerCase());
    setSelectedOrder(event.target.value.toLowerCase());
  };

  return (
    <div className="w-full border-2 rounded md:my-5 grid items-center p-3 grid-cols-2 md:grid-cols-3 gap-3">
      <div className="hidden md:flex">
        <button
          aria-label="Toggle grid view"
          className={`px-4 py-2 ${gridViewType ? "bg-gray-400" : "bg-white"} hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-l`}
          onClick={handleViewType}
          type="button"
        >
          <BsFillGridFill className="text-2xl" />
        </button>

        <button
          aria-label="Toggle List view"
          type="button"
          className={`px-4 py-2 ${!gridViewType ? "bg-gray-400" : "bg-white"} hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-r`}
          onClick={handleViewType}
        >
          <BsList className="text-2xl" />
        </button>
      </div>

      <div>{itemsAvailable} Products Available</div>

      <Select
        value={selectedOrder}
        onChange={handleOrderChange}
        displayEmpty
        className="w-full"
        size="small"
      >
        <MenuItem value="" disabled>
          Select Category
        </MenuItem>
        {sortOrder.map((order) => (
          <MenuItem key={order} value={order}>
            {order}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SortSection;
