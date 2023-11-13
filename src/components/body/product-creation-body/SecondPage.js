import React from "react";
import styled, { css } from "styled-components";

import CreationBodyContainer from "../../../ui/CreationBodyContainer";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  padding-left: 5rem;

  @media (max-width: 950px) {
    padding: 1rem;
  }

  & .first {
    font-weight: 600;
    font-size: 18px;
  }

  & .second {
    font-weight: 600;
    font-size: 45px;
  }

  & .third {
    font-size: 18px;
    line-height: 27px;
  }
`;

export default function SecondPage() {
  return (
    <CreationBodyContainer quantity={2}>
      <StyledContent>
        <p className="first">Step 1</p>
        <p className="second">Tell us about your place</p>
        <p className="third">
          In this step, we'll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.
        </p>
      </StyledContent>
      <div></div>
    </CreationBodyContainer>
  );
}
