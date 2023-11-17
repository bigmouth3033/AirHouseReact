import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../api/userApi";
import { useStateContext } from "../contexts/ContextProvider";
import { faLocationPinLock } from "@fortawesome/free-solid-svg-icons";

export default function DefaultLayout() {
  const { token, setUser } = useStateContext();

  useEffect(() => {
    if (token) {
      const response = getUser();

      response
        .then((user) => {
          setUser(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // const sessionArray = JSON.parse(localStorage.getItem("SESSION_ID_ARRAY"));

    // if (!sessionArray) {
    //   sessionStorage("SESSION_ID", 0);
    //   localStorage.setItem("SESSION_ID_ARRAY", JSON.stringify([0]));
    // } else {
    //   let newSessionID = sessionArray[sessionArray.length - 1] + sessionStorage("SESSION_ID", newSessionID);
    //   localStorage.setItem("SESSION_ID_ARRAY", JSON.stringify([...sessionArray, newSessionID]));
    // }

  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
}
