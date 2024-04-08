import { Box, Rating } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

const RatingStars = ({ readOnly }: { readOnly: boolean }) => {
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
        readOnly={readOnly}
      />
    </Box>
  );
};

RatingStars.propTypes = {
  readOnly: PropTypes.bool.isRequired,
};

export default RatingStars;
