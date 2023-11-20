import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../api/userApi";
import { useStateContext } from "../contexts/ContextProvider";
import { faLocationPinLock } from "@fortawesome/free-solid-svg-icons";

export default function DefaultLayout() {
  const { token, setUser, loading, setLoading } = useStateContext();

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

    if (loading) {
      console.log(loading);
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
}