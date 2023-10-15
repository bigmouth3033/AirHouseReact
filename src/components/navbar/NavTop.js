import styled from "styled-components";
import StyledHomePageContainer from "../../ui/StyledHomePageContainer";
import { useState, useEffect, useRef } from "react";

import Overlay from "../../ui/Overlay";
import NavUser from "./NavUser";
import NavTopCenter from "./NavTopCenter";
import NavLogo from "./NavLogo";
import UserDropDown from "./UserDropDown";
import NavStay from "./NavStay";
import NavExperiences from "./NavExperiences";
import AfterEffectNavCenter from "./AfterEffectNavCenter";
import FilterButton from "./FIlterButton";
import SignUp from "../signup/SignUp";

const StyledNav = styled.div`
  background-color: white;
  position: relative;
  z-index: 3;
`;

const StyledContainer = styled(StyledHomePageContainer)`
  display: flex;
  justify-content: space-between;

  align-items: center;
  padding: 1rem 0;

  > .user-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const StyledDropDownContainer = styled(StyledHomePageContainer)`
  display: flex;
  justify-content: flex-end;
`;

const StyledPopupContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  background-color: white;
  /* border-bottom: thin solid rgba(0, 0, 0, 0.1); */
  z-index: 9999;
`;

const StyledNavOverlay = styled(Overlay)`
  z-index: 2;
`;



function NavTop({ resizeWidth }) {


  const [showNavEffect, setShowNavEffect] = useState(0);

  function showStay() {
    setShowNavEffect(1);
  }

  function showExperiences() {
    setShowNavEffect(2);
  }

  function onBlurHide() {
    setShowNavEffect(0);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      onBlurHide();
    });
  }, []);

  

  return (
    <>
      {showNavEffect === 0 ? false : <StyledNavOverlay onClick={onBlurHide} />}
      
      <StyledNav>
        <StyledContainer>
          {resizeWidth >= 744 ? <NavLogo /> : <></>}
          <NavTopCenter resizeWidth={resizeWidth} effect={showNavEffect} clickStay={showStay} clickEx={showExperiences} />
          <AfterEffectNavCenter effect={showNavEffect} clickStay={showStay} clickEx={showExperiences} />
          {resizeWidth >= 744 ? <NavUser/> : <></>}
          {resizeWidth < 744 ? <FilterButton resizeWidth={resizeWidth} /> : <></>}
        </StyledContainer>
        <StyledPopupContainer>
          <NavStay effect={showNavEffect} />
          <NavExperiences effect={showNavEffect} />
        </StyledPopupContainer>
      </StyledNav>
    </>
  );
}

export default NavTop;
