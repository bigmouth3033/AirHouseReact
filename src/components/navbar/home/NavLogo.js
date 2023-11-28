import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../../../assets/airbnb-logo-3023AC4CBA-seeklogo.com.png";

const StyledImg = styled.img`
  height: 2rem;
`;

function NavLogo() {
  return (
    <Link to="/">
      <StyledImg src={logo} />
    </Link>
  );
}

export default NavLogo;
