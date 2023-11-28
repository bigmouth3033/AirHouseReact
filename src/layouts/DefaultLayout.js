import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserQuery } from "api/userApi";
import NavHome from "components/navbar/home/NavHome";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import FooterBar from "components/footer/home/FooterBar";
import FooterIndex from "components/footer/host-creation/FooterIndex";
import NavTopHome from "components/navbar/home/NavTopHome";

const StyledContainer = styled.div`
  font-family: "Poppins", sans-serif;
`;

export default function DefaultLayout() {
  const userQuery = UserQuery();

  if (userQuery.isSuccess) {
    localStorage.setItem("ACCESS_TOKEN", userQuery.data.token);
  }

  const location = useLocation();

  console.log(location.pathname);

  return (
    <StyledContainer>
      {location.pathname === "/" ? <NavHome /> : <NavTopHome />}
      <Outlet />
      {location.pathname === "/" ? <FooterBar variant={"home"} /> : <FooterIndex />}
    </StyledContainer>
  );
}
