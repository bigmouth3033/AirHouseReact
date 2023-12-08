import React, { useState, useEffect } from "react";
import { addDays, format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange, DateRangePicker } from "react-date-range";
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

  const { start_date, end_date, minimun_stay, maximum_stay } =
    propertyQuery.data;
  //Bat bgay user chon
  const [minDate, setMinDate] = useState();
  const [rangePropertyDay, setRangePropertyDay] = useState(
    start_date && end_date
      ? (new Date(end_date) - new Date(start_date)) / (24 * 60 * 60 * 1000)
      : 0
  );

  const hanldeUserPickRange = () => {
    if (selectedDateRange.length > 0 && selectedDateRange[0].startDate) {
      setRangePropertyDay(maximum_stay);
      setMinDate(selectedDateRange[0].startDate);
      console.log(selectedDateRange[0].startDate);
      console.log(rangePropertyDay);
    } else {
      console.log("selectedDateRange is empty");
    }
  };

  return (
    <DateRange
      onChange={(item) => {
        countDay(item);
        hanldeUserPickRange();
      }}
      editableDateInputs={true}
      moveRangeOnFirstSelection={false}
      ranges={selectedDateRange}
      months={isMobile ? 1 : 2}
      direction="horizontal"
      minDate={minDate}
      maxDate={addDays(new Date(), rangePropertyDay)}
      disabledDay={disableBookedDates}
    />
  );
};

export default CalendarViewHost;
