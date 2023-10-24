import React from "react";
import { useState, useRef } from "react";
import styled, { css } from "styled-components";

import StyledBoxContainer from "../../../ui/StyledBoxContainer";
import NavBarContainer from "../../../ui/NavBarContainer";
import FilterButton from "./FIlterButton";
import NavCarouselHome from "./NavCarouselHome";

const StyledTaxButton = styled(StyledBoxContainer)`
  padding: 12px 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Container = styled.div`
  background-color: blue;
  height: 100px;
`;

export default function NavBottom() {
  return (
    <NavBarContainer variant={"home"} gap={1}>
      <NavCarouselHome />
      {window.innerWidth >= 800 ? (
        <>
          <FilterButton />
          <StyledTaxButton>
            <p>Display total before taxes</p>
            <div className="toggle-switch">
              <input className="toggle-input" id="toggle" type="checkbox" />
              <label className="toggle-label" htmlFor="toggle"></label>
            </div>
          </StyledTaxButton>
        </>
      ) : (
        <></>
      )}
    </NavBarContainer>

    // <Container/>
  );
}
