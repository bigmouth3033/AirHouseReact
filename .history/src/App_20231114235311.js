import React from "react";

import "./App.css";
import "@fontsource/montserrat";
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";

import Test from "./components/test/Test";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import AircoverForHosts from "../src/components/home-body/AirCoverForHost/AircoverForHosts";
import BestHost from "../src/components/home-body/BestHost/BestHost";
import Foster from "../src/components/footer/Footer";
import ProductCreation from "./pages/ProductCreation";
import Signup from "./components/Users/Signup";
import Login from "./components/Users/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setPageWidth(window.innerWidth);
    });
  }, []);

  return (
    <div>
      <GoogleOAuthProvider clientId="319614159285-eln3i0gnaatil4qt75007vhgsl8phas5.apps.googleusercontent.com">
        <Home />
        <AircoverForHosts></AircoverForHosts>
        <BestHost></BestHost>
        <Foster></Foster>
        {/* <Signup></Signup> */}
        <Login></Login>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
