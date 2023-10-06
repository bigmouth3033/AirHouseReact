import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import HomePageContainer from "../../ui/StyledHomePageContainer";
import NavCarousel from "./NavCarousel";

import StyledHomePageContainer from "../../ui/StyledHomePageContainer";
import StyledBoxContainer from "../../ui/StyledBoxContainer";

const StyledNav = styled.div`
  border-top: thin solid rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
`;

const StyledFilterButton = styled(StyledBoxContainer)`
  padding: 1.2rem 1rem;
  display: flex;
  gap: 5px;
  cursor: pointer;
`;

const StyledContainer = styled(StyledHomePageContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const StyledTaxButton = styled(StyledBoxContainer)`
  padding: 15px 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

function NavBottom() {
  return (
    <StyledNav>
      <StyledContainer>
        <NavCarousel />
        <StyledFilterButton>
          <FontAwesomeIcon icon={faSliders} />
          <p>Filters</p>
        </StyledFilterButton>
        <StyledTaxButton>
          <p>Display total before taxes</p>
          <div className="toggle-switch">
            <input className="toggle-input" id="toggle" type="checkbox" />
            <label className="toggle-label" for="toggle"></label>
          </div>
        </StyledTaxButton>
      </StyledContainer>
    </StyledNav>
  );
}

export default NavBottom;
