import { useEffect, useState } from "react";
import styled from "styled-components";
import SideBar from "./sidebar/SideBar";
import Content from "./content/Content";
import axiosClient from "api/axiosClient";
import { useQuery } from "@tanstack/react-query";
import { StatusBookingQuery } from "api/userBookingApi";

const Box = styled.div`
  & .grid-container-user-booking {
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 2rem;
    row-gap: 1rem;
    max-width: 1500px;
    margin: auto;
    margin-top: 2rem;
		margin-bottom: 2rem;

    > p:nth-of-type(1) {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;
function UserBooking() {
  const [userTitle, setUserTitle] = useState("");
  const statusBookingQuery = StatusBookingQuery(userTitle);
  if (statusBookingQuery.isLoading) return <h1>Loading..</h1>;
  




  return (
    <Box>
      <div className="grid-container-user-booking">
        <p>Booking</p> <p></p>
        <SideBar setUserTitle={setUserTitle} />
        <Content allBooking={statusBookingQuery.data} />
        {/* <button onClick={handleOnClick}>Click</button> */}
      </div>
    </Box>
  );
}
export default UserBooking;
