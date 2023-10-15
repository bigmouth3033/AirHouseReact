import styled from "styled-components";
import { useState, useEffect } from "react";


import NavTop from "./NavTop";
import NavBottom from "./NavBottom";

const StyledNav = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
`;

function NavBar(){

  const [resizeWidth, setResizeWidth] = useState(window.innerWidth);

  const handleResize = () => setResizeWidth(window.innerWidth);


  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    
  }, [])

  return (
    <StyledNav>
      <NavTop resizeWidth={resizeWidth}/>
      <NavBottom resizeWidth={resizeWidth}/>
    </StyledNav>
  );

}


export default NavBar;