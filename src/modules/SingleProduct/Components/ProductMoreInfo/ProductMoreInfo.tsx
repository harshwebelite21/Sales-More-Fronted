import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import TablesData from "./Components/TablesData";
import { Product, ProductReview } from "../../../../Types/ProductsTypes";
import ReviewData from "./Components/ReviewData";

const ProductMoreInfo = ({
  product,
  reviewData,
  isReviewLoading,
}: {
  product: Product;
  reviewData: ProductReview[];
  isReviewLoading: boolean;
}) => {
  const { description, attributes } = product;
  const [value, setValue] = useState("one");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="w-[90%] mx-auto my-10">
      <div>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: { background: "#212529" },
            }}
            sx={{
              "& .MuiTab-root": {
                color: "#212529",
                border: 0,
                borderBottom: "3px solid #eee",
                fontSize: "16px",
                fontWeight: "bold",
              },
              "@media (max-width:600px)": {
                flexDirection: "column",
                "& .MuiTabs-flexContainer": {
                  flexDirection: "column",
                },
                "& .MuiTab-root": {
                  fontSize: "14px",
                },
              },
            }}
          >
            <Tab value="one" label="DESCRIPTION" />
            <Tab value="two" label="ADDITIONAL INFORMATION" />
            <Tab
              value="three"
              label={`REVIEWS (${Object.keys(reviewData).length})`}
            />
          </Tabs>
        </Box>
      </div>
      <div className="m-3 ">
        <div className={`${value === "one" ? "" : "hidden"} text-gray-400`}>
          {description}
        </div>
        <div className={`${value === "two" ? "" : "hidden"}`}>
          <TablesData attributes={attributes} />
        </div>
        <div className={`${value === "three" ? "" : "hidden"}`}>
          <ReviewData
            reviewData={reviewData}
            isReviewLoading={isReviewLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductMoreInfo;
