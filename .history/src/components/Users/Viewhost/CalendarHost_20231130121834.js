import React from "react";
import Calendar from "react-calendar";
const CalendarHost = () => {
  const handleSelect = (date) => {
    console.log(date);
  };
  return (
    <div>
      <Calendar date={new Date()} onChange={handleSelect} />
    </div>
  );
};

export default CalendarHost;
