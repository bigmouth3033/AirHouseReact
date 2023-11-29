import React, { useState, useEffect } from "react";
import { lazy } from "react";
import styled from "styled-components";
import NavTopHome from "components/navbar/home/NavTopHome";
import FooterHostCreation from "components/footer/host-creation/FooterHostCreation";
import { Link, Route, Routes } from "react-router-dom";
import { Router } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useReducer } from "react";

import Amenities from "./Amenities";
import Basic from "./Basic";
import Description from "./Description";
import Details from "./Details";
import Photos from "./Photos";
import Pricing from "./Pricing";
import BecomeHost from "./BecomeHost";

const StyledContainer = styled.div`
  font-family: "Poppins", sans-serif;
`;

const StyledOption = styled.div`
  display: flex;
`;

const StyledOptionChoice = styled(Link)`
  padding: 20px;
  background-color: rgb(223, 219, 210);
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    color: red;
  }
`;

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_PROPERTY:
      return { ...state, propertyName: action.next };

    case ACTIONS.CHANGE_DESCRIPTION:
      return { ...state, description: action.next };

    case ACTIONS.CHANGE_ABOUT_PLACE:
      return { ...state, aboutPlace: action.next };

    case ACTIONS.CHANGE_PLACE_GREAT_FOR:
      return { ...state, placeGreatFor: action.next };

    case ACTIONS.CHANGE_GUEST_ACCESS:
      return { ...state, guestAccess: action.next };

    case ACTIONS.CHANGE_INTERACTION_GUEST:
      return { ...state, interactionGuest: action.next };

    case ACTIONS.CHANGE_THING_TO_NOTE:
      return { ...state, thingToNote: action.next };

    case ACTIONS.CHANGE_OVERVIEW:
      return { ...state, overview: action.next };

    case ACTIONS.CHANGE_GETTING_AROUND:
      return { ...state, gettingAround: action.next };

    case ACTIONS.CHANGE_PROPERTY_TYPE:
      return { ...state, propertyTypeId: action.next };

    case ACTIONS.CHANGE_ROOM_TYPE:
      return { ...state, roomTypeId: action.next };

    case ACTIONS.CHANGE_PROVINCES:
      return { ...state, provinces_id: action.next };

    case ACTIONS.CHANGE_CATEGORY:
      return { ...state, categoryId: action.next };

    case ACTIONS.CHANGE_DISTRICT:
      return { ...state, district_id: action.next };

    case ACTIONS.CHANGE_ADDRESS:
      return { ...state, address: action.next };

    case ACTIONS.CHANGE_BEDROOM_COUNT:
      return { ...state, bedroomCount: action.next };

    case ACTIONS.CHANGE_BED_COUNT:
      return { ...state, bedCount: action.next };

    case ACTIONS.CHANGE_BATH_ROOM_COUNT:
      return { ...state, bathRoomCount: action.next };

    case ACTIONS.CHANGE_ACCOMODATES_COUNT:
      return { ...state, accomodatesCount: action.next };

    case ACTIONS.CHANGE_START_DATE:
      return { ...state, startDate: action.next };

    case ACTIONS.CHANGE_END_DATE:
      return { ...state, endDate: action.next };

    case ACTIONS.CHANGE_PRICE:
      return { ...state, price: action.next };

    case ACTIONS.CHANGE_MINIMUM_STAY:
      return { ...state, minimunStay: action.next };

    case ACTIONS.CHANGE_IMAGES:
      return { ...state, images: action.next };
  }
}

const ACTIONS = {
  CHANGE_PROPERTY: "CHANGE_PROPERTY",
  CHANGE_DESCRIPTION: "CHANGE_DESCRIPTION",
  CHANGE_ABOUT_PLACE: "CHANGE_ABOUT_PLACE",
  CHANGE_PLACE_GREAT_FOR: "CHANGE_PLACE_GREAT_FOR",
  CHANGE_GUEST_ACCESS: "CHANGE_GUEST_ACCESS",
  CHANGE_INTERACTION_GUEST: "CHANGE_INTERACTION_GUEST",
  CHANGE_THING_TO_NOTE: "CHANGE_THING_TO_NOTE",
  CHANGE_OVERVIEW: "CHANGE_OVERVIEW",
  CHANGE_GETTING_AROUND: "CHANGE_GETTING_AROUND",
  CHANGE_PROPERTY_TYPE: "CHANGE_PROPERTY_TYPE",
  CHANGE_ROOM_TYPE: "CHANGE_ROOM_TYPE",
  CHANGE_CATEGORY: "CHANGE_CATEGORY",
  CHANGE_PROVINCES: "CHANGE_PROVINCES",
  CHANGE_DISTRICT: "CHANGE_DISTRICT",
  CHANGE_ADDRESS: "CHANGE_ADDRESS",
  CHANGE_BEDROOM_COUNT: "CHANGE_BEDROOM_COUNT",
  CHANGE_BED_COUNT: "CHANGE_BED_COUNT",
  CHANGE_BATH_ROOM_COUNT: "CHANGE_BATH_ROOM_COUNT",
  CHANGE_ACCOMODATES_COUNT: "CHANGE_ACCOMODATES_COUNT",
  CHANGE_START_DATE: "CHANGE_START_DATE",
  CHANGE_END_DATE: "CHANGE_END_DATE",
  CHANGE_PRICE: "CHANGE_PRICE",
  CHANGE_MINIMUM_STAY: "CHANGE_MINIMUM_STAY",
  CHANGE_IMAGES: "CHANGE_IMAGES",
};

export default function HostCreationIndex() {
  const [state, dispatch] = useReducer(reducer, {
    propertyName: "",
    description: "",
    aboutPlace: "",
    placeGreatFor: "",
    guestAccess: "",
    interactionGuest: "",
    thingToNote: "",
    overview: "",
    gettingAround: "",
    propertyTypeId: 0,
    roomTypeId: 0,
    categoryId: 0,
    provinces_id: 0,
    district_id: 0,
    address: "",
    bedroomCount: 0,
    bedCount: 0,
    bathRoomCount: 0,
    accomodatesCount: 0,
    startDate: "",
    endDate: "",
    price: "",
    minimunStay: 0,
    images: null,
  });

  return (
    <StyledContainer>
      <Outlet context={[state, dispatch, ACTIONS]} />
    </StyledContainer>
  );
}
