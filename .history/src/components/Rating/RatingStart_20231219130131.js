import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
const RatingStart = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const handleRating = (rate) => {
    setRatingValue(rate);
    alert(`Rating ${ratingValue}`);
  };
  return (
    <div>
      <Rating onClick={handleRating} />
    </div>
  );
};

export default RatingStart;
