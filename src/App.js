import styled, { css, keyframes } from "styled-components";
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import HomeBody from "./components/home-body/HomeBody";

import BoxContainer from "./ui/StyledBoxContainer";

const Test = styled.div`
  height: 5000px;
`;

function App() {
  return (
    <>
      <NavBar />
      <HomeBody/>
    </>
  );
}

export default App;
