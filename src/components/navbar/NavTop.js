import styled from "styled-components";
import StyledHomePageContainer from "../../ui/StyledHomePageContainer";
import { useState, useEffect, useRef } from "react";

import NavUser from "./NavUser";
import NavTopCenter from "./NavTopCenter";
import NavLogo from "./NavLogo";
import UserDropDown from "./UserDropDown";
import NavStay from "./NavStay";
import NavExperiences from "./NavExperiences";
import AfterEffectNavCenter from "./AfterEffectNavCenter";

const StyledNav = styled.div`
  
`;

const StyledContainer = styled(StyledHomePageContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
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
  border-bottom: thin solid rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

function NavTop() {
  const [showDropDown, setShowDropDown] = useState(false);

  function onClickDropDown() {
    setShowDropDown(!showDropDown);
  }

  function onBlurDropDown() {
    setShowDropDown(false);
  }

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

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          onBlurHide();
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <StyledNav ref={wrapperRef}>
      <StyledContainer>
        <NavLogo />
        {/* {showNavEffect === 0 ? <NavTopCenter clickStay={showStay} clickEx={showExperiences} /> : <AfterEffectNavCenter clickStay={showStay} clickEx={showExperiences} />} */}
        <NavTopCenter effect={showNavEffect} clickStay={showStay} clickEx={showExperiences} />
        <AfterEffectNavCenter effect={showNavEffect} clickStay={showStay} clickEx={showExperiences} />
        
        <NavUser click={onClickDropDown} blur={onBlurDropDown} />
        

      </StyledContainer>
      <StyledDropDownContainer>{showDropDown && <UserDropDown />}</StyledDropDownContainer>

      <StyledPopupContainer>
        <NavStay effect={showNavEffect} />
        <NavExperiences effect={showNavEffect} />
      </StyledPopupContainer>
    </StyledNav>
  );
}

export default NavTop;
