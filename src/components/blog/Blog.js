import React from "react";

import styled from "styled-components";
import LatestNews from "./LatestNews";
import BlogSlick from "./BlogSlick";
import BlogSlickUnder from "./BlogSlickUnder";
import Categories from "./Categories";
import BlogTop from "./BlogTop";
import BlogEnd from "./BlogEnd";
import BlogFollow from "./BlogFollow";

const StyledBlogTop = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  background-color: beige;
  width: 80%;
  margin: auto;
  margin-bottom: 2rem;
  height: 10rem;

  & .item-1 {
    background-color: beige;
  }

  & .item-2 {
    background-color: yellow;
  }
`;

export default function Blog() {
  return (
    <div>
      <BlogTop />
      <LatestNews />
      <BlogSlick />
      <BlogFollow />
      <BlogSlickUnder />
      <Categories />
      <BlogEnd />
    </div>
  );
}
