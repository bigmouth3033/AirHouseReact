import React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useStateContext } from "../../../contexts/ContextProvider";

// import component

import StyledButtonBoxContainer from "../../../ui/StyledButtonBoxContainer";
import StyledButtonContainer from "../../../ui/StyledButtonContainer";

const StyledContainer = styled(StyledButtonBoxContainer)`
  width: 22rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  left: 50%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }

  padding: 10px 0;

  & .item {
    flex-grow: 1;
    border: 0;
    height: 1.3rem;
    font-size: 14px;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
  }

  & .anywhere,
  & .anyweek {
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 2px solid rgba(0, 0, 0, 0.2);
    font-weight: 600;
  }

  & .addguest {
    display: flex;
    align-items: center;
    justify-content: space-around;

    > p {
      color: rgba(0, 0, 0, 0.6);
    }

    & .icon {
      background-color: red;
      color: white;
      border-radius: 50%;
      padding: 0.4rem;
      font-weight: 900;
    }
  }

  @media only screen and (max-width: 1000px) {
    & {
      position: static;
    }
  }
`;

const StyledResizeNavTop = styled(StyledButtonContainer)`
  flex: 1;
  display: flex;
  align-items: center;
  text-align: left;
  gap: 1rem;
  padding: 0.5rem 1rem;

  & .icon {
    font-size: 1.3rem;
  }

  & .flex-container {
    display: flex;
    gap: 7px;
    font-size: 13px;
    font-weight: 400;
    opacity: 0.5;
  }
`;

export default function NavTopCenterHome({ click }) {
  const { pageWidth } = useStateContext();

  const exit = { x: pageWidth > 1000 ? "-50%" : "0", opacity: 0, transition: { duration: 0.01 } };
  const initial = { x: pageWidth > 1000 ? "-50%" : "0", opacity: 0 };
  const animate = { x: pageWidth > 1000 ? "-50%" : "0", opacity: 1, transition: { duration: 0.1 } };
  const transition = {
    ease: "easeInOut",
  };

  return (
    <>
      {pageWidth >= 800 ? (
        <StyledContainer onClick={click} exit={exit} initial={initial} animate={animate} transition={transition}>
          <button className="item anywhere">Anywhere</button>
          <button className="item anyweek">Any week</button>
          <button className="item addguest">
            <span>Add guests</span>
            <FontAwesomeIcon className="icon" icon={faMagnifyingGlass}></FontAwesomeIcon>
          </button>
        </StyledContainer>
      ) : (
        <StyledResizeNavTop>
          <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
          <div>
            <p>Anywhere</p>
            <div className="flex-container">
              <p>Any week</p>
              <p>-</p>
              <p>Add guests</p>
            </div>
          </div>
        </StyledResizeNavTop>
      )}
    </>
  );
}
