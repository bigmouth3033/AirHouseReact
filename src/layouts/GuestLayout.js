import React from "react";
import { Outlet } from "react-router-dom";
import { UserQuery } from "api/userApi";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import NavTopHome from "components/navbar/home/NavTopHome";
import FooterIndex from "components/footer/host-creation/FooterIndex";
import Loading from "components/Loading";

const StyledMenu = styled.div`
  display: flex;
  background-color: red;
  gap: 0.7rem;
  padding-left: 5%;
  flex-wrap: wrap;

  & button {
    background-color: inherit;
    border: none;
    padding: 10px 0;
    color: white;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
  }

  & button:hover {
    background-color: white;
    color: red;
  }
`;

const StyledContainer = styled.div`
  font-family: "Poppins", sans-serif;
`;

export default function GuestLayout() {
  const userQuery = UserQuery();

  if (userQuery.isLoading) {
    return <Loading />;
  }

  if (userQuery.isError) {
    return <Navigate to="/" />;
  }

  return (
    <StyledContainer>
      <NavTopHome />
      <StyledMenu>
        <button>Dashboard</button>
        <button>Profile</button>
        <button>My Listing</button>
        <button>My Experience</button>
        <button>My Bookings</button>
        <button>My Trips</button>
        <button>Wishlist</button>
        <button>Messages</button>
        <button>Payment & Account</button>
      </StyledMenu>
      <Outlet />
      <FooterIndex />
    </StyledContainer>
  );
}
