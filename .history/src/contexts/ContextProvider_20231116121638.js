import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
// tạo một đối tượng Context với giá trị mặc định là một đối tượng có các thuộc tính user, token, setUser, setToken, và pageWidth.
const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
  pageWidth: window.innerWidth,
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

  const setToken = (_token) => {
    _setToken(_token);

    if (_token) {
      localStorage.setItem("ACCESS_TOKEN", _token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setPageWidth(window.innerWidth);
    });
  }, []);

  return (
    <StateContext.Provider
      value={{
        user,
        token,
        setUser,
        setToken,
        pageWidth,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
