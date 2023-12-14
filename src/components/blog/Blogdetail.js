import React from "react";
import styled from "styled-components";

const StyledBlogdetail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-height: 13rem;
  gap: 1rem;
  width: 100%;
  max-width: 50rem;

  @media (max-width: 768px) {
    gap: 0;
  }

  & a {
    font-weight: 900;
    font-size: 1.5rem;

    @media (max-width: 576px) {
      font-size: 0.8rem;
    }
  }

  & p {
    margin-top: 1rem;
    color: lightslategray;
    font-weight: 300;
    font-size: 1.1rem;
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
    @media (max-width: 576px) {
      font-size: 0.5rem;
    }
  }

  & img {
    max-width: 100%;
    object-fit: cover;
    border-radius: 9px;
  }
`;

export default function Blogdetail({ item }) {
  return (
    <StyledBlogdetail>
      <img src={item.image} alt="" />
      <div style={{ marginTop: "0.3rem", marginLeft: "1rem" }}>
        <a href={item.linkurl}>{item.title}</a>
        <p>{item.date} </p>
      </div>
    </StyledBlogdetail>
  );
}
