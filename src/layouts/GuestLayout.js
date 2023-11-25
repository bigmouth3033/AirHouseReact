import React from "react";
import { Outlet } from "react-router-dom";
import { UserQuery } from "api/userApi";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import NavTopHome from "components/navbar/home/NavTopHome";

const StyledContainer = styled.div`
  font-family: "Poppins", sans-serif;
`;

export default function GuestLayout() {
  const userQuery = UserQuery();

  if (userQuery.isError) {
    return <Navigate to="/" />;
  }

  return (
    <StyledContainer>
      <NavTopHome/>
      <Outlet />
    </StyledContainer>
  );
}
