import { CreateStart } from "api/startApi";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
const RatingStart = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const createRating = CreateStart();
  const handleRating = (rate) => {
    setRatingValue(rate);
  };
  console.log(`Rating ${ratingValue}`);
  return (
    <div>
      <Rating onClick={handleRating} />
    </div>
  );
};

export default RatingStart;
