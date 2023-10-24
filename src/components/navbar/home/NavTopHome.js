import React from "react";
import styled from "styled-components";
import { useState, useRef, useEffect, useReducer } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

const StyledPopUp = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
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
      return { ...state, isShow: true };

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

  return (
    <>
      <NavBarContainer zIndex={5} variant={"home"}>
        {window.innerWidth >= 800 ? <NavLogo /> : <></>}
        <AnimatePresence>
          {state.isShow === false ? 
          <NavTopCenterHome /> : 
          <AfterEffectNavCenterHome isStay={state.isStay} clickStay={clickStay} clickEx={clickEx} />}
        </AnimatePresence>
        {window.innerWidth >= 800 ? <NavUser /> : <></>}
      </NavBarContainer>

      <StyledPopUp>
        <AnimatePresence>{state.isShow && <NavExperiencesHome isShow={state.isStay} />}</AnimatePresence>
        <StyledBreak></StyledBreak>
        <AnimatePresence>{state.isShow && <NavStayHome isShow={!state.isStay} />}</AnimatePresence>
      </StyledPopUp>
    </>
  );
}
