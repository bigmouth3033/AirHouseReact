import {
  faArrowUpFromBracket,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledShareSave = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const StyledContainerShareSave = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavViewhost = () => {
  return (
    <StyledNav>
      <h2>Title</h2>
      <StyledShareSave>
        <StyledContainerShareSave>
          <p>
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
          </p>
          <p>Share</p>
        </StyledContainerShareSave>
        <StyledContainerShareSave>
          <p>
            <FontAwesomeIcon icon={faHeartCirclePlus} />
          </p>
          <p>Save</p>
        </StyledContainerShareSave>
      </StyledShareSave>
    </StyledNav>
  );
};

export default NavViewhost;
