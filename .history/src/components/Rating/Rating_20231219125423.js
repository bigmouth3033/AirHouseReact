import React, { useState } from "react";
const Rating = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const handleRating = (rate: nunber){
     setRatingValue(rate)
  }
  return <div>
     <Rating/>
  </div>;
};

export default Rating;
