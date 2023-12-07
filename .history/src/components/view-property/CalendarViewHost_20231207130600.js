import React from "react";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useDateRange } from "./DateRangeContext";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { PropertyQueryId } from "api/propertyApi";

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
  const [serachParam, setserachParam] = useSearchParams();
  const propertyQuery = PropertyQueryId(serachParam.get("id"));
  const start_date = propertyQuery.isSuccess
    ? propertyQuery.data.start_date
    : null;
  const end_date = propertyQuery.isSuccess ? propertyQuery.data.end_date : null;

  console.log(start_date);
  console.log(end_date);
  const rangePropertyDay = new Date(end_date) - new Date(start_date);
  console.log(rangePropertyDay);
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
      maxDate={addDays(new Date(), rangePropertyDay)}
      disabledDay={disableBookedDates}
    />
  );
};

export default CalendarViewHost;
