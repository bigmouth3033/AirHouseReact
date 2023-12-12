import styled from "styled-components";
import React from "react";

const StyledCarouselDetail = styled.div`
  margin-top: 20rem;
  max-width: 40rem;
  height: 30rem;
  background-color: white;
  border-radius: 4%;
  border: solid lightgrey 1px;

  & a {
    font-weight: 900;
    font-size: 1.5rem;
  }

  & p {
    margin-top: 1rem;
    color: lightslategray;
    font-weight: 300;
    font-size: 1rem;
  }
`;

const StyledImg = styled.img`
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;
  width: 100%;
  object-fit: cover;
  height: 70%;
`;

export default function CarouselDetail({ item }) {
  return (
    <StyledCarouselDetail style={{ margin: "1rem 0.5rem" }}>
      <StyledImg src={item.image} alt="" />
      <div
        style={{
          marginTop: " 1.6rem",
          marginLeft: "1rem",
          paddingRight: "0.5rem",
        }}
      >
        <a href={item.linkurl}>{item.title}</a>
        <p>{item.date} </p>
      </div>
    </StyledCarouselDetail>
  );
}

// export default function CarouselDetail({ item }) {
//   return (
//     <StyledCarouselDetail style={{ margin: " 1rem" }}>
//       <StyledImg src={item.image} alt="" />
//       <div style={{ marginTop: "1.6rem", marginLeft: "0.5rem" }}>
//         <a href={item.linkurl}>{item.title}</a>
//         <p>{item.date} </p>
//       </div>
//     </StyledCarouselDetail>
//   );
// }
