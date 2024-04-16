import { Box, Rating } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

const RatingStars = ({
  readOnly,
  stars,
  onStarChange,
}: {
  readOnly: boolean;
  stars: number;
  onStarChange: (newValue: number) => void;
}) => {
  const [value, setValue] = useState<number>(stars);

  const handleStarChange = (newValue: number) => {
    setValue(newValue);
    onStarChange(newValue);
  };

  return (
    <Box>
      <Rating
        value={value}
        name="half-rating"
        defaultValue={0}
        onChange={(_event, newValue) => {
          handleStarChange(newValue!);
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
