import React from "react";
import styled, { css } from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import PopUpContainer from "ui/PopUpContainer";
import { PropertyIdQuery } from "api/hostApi";
import { AmenitiesQuery } from "api/amenitiesApi";
import { DenyPropertyMutation } from "api/hostApi";
import { AcceptPropertyMutation } from "api/hostApi";

const StyledPopUp = styled(PopUpContainer)`
  background-color: white;
  color: black;
  top: 5%;
  overflow-y: scroll;
  border-radius: 0;

  & input {
    height: 2rem;
  }

  & label {
    color: #717171;
    font-size: 15px;
    font-weight: 600;
  }
`;

const StyledBody = styled.div`
  background-color: white;
  opacity: 1;

  min-width: 60rem;
  height: 90vh;
`;

const StyledHeader = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: repeat(2, 1fr);
`;

const StyledHeaderButton = styled.button`
  border: none;
  font-size: 18px;
  font-weight: 600;
  padding: 0.5rem 0;
  border-bottom: 3px solid rgb(240, 240, 240);

  ${(props) => {
    if (props.$active) {
      return css`
        border-bottom: 3px solid #3369ff;
      `;
    }
  }}
`;

const StyledContent = styled.div``;

export default function StatusPopUp({ chosenId, setShowPopUp }) {
  const propertyQuery = PropertyIdQuery(chosenId);
  const [isProperty, setIsProperty] = useState(true);

  const onSetActive = (bool) => {
    setIsProperty(bool);
  };

  return (
    <StyledPopUp setShowPopUp={setShowPopUp}>
      <StyledBody>
        {propertyQuery.isLoading ? (
          <p>loading ...</p>
        ) : (
          <StyledContent>
            <StyledHeader>
              <StyledHeaderButton onClick={() => onSetActive(true)} $active={isProperty}>
                Property
              </StyledHeaderButton>
              <StyledHeaderButton onClick={() => onSetActive(false)} $active={!isProperty}>
                Host
              </StyledHeaderButton>
            </StyledHeader>
            {isProperty ? <PropertyBody data={propertyQuery.data} /> : <UserBody />}
          </StyledContent>
        )}
      </StyledBody>
    </StyledPopUp>
  );
}

const StyledPropertyBody = styled.div`
  padding: 2rem 1.5rem;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;

  & textarea {
    grid-column: 1 / span 2;
    resize: none;
    height: 6rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  & button {
    background-color: white;
  }
`;

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  & textarea {
    resize: none;
    height: 6rem;
  }
`;

const StyledContentHeader = styled.div`
  text-align: center;
  font-size: 19px;
  font-weight: 600;
  margin: 2rem 0;
  border-bottom: 1px solid #3369ff;
`;

const StyledAmenitiesContainer = styled.div``;

const StyledAmenities = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 10px;
  margin-bottom: 30px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 10px;
  }
`;

const StyledItemAmenities = styled.div`
  display: flex;
  align-items: center;
  input {
    font-size: 10px;
  }
`;
const StyledInput = styled.input`
  cursor: pointer;
  zoom: 1.5;
`;

const StyledLable = styled.label`
  font-size: 16px;
  padding-left: 10px;
`;

const StyledImages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  & img {
    height: 5rem;
  }
`;

