import React, { useState } from "react";
import styled, { css } from "styled-components";
import { blogDetailArr } from "../../data/data";
import CateDetail from "./CateDetail";

const StyleCateBlock = styled.div`
  display: block;
  max-width: 100rem;
  margin: 0 auto;

  padding-top: 2rem;
  & .title {
    width: 60rem;
    margin: 1rem;
    font-size: 1.7rem;
    font-weight: 600;
    padding-left: 3rem;
  }
`;

const StyleTabTop = styled.div`
  width: 100%;
  margin: 0.5rem;
  font-size: 1.7rem;
  font-weight: 600;
  padding-left: 3rem;
  @media (max-width: 576px) {
    margin: 1rem 1rem;
    padding-left: 0;
  }
`;

const StyleTabButton = styled.button`
  margin: 0.4rem;
  max-width: max-content;
  border: solid 1.5px lightgrey;
  border-radius: 50px;
  padding: 0.8rem 1.1rem;
  font-weight: bolder;
  font-size: 0.8rem;
  cursor: pointer;
  background-color: white;

  /* CSS cho trạng thái active */
  //sử dụng props của component (active) để kiểm tra xem nó có giá trị true hay k
  ${({ active }) =>
    active &&
    css`
      border: solid 2px black;
    `}
`;

const StyleTabBody = styled.div`
  margin: 2rem 3.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  column-gap: 1.5rem;
  row-gap: 13rem;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin: 1rem 1.5rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    margin: 1rem 1rem;
  }
`;

const StyleViewMore = styled.button`
  display: block;

  margin: 3.5rem;
  margin-top: 12rem;

  border: solid 0.8px black;
  border-radius: 10px;
  padding: 0.7rem 1.5rem;
  font-weight: bolder;
  font-size: 0.8rem;
  background-color: white;
  cursor: pointer;
`;

export default function Categories() {
  const TitleArr = [
    "All",
    "Company",
    "Stays",
    "Product",
    "Policy",
    "Community",
    "Airbnb.org",
  ];

  const [tab, setTab] = useState("All");
  const [viewMore, setviewMore] = useState(8);

  function viewMoreHanddle() {
    setviewMore((viewMore) => viewMore + 8);
  }

  return (
    <StyleCateBlock>
      <p className="title">Categories</p>
      <StyleTabTop>
        {TitleArr.map((title) => (
          <StyleTabButton
            key="title"
            onClick={() => setTab(title)}
            active={tab === title}
          >
            {title}
          </StyleTabButton>
        ))}
      </StyleTabTop>
      <StyleTabBody>
        {blogDetailArr
          .filter((item) => tab === "All" || item.category.includes(tab))
          .slice(0, viewMore)
          .map((item, index) => (
            <CateDetail item={item} key={index} />
          ))}
      </StyleTabBody>

      <StyleViewMore onClick={viewMoreHanddle}>View more</StyleViewMore>
    </StyleCateBlock>
  );
}
