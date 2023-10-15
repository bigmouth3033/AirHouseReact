import styled from "styled-components";

import logo from "../../assets/airbnb-logo-3023AC4CBA-seeklogo.com.png"

const StyledImg = styled.img`
  height: 2rem;

`;

function NavLogo(){
  return <StyledImg src={logo}/>
}


export default NavLogo;