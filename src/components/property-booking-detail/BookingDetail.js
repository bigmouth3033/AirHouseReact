import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { PropertyBookingQuery } from "api/userBookingApi";
import { useSearchParams } from "react-router-dom";
import Calendar from "react-calendar";
import Avatar from "react-avatar";
import Loading from "components/Loading";
import "./calendar.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 2rem;
`;

const StyledCalender = styled(Calendar)`
  align-self: center;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledHeader = styled.div``;

const StyledButton = styled.button`
  background-color: white;
  border: none;
  border-bottom: 1px solid white;
  cursor: pointer;

  ${(props) => {
    if (props.$styled == true) {
      return css`
        border-bottom: 1px solid black;
      `;
    }
  }}
`;

const StyledContentBody = styled.div`
  min-height: 50rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledBooking = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 1rem;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;

  & .second{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }


`;

const StyledPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 7px;
  transition: all 0.5s;

  & button {
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 25%;
    cursor: pointer;
  }

  & .arrow {
    height: 1rem;
  }

  & .active {
    border: 2px solid rgba(0, 0, 255, 0.6);
  }

  & span {
    font-size: 17px;
  }
`;

export default function BookingDetail() {
  const [serachParam, setserachParam] = useSearchParams();
  const [value, setValue] = useState([serachParam.get("start_date"), serachParam.get("end_date")]);
  const [startDate, setStartDate] = useState(value[0]);
  const [endDate, setEndDate] = useState(value[1]);
  const [active, setActive] = useState([true, false, false, false]);
  const [bookingStatus, setBookingStatus] = useState("waiting");
  const [currentPage, setCurrentPage] = useState(1);
  const propertyBookingQuery = PropertyBookingQuery(serachParam.get("property_id"), bookingStatus, startDate, endDate, currentPage);

  const totalItem = Number(propertyBookingQuery.data?.total || 0);
  const totalPage = Math.ceil(totalItem / 10);

  const paginate = () => {
    const paginate = [];

    if (currentPage - 2 > 0) {
      paginate.push(currentPage - 2);
    }

    if (currentPage - 1 > 0) {
      paginate.push(currentPage - 1);
    }

    paginate.push(currentPage);

    if (currentPage + 1 <= totalPage) {
      paginate.push(currentPage + 1);
    }

    if (currentPage + 2 <= totalPage) {
      paginate.push(currentPage + 2);
    }

    return paginate;
  };

  const onSetActive = (index) => {
    const newActive = [false, false, false, false];
    newActive[index] = true;

    if (index == 0) {
      setBookingStatus("waiting");
    }

    if (index == 1) {
      setBookingStatus("accepted");
    }

    if (index == 2) {
      setBookingStatus("success");
    }

    if (index == 3) {
      setBookingStatus("denied");
    }

    if (JSON.stringify(newActive) == JSON.stringify(active)) {
      return;
    } else {
      setActive(newActive);
    }
  };

  const onClickPrevious = () => {
    window.scrollTo(0, 0);
    if (currentPage >= 2) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onClickNext = () => {
    window.scrollTo(0, 0);
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onClickFirst = () => {
    window.scrollTo(0, 0);
    if (currentPage >= 2) {
      setCurrentPage(1);
    }
  };

  const onClickLast = () => {
    window.scrollTo(0, 0);
    if (currentPage < totalPage) {
      setCurrentPage(totalPage);
    }
  };

  return (
    <StyledContainer>
      <StyledCalender value={value} allowPartialRange={true} maxDetail={"month"} view={"month"} />
      <StyledContent>
        <StyledHeader>
          <StyledButton $styled={active[0]} onClick={() => onSetActive(0)}>
            Request
          </StyledButton>
          <StyledButton $styled={active[1]} onClick={() => onSetActive(1)}>
            Pending payment
          </StyledButton>
          <StyledButton $styled={active[2]} onClick={() => onSetActive(2)}>
            Completed
          </StyledButton>
          <StyledButton $styled={active[3]} onClick={() => onSetActive(3)}>
            Deny
          </StyledButton>
          <StyledButton>Expired</StyledButton>
        </StyledHeader>
        <StyledContentBody>
          {propertyBookingQuery.isLoading && <Loading />}
          {propertyBookingQuery.isSuccess &&
            propertyBookingQuery.data.data.map((booking) => {
              return (
                <StyledBooking>
                  <Avatar src={booking.user.image} size="100px" textSizeRatio={3} round={true} name={booking.user.first_name} />
                  <div className="second">
                    <p>Phone Number {booking.user.phonenumber}</p>
                    <p>Email {booking.user.email} </p>
                    <p>
                      Book Date {booking.check_in_date} to {booking.check_out_date}
                    </p>
                  </div>
                </StyledBooking>
              );
            })}
        </StyledContentBody>
        <StyledPagination>
          <span>{totalItem} Total</span>
          <button onClick={onClickFirst} disabled={currentPage == 1}>
            <FontAwesomeIcon icon={faAnglesLeft} />
          </button>
          <button onClick={onClickPrevious} disabled={currentPage == 1}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          {paginate().map((page, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setCurrentPage(page);
                  window.scrollTo(0, 0);
                }}
                className={page == currentPage ? "active" : "unactive"}
              >
                {page}
              </button>
            );
          })}
          <button onClick={onClickNext} disabled={currentPage == totalPage}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <button onClick={onClickLast} disabled={currentPage == totalPage}>
            <FontAwesomeIcon icon={faAnglesRight} />
          </button>
        </StyledPagination>
      </StyledContent>
    </StyledContainer>
  );
}
