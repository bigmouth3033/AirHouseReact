import React, { useState } from "react";
import BookingItem from "./BookingItem";
import styled from "styled-components";


const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function Content(props) {
  const [allBooking, setAllBooking] = useState(props.allBooking);
  const [page, setPage] = useState([]);
  const [secletedPage,setSecletedPage] = useState();


  return (
    <StyledContainer>
      {allBooking.map((item, index) => {
        return <BookingItem key={index} BookingItem={item} />;
      })}
    </StyledContainer>
  );
}
