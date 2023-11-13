import styled from "styled-components";

import NavHome from "../components/navbar/home/NavHome";
import HomeBody from "../components/body/home/HomeBody";
import FooterBar from "../components/footer/home/FooterBar";

const StyledHomeContainer = styled.div``;

function Home() {
  return (
    <>
      <NavHome />
      <HomeBody />
      <FooterBar variant={"home"}/>
    </>
  );
}

export default Home;
