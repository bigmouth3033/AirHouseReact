import React, { useState } from "react";
const Rating = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const handleRating = (rate: nunber){
     setRatingValue(rate)
  }
  return <div></div>;
};

export default Rating;
