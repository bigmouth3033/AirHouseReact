import { CreateStart, ReadStart } from "api/startApi";
import React, { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import styled from "styled-components";
const StyledPreview = styled.input`
  /* border: none; */
  height: 40px;
  border: 1px solid #dddddd;
  &:focus {
    border: none;
  }
`;
const StyledButtunVote = styled.button`
  display: block;
  padding: 0.5rem 3rem;
  border: 1px solid #dddddd;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  background-color: #106ebe;
`;
const Start = () => {
  const createStart = CreateStart();
  const property_id = 1939;
  // const readStart = ReadStart(property_id);
  // Sử dụng useEffect để cập nhật giá trị đánh giá từ server khi có dữ liệu
  // useEffect(() => {
  //   if (readStart.isSuccess && readStart.data.start != null) {
  //     setRating(readStart.data.start.start);
  //   } else {
  //     setRating(0);
  //   }
  // }, [readStart.isSuccess]);

  const [rating, setRating] = useState(0);
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleVote = () => {
    const formData = new FormData();
    formData.append("property_id", property_id);
    formData.append("rating", rating);
    createStart.mutate(formData, {
      onSuccess: () => {
        alert("Success!");
      },
    });
  };
  return (
    <div>
      <div>
        <Rating onClick={handleRating} initialValue={rating} />
      </div>
      <StyledPreview type="text" placeholder="What is your problem?" />
      <StyledButtunVote onClick={handleVote}>Vote</StyledButtunVote>
    </div>
  );
};

export default Start;
