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
import { CategoryQuery } from "api/categoryApi";
import { RoomTypeQuery } from "api/room-typeApi";
import { AmenitiesQuery } from "api/amenitiesApi";
import { PropertyTypeQuery } from "api/property-typeApi";
import { ProvinceQuery } from "api/locationApi";
import Loading from "components/Loading";

const StyledContainer = styled.div`
  font-family: "Poppins", sans-serif;
`;

export default function DefaultLayout() {
  const userQuery = UserQuery();
  const categoryQuery = CategoryQuery();
  const roomTypeQuery = RoomTypeQuery();
  const amenitiesQuery = AmenitiesQuery();
  const propertyQuery = PropertyTypeQuery();
  const provinceQuery = ProvinceQuery();
  const location = useLocation();

  if (
    provinceQuery.isLoading ||
    categoryQuery.isLoading ||
    roomTypeQuery.isLoading ||
    amenitiesQuery.isLoading ||
    propertyQuery.isLoading
  ) {
    return <Loading />;
  }

  if (userQuery.isSuccess) {
    localStorage.setItem("ACCESS_TOKEN", userQuery.data.token);
  }

  console.log(location.pathname);

  return (
    <StyledContainer>
      {location.pathname === "/" ? <NavHome /> : <NavTopHome />}
      <Outlet />
      {location.pathname === "/" ? <FooterBar variant={"home"} /> : <FooterIndex />}
    </StyledContainer>
  );
}
