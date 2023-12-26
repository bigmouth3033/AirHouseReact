import React from "react";
import styled from "styled-components";
import { GuestViewUserQuery } from "../../api/userApi";

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 0 2rem;
`;

export default function HostViewDashBoard() {
  const { data, isSuccess } = GuestViewUserQuery();
  const bookingsCount = data?.user?.bookings?.length || 0;
  const tripsCount = data?.userBookedProp?.bookings?.length || 0;
  console.log(data);
  return (
    <StyledLayout>
      <div>My Bookings {bookingsCount} </div>
      <div>My Trips {tripsCount}</div>
    </StyledLayout>
  );
}
