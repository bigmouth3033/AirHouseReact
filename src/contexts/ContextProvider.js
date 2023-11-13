import React from "react";

import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
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

  return (
    <ContextProvider.Provider
      value={{
        user,
        token,
        setUser,
        setToken,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
