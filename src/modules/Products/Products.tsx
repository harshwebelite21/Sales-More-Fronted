import { useEffect } from "react";
import FilterSection from "./components/FilterSection";
import ProductsBanner from "./components/ProductsBanner";
import ProductsList from "./components/ProductsList";
import SortSection from "./components/SortSection";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ProductsBanner />
      <div className="flex gap-5 w-[90%] mx-auto flex-col md:flex-row">
        <div className="md:w-1/4">
          <FilterSection />
        </div>
        <div className="flex flex-col gap-5 md:w-3/4">
          <SortSection />
          <ProductsList />
        </div>
      </div>
    </div>
  );
};

export default Products;
