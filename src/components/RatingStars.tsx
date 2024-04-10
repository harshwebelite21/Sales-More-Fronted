import { Box, Rating } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

const RatingStars = ({
  readOnly,
  stars,
}: {
  readOnly: boolean;
  stars: number;
}) => {
  const [value, setValue] = useState<number | null>(stars);

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
        readOnly={readOnly}
      />
    </Box>
  );
};

RatingStars.propTypes = {
  readOnly: PropTypes.bool.isRequired,
};

export default RatingStars;
