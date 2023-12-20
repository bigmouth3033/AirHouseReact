import { CreateStart, ReadStart } from "api/startApi";
import Loading from "components/Loading";
import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
const RatingStart = () => {
  const [ratingValue, setRatingValue] = useState(0);
  const createRating = CreateStart();
  const property_id = 1939;
  const readRating = ReadStart(property_id);

  const handleRating = (rate) => {
    setRatingValue(rate);
    const formData = new FormData();
    formData.append("property_id", property_id);
    formData.append("rating", rate);
    createRating.mutate(formData, {
      onSuccess: () => {
        alert("Success!");
      },
    });
  };
  if (readRating.isLoading) {
    <Loading />;
  }
  if (readRating.isError) {
    <p>Error</p>;
  }
  useEffect(() => {
    setRatingValue(readRating.data.start);
  }, [readRating.isSuccess]);
  return (
    <div>
      <Rating onClick={handleRating} />
    </div>
  );
};

export default RatingStart;
