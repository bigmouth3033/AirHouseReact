import React from "react";
import { Calendar as CalendarHost } from "react-calendar";
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
