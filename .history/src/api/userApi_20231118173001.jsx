import React from "react";
import axiosClient from "./axiosClient";

export const createUser = async (data) => {
  let response = await axiosClient.post("/signup", data);
  return response.data;
};

export const getUser = async () => {
  let response = await axiosClient.get("/user");
  return response.data;
};

export const onLogin = async (data) => {
  let response = await axiosClient.post("/login", data);
  return response.data;
};

export const onLogout = async () => {
  let response = await axiosClient.post("/logout");
  return response.data;
};
