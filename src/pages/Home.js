import styled from "styled-components";

import NavHome from "../components/navbar/home/NavHome";
import HomeBody from "../components/home-body/HomeBody";

const StyledHomeContainer = styled.div``;

function Home() {
  return (
    <>
      <NavHome />
      <HomeBody />
    </>
  );
}

export default Home;
