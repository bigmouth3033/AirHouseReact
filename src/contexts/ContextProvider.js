import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";

const StateContext = createContext({
  pageWidth: window.innerWidth,
  setPageWidth: () => {},
  chosenProperty: null,
  setChosenProperty: () => {},
  showLogin: null,
  onShowLoginHandler: () => {},
});

export const ContextProvider = ({ children }) => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [chosenProperty, setChosenProperty] = useState();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setPageWidth(window.innerWidth);
    });
  }, []);

  return (
    <StateContext.Provider
      value={{
        pageWidth,
        chosenProperty,
        setChosenProperty,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
