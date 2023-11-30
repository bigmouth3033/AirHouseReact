import {
  faArrowUpFromBracket,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
const StyledNav = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const NavViewhost = () => {
  return (
    <StyledNav>
      <h2>Title</h2>
      <div>
        <div>
          <p>
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
          </p>
          <p>Share</p>
        </div>
        <div>
          <p>
            <FontAwesomeIcon icon={faHeartCirclePlus} />
          </p>
          <p>Save</p>
        </div>
      </div>
    </StyledNav>
  );
};

export default NavViewhost;