function PropertyBody({ data }) {
  const [message, setMessage] = useState("");
  const acceptMutation = AcceptPropertyMutation();
  const denyMutation = DenyPropertyMutation();
  const amenitiesQuery = AmenitiesQuery();
  const amenitiesIdArr = data.amenities.map((amenity) => {
    return amenity.id;
  });

  console.log(amenitiesIdArr);

  if (amenitiesQuery.isLoading) {
    return <p>loading...</p>;
  }

  const onAccept = () => {
    const payload = {
      message: message,
      id: data.id,
    };

    acceptMutation.mutate(payload, {
      onSuccess: alert("sucess"),
    });
  };

  const onDeny = () => {
    if (message == "") {
      alert("Please leave a message to host");
      return;
    }

    const payload = {
      message: message,
      id: data.id,
    };

    denyMutation.mutate(payload, {
      onSuccess: alert("sucess"),
    });
  };

  return (
    <StyledPropertyBody>
      <StyledGrid>
        <div>
          <label>Category</label>
          <input type="text" value={data.category.name} />
        </div>

        <div>
          <label>Property Type</label>
          <input type="text" value={data.property_type.name} />
        </div>

        <div>
          <label>Room Type</label>
          <input type="text" value={data.room_type.name} />
        </div>
      </StyledGrid>
      <StyledContentHeader>Basic</StyledContentHeader>
      <StyledGrid>
        <div>
          <label>Bedroom</label>
          <input type="text" value={data.bedroom_count} />
        </div>

        <div>
          <label>Bathroom</label>
          <input type="text" value={data.bathroom_count} />
        </div>

        <div>
          <label>Accommodates</label>
          <input type="text" value={data.accomodates_count} />
        </div>
      </StyledGrid>
      <StyledContentHeader>Description</StyledContentHeader>
      <StyledFlex>
        <div>
          <label>Listing Name</label>
          <input type="text" value={data.name} />
        </div>
        <div>
          <label>Description</label>
          <textarea value={data.description}></textarea>
        </div>
      </StyledFlex>
      <StyledContentHeader>Detail</StyledContentHeader>
      <StyledFlex>
        <div>
          <label>About Place</label>
          <textarea value={data.about_place || "none"}></textarea>
        </div>
        <div>
          <label>Place is great for</label>
          <textarea value={data.place_great_for || "none"}></textarea>
        </div>
        <div>
          <label>Guest Access</label>
          <textarea value={data.guest_access || "none"}></textarea>
        </div>
        <div>
          <label>Interaction with Guests</label>
          <textarea value={data.interaction_guest || "none"}></textarea>
        </div>
        <div>
          <label>Other Things to Note</label>
          <textarea value={data.thing_to_note || "none"}></textarea>
        </div>
        <div>
          <label>Overview</label>
          <textarea value={data.overview || "none"}></textarea>
        </div>
        <div>
          <label>Getting Around</label>
          <textarea value={data.getting_around || "none"}></textarea>
        </div>
      </StyledFlex>
      <StyledContentHeader>Location</StyledContentHeader>
      <StyledFlex>
        <div>
          <label>Address</label>
          <input type="text" value={`Việt Nam, ${data.province?.full_name}, ${data.district.full_name}, ${data.address}`} />
        </div>
      </StyledFlex>
      <StyledContentHeader>Amenities</StyledContentHeader>
      <StyledAmenitiesContainer>
        <label>Essentials</label>
        <StyledAmenities>
          {amenitiesQuery.isSuccess &&
            amenitiesQuery.data
              .filter((amenity) => amenity.type == "essentials")
              .map((amenity, index) => {
                return (
                  <StyledItemAmenities key={index}>
                    <StyledInput checked={amenitiesIdArr.includes(amenity.id)} name="amenities" value={amenity.id} type="checkbox" />
                    <StyledLable htmlFor="">{amenity.name}</StyledLable>
                  </StyledItemAmenities>
                );
              })}
        </StyledAmenities>

        <label>Features</label>
        <StyledAmenities>
          {amenitiesQuery.isSuccess &&
            amenitiesQuery.data
              .filter((amenity) => amenity.type == "features")
              .map((amenity, index) => {
                return (
                  <StyledItemAmenities key={index}>
                    <StyledInput checked={amenitiesIdArr.includes(amenity.id)} name="amenities" value={amenity.id} type="checkbox" />
                    <StyledLable htmlFor="">{amenity.name}</StyledLable>
                  </StyledItemAmenities>
                );
              })}
        </StyledAmenities>

        <label>Location</label>
        <StyledAmenities>
          {amenitiesQuery.isSuccess &&
            amenitiesQuery.data
              .filter((amenity) => amenity.type == "location")
              .map((amenity, index) => {
                return (
                  <StyledItemAmenities key={index}>
                    <StyledInput checked={amenitiesIdArr.includes(amenity.id)} name="amenities" value={amenity.id} type="checkbox" />
                    <StyledLable htmlFor="">{amenity.name}</StyledLable>
                  </StyledItemAmenities>
                );
              })}
        </StyledAmenities>
      </StyledAmenitiesContainer>
      <StyledContentHeader>Images and Video</StyledContentHeader>
      <StyledImages>
        {data.images.map((image) => {
          console.log(image);
          return <img src={image} />;
        })}
      </StyledImages>
      <StyledContentHeader>Pricing</StyledContentHeader>
      <StyledFlex>
        <div>
          <label>Base Price</label>
          <input value={data.base_price} />
        </div>
      </StyledFlex>
      <StyledContentHeader>Booking</StyledContentHeader>
      <StyledGrid>
        <div>
          <label>Booking Per Day/Hour</label>
          <input value={data.booking_per} />
        </div>

        <div>
          <label>Booking Type</label>
          <input value={data.booking_type} />
        </div>

        <div>
          <label>Cancellation Policy</label>
          <input value={data.cancelation} />
        </div>
      </StyledGrid>
      <StyledGrid style={{ marginTop: "2rem" }}>
        <div>
          <label>Check in after</label>
          <input value={data.check_in_after} />
        </div>

        <div>
          <label>Check out before</label>
          <input value={data.check_out_before} />
        </div>
      </StyledGrid>
      <StyledContentHeader>Calendar</StyledContentHeader>
      <StyledGrid>
        <div>
          <label>Start Date</label>
          <input value={data.start_date} />
        </div>

        <div>
          <label>End Date</label>
          <input value={data.end_date} />
        </div>

        <div>
          <label>Minimum Stay</label>
          <input value={data.minimum_stay} />
        </div>

        <div>
          <label>Maximum Stay</label>
          <input value={data.maximum_stay} />
        </div>

        <div>
          <label>Status</label>
          <input value={data.property_status ? "Not Available" : "Available"} />
        </div>
      </StyledGrid>
      <StyledContentHeader>Decision</StyledContentHeader>
      <StyledGrid>
        <textarea value={message} onChange={(ev) => setMessage(ev.target.value)}></textarea>
        <button onClick={onAccept}>Accept</button>
        <button onClick={onDeny}>Deny</button>
      </StyledGrid>
    </StyledPropertyBody>
  );
}

function UserBody(data) {
  return <div>arstar</div>;
}
