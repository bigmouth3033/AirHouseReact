import { useState, useEffect, useRef } from "react";

import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import HomePageContainer from "../../ui/StyledHomePageContainer";
import NavCarousel from "./NavCarousel";

import StyledHomePageContainer from "../../ui/StyledHomePageContainer";
import StyledBoxContainer from "../../ui/StyledBoxContainer";
import FilterButton from "./FIlterButton";


const StyledNav = styled.div`
  border-top: thin solid rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
  background-color: white;
  position: relative;
  z-index: 1;

  transition: all 100ms ease-in-out;

  ${(props) => {
    if (props.scrollEffect === true) {
      return css`
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        padding: 0;
      `;
    } else {
      return css`
        padding: 1rem 0;
        box-shadow: none;
      `;
    }
  }}
`;



const StyledContainer = styled(StyledHomePageContainer)`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 1rem;
`;

const StyledTaxButton = styled(StyledBoxContainer)`
  padding: 12px 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StyledMobileFilterButton = styled.button`
  border-radius: 50%;
`;

function NavBottom({ resizeWidth }) {
  const [changeBot, setChangeBot] = useState(false);

  const handleScroll = () => {
    if (window.scrollY == 0) {
      setChangeBot(false);
    } else {
      setChangeBot(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <StyledNav scrollEffect={changeBot}>
      <StyledContainer>
        <NavCarousel className="carousel" />
        {resizeWidth >= 744 ? (
          <FilterButton resizeWidth={resizeWidth}/>
        ) : (
          <></>
        )}
        {resizeWidth >= 744 ? (
          <StyledTaxButton>
            <p>Display total before taxes</p>
            <div className="toggle-switch">
              <input className="toggle-input" id="toggle" type="checkbox" />
              <label className="toggle-label" for="toggle"></label>
            </div>
          </StyledTaxButton>
        ) : (
          false
        )}
      </StyledContainer>
    </StyledNav>
  );
}

export default NavBottom;
