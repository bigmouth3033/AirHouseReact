import { faArrowUpFromBracket, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0 0 0;
  margin: 1rem 0;
`;
const StyledShareSave = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
`;
const StyledContainerShareSave = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  font-size: 15px;
`;
const StyledTitle = styled.h1`
  font-size: 23px;
  font-weight: 500;
  line-height: 30px;
`;
const NavViewhost = ({ data }) => {
  return (
    <StyledNav>
      <StyledTitle>{data.name}</StyledTitle>
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
