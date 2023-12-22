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
import { CategoryValueQuery } from "api/blogCategoryApi";
import Pusher from 'pusher-js';

const StyledContainer = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const StyledBody = styled.div`
  flex-grow: 1;
`;

export default function DefaultLayout() {
  const userQuery = UserQuery();
  const categoryQuery = CategoryQuery();
  const roomTypeQuery = RoomTypeQuery();
  const amenitiesQuery = AmenitiesQuery();
  const propertyQuery = PropertyTypeQuery();
  const provinceQuery = ProvinceQuery();
  const categoryValueQuery = CategoryValueQuery();
  const location = useLocation();

  useEffect(() => {
    let channel_name = '';
    if (userQuery.isSuccess) {
      var pusher = new Pusher('014b8eb7bfaf79153ac0', {
        cluster: 'ap1'
      });
      
       channel_name = userQuery.data.user.email;
      var channel = pusher.subscribe(channel_name);
      channel.bind('my-event', function (data) {
        console.log(JSON.stringify(data.from_email));
        alert('get message from: ',JSON.stringify(data.from_email));
      });
    }

    return () =>{
      // const channel_name = userQuery.data.user.email;
      // pusher.unsubscribe(channel_name);
    }
  }, [userQuery.isSuccess])
  if (
    provinceQuery.isLoading ||
    categoryQuery.isLoading ||
    roomTypeQuery.isLoading ||
    amenitiesQuery.isLoading ||
    propertyQuery.isLoading ||
    categoryValueQuery.isLoading
  ) {
    return <Loading />;
  }

  if (userQuery.isSuccess) {
    localStorage.setItem("ACCESS_TOKEN", userQuery.data.token);
  }

  return (
    <StyledContainer>
      {location.pathname === "/" ? <NavHome /> : <NavTopHome />}
      <StyledBody>
        <Outlet />
      </StyledBody>
      {location.pathname === "/" ? <FooterBar variant={"home"} /> : <FooterIndex />}
    </StyledContainer>
  );
}
