import React from "react";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useDateRange } from "./DateRangeContext";
import { useState } from "react";
import { useEffect } from "react";

const CalendarViewHost = () => {
  const { selectedDateRange, countDay, disableBookedDates } = useDateRange();
  const today = new Date();

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <DateRangePicker
      onChange={(item) => {
        countDay(item);
      }}
      editableDateInputs={true}
      moveRangeOnFirstSelection={false}
      ranges={selectedDateRange}
      months={isMobile ? 1 : 2}
      direction="horizontal"
      minDate={today}
      maxDate={addDays(new Date(), 20)}
      disabledDay={disableBookedDates}
    />
  );
};

export default CalendarViewHost;
