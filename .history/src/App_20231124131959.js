import React from "react";

import "./App.css";

import Test from "./components/test/Test";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import AircoverForHosts from "../src/components/home-body/AirCoverForHost/AircoverForHosts";
import BestHost from "../src/components/home-body/BestHost/BestHost";
import Foster from "../src/components/footer/Footer";
import ProductCreation from "./pages/ProductCreation";
import Login from "./components/Users/Login";
import SignupStep1 from "./components/Users/SignupStep1";
import SignupStep2 from "./components/Users/SignupStep2";

function App() {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setPageWidth(window.innerWidth);
    });
  }, []);

  return (
    <div>
      {/* <Home /> */}
      {/* <AircoverForHosts></AircoverForHosts> */}
      {/* <BestHost></BestHost> */}
      {/* <Foster></Foster> */}
      {/* <SignupStep1></SignupStep1>
      <br />
      <SignupStep2></SignupStep2>
      <br />
      <Login></Login> */}
    </div>
  );
}

export default App;
