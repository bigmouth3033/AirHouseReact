import React from "react";
import styled from "styled-components";
import NavViewhost from "./NavViewhost";
import Images from "./Images";
import Information from "./Information";
import TotalBeforeTaxes from "./TotalBeforeTaxes";
import { useSearchParams } from "react-router-dom";
import { PropertyQueryId } from "api/propertyApi";
import Loading from "components/Loading";
import PropertyNotFound from "components/PropertyNotFound";
import { useState } from "react";

const StyledContainer = styled.div`
  max-width: 1150px;
  padding: 0 1rem;
  margin: auto;
`;
const StyledInformation = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 692px) {
    grid-template-columns: repeat(1, 1fr);

    > div:nth-of-type(1) {
      margin: auto;
    }

    > div:nth-of-type(2) {
      grid-row: 1/1;

      margin: auto;
    }
  }
`;

const formatDate = (dateObj) => {
  const date = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  return `${year}-${month < 10 ? "0" + month : month}-${date < 10 ? "0" + date : date}`;
};

const listDate = (start, end) => {
  const allDatesInRange = [];

  const current = new Date(start);
  const endDate = new Date(end);

  while (formatDate(current) <= formatDate(endDate)) {
    allDatesInRange.push(formatDate(current));

    current.setDate(current.getDate() + 1);
  }

  return allDatesInRange;
};

const ViewProperty = () => {
  const [serachParam, setserachParam] = useSearchParams();
  const propertyQuery = PropertyQueryId(serachParam.get("id"));
  const [value, setValue] = useState(null);

  if (propertyQuery.isLoading) {
    return <Loading />;
  }

  if (propertyQuery.isError) {
    return <PropertyNotFound />;
  }
  const bookedDate = [];

  for (let i = 0; i < propertyQuery.data.booking.length; i++) {
    if (propertyQuery.data.booking[i].booking_status == "success") {
      bookedDate.push({ start: propertyQuery.data.booking[i].check_in_date, end: propertyQuery.data.booking[i].check_out_date });
    }
  }

  for (let i = 0; i < propertyQuery.data.exception_date.length; i++) {
    bookedDate.push({ start: propertyQuery.data.exception_date[i].start_date, end: propertyQuery.data.exception_date[i].end_date });
  }

  let arrBookedDate = [];
  for (let i = 0; i < bookedDate.length; i++) {
    arrBookedDate = [...arrBookedDate, ...listDate(bookedDate[i].start, bookedDate[i].end)];
  }

  const disabledBookDate = ({ activeStartDate, date, view }) => {
    const isDisabled = arrBookedDate.some((bookedDate) => {
      return bookedDate == formatDate(new Date(date));
    });

    return isDisabled;
  };

  const onHandleChange = (date) => {
    let selectedArr = [];

    if (date[1] == null) {
      selectedArr = [...listDate(formatDate(new Date(date[0])), formatDate(new Date(date[0])))];
    } else {
      selectedArr = [...listDate(formatDate(new Date(date[0])), formatDate(new Date(date[1])))];

      if (selectedArr.length < propertyQuery.data.minimum_stay || selectedArr.length > propertyQuery.data.maximum_stay) {
        alert("wrong");
        setValue([null, null]);
        return;
      }
    }

    let isWrong = false;

    selectedArr.forEach((selectedDate) => {
      if (arrBookedDate.includes(selectedDate)) {
        isWrong = true;
        return;
      }
    });

    if (isWrong) {
      setValue(value);
    } else {
      setValue(date);
    }
  };

  return (
    <div>
      <div>
        <StyledContainer>
          <NavViewhost data={propertyQuery.data} />
          <Images data={propertyQuery.data} />
          <StyledInformation>
            <Information
              disabledBookDate={disabledBookDate}
              value={value}
              setValue={setValue}
              onHandleChange={onHandleChange}
              data={propertyQuery.data}
            />
            <TotalBeforeTaxes
              className="totalbefore"
              disabledBookDate={disabledBookDate}
              value={value}
              setValue={setValue}
              onHandleChange={onHandleChange}
              data={propertyQuery.data}
            />
          </StyledInformation>
        </StyledContainer>
      </div>
    </div>
  );
};

export default ViewProperty;
