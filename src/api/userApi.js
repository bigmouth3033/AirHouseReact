import React from "react";
import axiosClient from "./axiosClient";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

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
};

export const getAdmin = async () => {
  let response = await axiosClient.get("admin");
  return response.data;
};

export const createAdmin = async (payload) => {
  let response = await axiosClient.post("admin/signup", payload);
  return response.data;
};

// react-query
export const UserQuery = () => {
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: 1,
  });

  return userQuery;
};

export const LoginUserMutation = (payload) => {
  const queryClient = useQueryClient();

  const userMutation = useMutation({
    mutationFn: onLogin,
    onSuccess: (data) => {
      localStorage.setItem("ACCESS_TOKEN", data.token);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return userMutation;
};

export const LoginAdminMutation = (payload) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const userMutation = useMutation({
    mutationFn: onLogin,
    onSuccess: (data) => {
      if (data.user.user_type == 0) {
        localStorage.setItem("ACCESS_TOKEN", data.token);
        queryClient.invalidateQueries({ queryKey: ["user"] });
        navigate("/admin");
      }
    },
  });

  return userMutation;
};

export const LogoutUserMutation = () => {
  const queryClient = useQueryClient();

  const userMutation = useMutation({
    mutationFn: onLogout,
    onSuccess: () => {
      localStorage.removeItem("ACCESS_TOKEN");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return userMutation;
};

export const CreateUserMutation = (payload) => {
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      localStorage.setItem("ACCESS_TOKEN", data.token);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return addMutation;
};

export const CreateAdminMutation = (payload) => {
  const userMutation = useMutation({
    mutationFn: (payload) => {
      return axiosClient.post("/admin/signup", payload);
    },
  });

  return userMutation;
};
