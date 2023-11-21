import React from "react";
import styled, { css } from "styled-components";
import { useState, useRef, useEffect, useReducer } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useStateContext } from "../../../contexts/ContextProvider";
import FilterButton from "./FIlterButton";

import NavBarContainer from "../../../ui/NavBarContainer";
import NavLogo from "./NavLogo";
import NavTopCenterHome from "./NavTopCenterHome";
import NavUser from "./NavUser";
import NavExperiencesHome from "./NavExperiencesHome";
import NavStayHome from "./NavStayHome";
import AfterEffectNavCenterHome from "./AfterEffectNavCenterHome";
import Overlay from "../../../ui/Overlay";

const StyledOverlay = styled(Overlay)`
  z-index: 2;
`;

const StyledBreak = styled.div`
  flex-basis: 100%;
`;

const StyledScrollPopUp = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: position 1s;
  background-color: white;

  ${(props) => {
    if (props.$position) {
      return css`
        position: static;
      `;
    } else {
      return css`
        position: absolute;
        width: 100%;
      `;
    }
  }}
`;

const StyledClickPopUp = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: position 1s;
  position: absolute;
  width: 100%;
`;

const ACTIONS = {
  SCROLL_TOP: "scrollTop",
  NOT_SCROLL_TOP: "notSCROLLTOP",
  CLICK_STAY: "clickStay",
  CLICK_EX: "clickEx",
  OUT_OF_FOCUS: "outOfFocus",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SCROLL_TOP:
      return { ...state, isShow: true, isClick: false };

    case ACTIONS.NOT_SCROLL_TOP:
      return { ...state, isShow: false };

    case ACTIONS.CLICK_STAY:
      return { isShow: true, isStay: true };

    case ACTIONS.CLICK_EX:
      return { isShow: true, isStay: false };

    case ACTIONS.OUT_OF_FOCUS:
      return { ...state, isShow: false };
  }
}

export default function NavTopHome() {
  const [state, dispatch] = useReducer(reducer, {
    isShow: false,
    isClick: false,
    isStay: true,
  });

  useEffect(() => {
    function handleScrollEvent() {
      if (window.scrollY === 0) {
        dispatch({ type: ACTIONS.SCROLL_TOP });
      } else {
        dispatch({ type: ACTIONS.NOT_SCROLL_TOP });
      }
    }

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  function clickStay() {
    dispatch({ type: ACTIONS.CLICK_STAY });
  }

  function clickEx() {
    dispatch({ type: ACTIONS.CLICK_EX });
  }

  const {pageWidth} = useStateContext();

  return (
    <>
      <NavBarContainer zIndex={5} variant={"home"}>
        {pageWidth >= 800 ? <NavLogo /> : <></>}
        <AnimatePresence>{state.isShow || <NavTopCenterHome />}</AnimatePresence>
        <AnimatePresence>
          {state.isShow && <AfterEffectNavCenterHome isStay={state.isStay} clickStay={clickStay} clickEx={clickEx} />}
        </AnimatePresence>
        {pageWidth >= 800 ? <NavUser /> : <FilterButton/>}

      </NavBarContainer>

      <StyledScrollPopUp $position={state.isShow}>
        <AnimatePresence>{state.isShow && <NavExperiencesHome isShow={state.isStay} />}</AnimatePresence>
        <StyledBreak></StyledBreak>
        <AnimatePresence>{state.isShow && <NavStayHome isShow={!state.isStay} />}</AnimatePresence>
      </StyledScrollPopUp>
    </>
  );
}
