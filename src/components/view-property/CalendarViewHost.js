import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./calendar.css";

const bookedDate = [{ start: "2023-12-12", end: "2023-12-15" }];

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

const CalendarViewHost = ({ data, value, setValue, onHandleChange, disabledBookDate }) => {
  const { start_date, end_date, minimum_stay, maximum_stay } = data;

  return (
    <Calendar
      onChange={onHandleChange}
      tileDisabled={disabledBookDate}
      allowPartialRange={true}
      selectRange={true}
      returnValue={"range"}
      view={"month"}
      minDate={new Date()}
      maxDate={new Date(end_date)}
      maxDetail={"month"}
      showDoubleView={true}
      value={value}
    />
  );
};

export default CalendarViewHost;
