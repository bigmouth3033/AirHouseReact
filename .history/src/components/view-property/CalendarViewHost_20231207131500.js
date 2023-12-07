import React, { useState, useEffect } from "react";
import { addDays, format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useDateRange } from "./DateRangeContext";
import { useSearchParams } from "react-router-dom";
import { PropertyQueryId } from "api/propertyApi";

const CalendarViewHost = () => {
  const { selectedDateRange, countDay, disableBookedDates } = useDateRange();
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
  const [searchParam, setSearchParam] = useSearchParams();
  const propertyId = searchParam.get("id");
  const propertyQuery = PropertyQueryId(propertyId);

  const { start_date, end_date } = propertyQuery.data;
  const isValidDate = (dateString) => !isNaN(new Date(dateString));

  const rangePropertyDay =
    isValidDate(start_date) && isValidDate(end_date)
      ? new Date(format(end_date, "yyyy-MM-dd")) -
        new Date(format(start_date, "yyyy-MM-dd"))
      : 0;
  console.log(start_date);
  console.log(end_date);
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
      minDate={new Date()}
      maxDate={addDays(new Date(), rangePropertyDay)}
      disabledDay={disableBookedDates}
    />
  );
};

export default CalendarViewHost;
