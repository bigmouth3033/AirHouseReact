import React, { useState } from "react";
const RatingStart = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const handleRating = (rate: nunber){
     setRatingValue(rate)
  }
  return <div>
     
  </div>;
};

export default RatingStart;
