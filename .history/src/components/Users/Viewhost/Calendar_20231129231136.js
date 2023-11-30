import React from "react";
import { Calendar } from "react-calendar";
import "../Viewhost/calendar.css";
import { useState } from "react";

const Calendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default Calendar;
