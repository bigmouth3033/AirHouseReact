import React from "react";
import { Calendar as CalendarHost } from "react-calendar";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
const CalendarViewHost = () => {
  const handleSelect = (date) => {
    console.log(date);
  };
  return (
    <div>
      <CalendarHost date={new Date()} onChange={handleSelect} />
    </div>
  );
};

export default CalendarViewHost;
