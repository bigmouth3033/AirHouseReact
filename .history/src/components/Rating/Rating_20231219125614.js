import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
const RatingStart = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const handleRating = (rate: number) => {
    setRatingValue(rate);
  };
  return (
    <div>
      <Rating />
    </div>
  );
};

export default RatingStart;
