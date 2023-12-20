import { CreateStart, ReadStart } from "api/startApi";
import React, { useEffect, useRef, useState } from "react";
import { Rating } from "react-simple-star-rating";
import styled from "styled-components";
const StyledPreview = styled.input`
  /* border: none; */
  height: 40px;
  border: 1px solid #dddddd;
  padding: 5px;
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
  background-color: #0080ff;
  &:hover {
    background-color: #0000ff;
  }
`;
const Start = () => {
  const property_id = 1939;
  const createStart = CreateStart();
  const readStart = ReadStart(property_id);
  const preview = useRef(null);
  // Sử dụng useEffect để cập nhật giá trị đánh giá từ server khi có dữ liệu
  useEffect(() => {
    if (readStart.isSuccess && readStart.data.start != null) {
      setRating(readStart.data.start.start);
    } else {
      setRating(0);
    }
  }, [readStart.isSuccess]);

  const [rating, setRating] = useState(0);
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleVote = () => {
    const formData = new FormData();
    if (rating > 1 || preview.current.value == null) {
      formData.append("property_id", property_id);
      formData.append("rating", rating);
      formData.append("preview ", preview.current.value);
      console.log("FormData content:");
      for (var pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
      createStart.mutate(formData, {
        onSuccess: () => {
          alert("Success!");
        },
      });
    } else {
      alert("Please, rating and preview");
    }
  };
  return (
    <div>
      <div>
        <Rating onClick={handleRating} initialValue={rating} />
      </div>
      <StyledPreview
        ref={preview}
        type="text"
        placeholder="What is your problem?"
      />
      <StyledButtunVote onClick={handleVote}>Vote</StyledButtunVote>
    </div>
  );
};

export default Start;
