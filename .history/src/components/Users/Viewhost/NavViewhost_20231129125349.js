import {
  faArrowUpFromBracket,
  faHeart,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
const StyledNav = styled.div`
  display: flex;
`;
const NavViewhost = () => {
  return (
    <StyledNav>
      <h2>Title</h2>
      <div>
        <span>
          <FontAwesomeIcon icon={faArrowUpFromBracket} />
        </span>
        <span>Share</span>
      </div>
      <div>
        <span>
          <FontAwesomeIcon icon={faHeartCirclePlus} />
        </span>
        <span>Save</span>
      </div>
    </StyledNav>
  );
};

export default NavViewhost;
