import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
// tạo một đối tượng Context với giá trị mặc định là một đối tượng có các thuộc tính user, token, setUser, setToken, và pageWidth.
const StateContext = createContext({
  user: null, //user và token là các trạng thái của ứng dụng.
  token: null,
  setUser: () => {}, //setUser và setToken là các hàm để cập nhật giá trị của user và token.
  setToken: () => {},
  pageWidth: window.innerWidth, //là chiều rộng của trang, được khởi tạo với giá trị là chiều rộng của cửa sổ trình duyệt.
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