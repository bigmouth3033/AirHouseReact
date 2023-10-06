import styled from "styled-components";

import NavTop from "./NavTop";
import NavBottom from "./NavBottom";

const StyledNav = styled.div`

`;

function NavBar(){

  return (
    <StyledNav>
      <NavTop/>
      <NavBottom/>
    </StyledNav>
  );

}


export default NavBar;