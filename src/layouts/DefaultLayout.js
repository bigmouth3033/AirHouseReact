import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserQuery } from "api/userApi";
import NavHome from "components/navbar/home/NavHome";
import FooterBar from "components/footer/home/FooterBar";
import styled from "styled-components";

const StyledContainer = styled.div`
  font-family: "Poppins", sans-serif;
`;

export default function DefaultLayout() {
  const userQuery = UserQuery();

  if (userQuery.isSuccess) {
    localStorage.setItem("ACCESS_TOKEN", userQuery.data.token);
  }

  return (
    <StyledContainer>
      <Outlet />
    </StyledContainer>
  );
}
