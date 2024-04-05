import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useState } from "react";

export default function BasicRating() {
  const [value, setValue] = useState<number | null>(2);

  return (
    <Box>
      <Rating
        value={value}
        name="half-rating"
        defaultValue={0}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
