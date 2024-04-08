import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import TablesData from "./Components/TablesData";
import ReviewData from "./Components/ReviewData";

const ProductMoreInfo = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
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
            <Tab value="three" label="REVIEWS (2)" />
          </Tabs>
        </Box>
      </div>
      <div className="m-3 ">
        <div className={`${value === "one" ? "" : "hidden"} text-gray-400`}>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Fusce sagittis, massa fringilla consequat blandit,
          mauris ligula porta nisi, non tristique enim sapien vel nisl.
          Suspendisse vestibulum lobortis dapibus. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Fusce sagittis, massa
          fringilla consequat blandit, mauris ligula porta nisi, non tristique
          enim sapien vel nisl. Suspendisse vestibulum lobortis dapibus.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae;
        </div>
        <div className={`${value === "two" ? "" : "hidden"}`}>
          <TablesData />
        </div>
        <div className={`${value === "three" ? "" : "hidden"}`}>
          <ReviewData />
        </div>
      </div>
    </div>
  );
};

export default ProductMoreInfo;
