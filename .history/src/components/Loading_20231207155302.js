import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";
import "./Loading";
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
  align-items: center;
`;

export default function Loading() {
  return (
    <div class="pl">
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__dot"></div>
      <div class="pl__text">Loading…</div>
    </div>
  );
}
