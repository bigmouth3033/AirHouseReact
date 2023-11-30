import React from "react";
import { useState } from "react";
import { Calendar as CalendarOrigin } from "react-calendar";
import "../Viewhost/calendar.css";

const Calendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <CalendarOrigin onChange={onChange} value={value} />
    </div>
  );
};

export default Calendar;
