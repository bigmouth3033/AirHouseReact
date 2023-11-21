import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserQuery } from "api/userApi";

export default function DefaultLayout() {
  const userQuery = UserQuery();

  if (userQuery.isSuccess) {
    localStorage.setItem("ACCESS_TOKEN", userQuery.data.token);
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
