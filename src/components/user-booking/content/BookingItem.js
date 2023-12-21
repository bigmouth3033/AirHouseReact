import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Box = styled.div`
  & .booking-item {
    border: solid thin rgba(0, 0, 0, 0.2);
    padding: 10px;
  }
  & .grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-auto-rows: 14rem;
    column-gap: 1rem;
  }

  & .item1 {
    width: 450px;
  }

  & .property-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  & .booking-item .grid-container .user-image {
    max-width: 100px;
    border-radius: 50px;
  }
  & .booking-item .grid-container .item2 p {
    padding: 5px;
  }
  & .booking-item .grid-container .item3 .name-user-property {
    padding: 5px;
  }
  & .booking-item .grid-container .item3 {
    display: flex;
    justify-content: center;
  }
  & .booking-item .grid-container .item3-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export default function BookingItem(props) {
  const navigate = useNavigate();  
  return (
    <Box>
      <div className="booking-item">
        <div className="grid-container">
          <div className="item1">
            <img className="property-image" src={props.BookingItem.image} />
          </div>
          <div className="item2">
            <p style={{ fontWeight: "bold" }}>{props.BookingItem.Property_Name}</p>
            <p>
              <FontAwesomeIcon className="bar" icon={faLocationDot} />
              {props.BookingItem.province}, {props.BookingItem.districts}, {props.BookingItem.Property_Address}
            </p>
            <p>
              {props.BookingItem.check_in_date} to {props.BookingItem.check_out_date}
            </p>
          </div>
          <div className="item3">
            <div className="item3-item">
              <img className="user-image" src={props.BookingItem.user_image} />
              <div className="name-user-property">
                {props.BookingItem.user_firstName } {props.BookingItem.user_lastName}
              </div>
              <div className="Link">
                <button onClick={() => {
                  navigate('/user/chat/', {
                    replace: false,
                    state: {
                      user_Email: props.BookingItem.user_Email,
                      first_Name: props.BookingItem.user_firstName,
                      last_Name: props.BookingItem.user_lastName
                    }
                  })
                }}>
                  SendMessage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
