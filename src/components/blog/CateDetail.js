import React from "react";
import styled from "styled-components";

const StyleCateDetail = styled.div`
  width: 100%;
  height: 10rem;
  text-align: left;
  max-height: 13rem;

  & a {
    font-weight: 600;
    font-size: 1.3rem;
  }

  & p {
    margin-top: 1rem;
    color: lightslategray;
    font-weight: 300;
    font-size: 1rem;
  }

  & img {
    width: 100%;
    object-fit: cover;
    border-radius: 9px;
    height: 13rem;
  }

  @media (max-width: 784px) {
    /* min-width: 22rem;
    min-height: 13rem; */
    width: 100%;
  }

  @media (max-width: 430px) {
    /* min-width: 15rem;
    min-height: 13rem; */
    width: 100%;
  }
`;

export default function CateDetail({ item }) {
  return (
    <StyleCateDetail>
      <img src={item.image} alt="" />
      <div>
        <a href={item.linkurl}>{item.title}</a>
        <p>{item.date} </p>
      </div>
    </StyleCateDetail>
  );
}
