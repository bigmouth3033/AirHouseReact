import React, { useState, useEffect } from "react";
import { addDays, format, startOfDay } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange, DateRangePicker } from "react-date-range";
import { useDateRange } from "./DateRangeContext";
import { useSearchParams } from "react-router-dom";
import { PropertyQueryId } from "api/propertyApi";

const CalendarViewHost = () => {
  const {
    selectedDateRange,
    countDay,
    disableBookedDates,
    setSelectedDateRange,
  } = useDateRange();
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

  // Bat ngay user chon
  const rangePropertyDayFn = () => {
    if (new Date(start_date) < new Date()) {
      return (new Date(end_date) - new Date()) / (24 * 60 * 60 * 1000) + 1;
    }
    return (
      (new Date(end_date) - new Date(start_date)) / (24 * 60 * 60 * 1000) + 1
    );
  };
  const handleUserPickRange = (item) => {
    const total = countDay(item);
    if (total[0] >= minimun_stay && total[0] <= maximum_stay) {
    } else {
      alert("Range: " + maximum_stay);
      setSelectedDateRange([
        {
          startDate: startOfDay(new Date()),
          endDate: startOfDay(new Date()),
          key: "selection",
        },
      ]);
    }
  };

  return (
    <DateRange
      onChange={(item) => {
        handleUserPickRange(item);
      }}
      editableDateInputs={true}
      moveRangeOnFirstSelection={false}
      ranges={selectedDateRange}
      months={isMobile ? 1 : 2}
      direction="horizontal"
      minDate={new Date()}
      maxDate={addDays(new Date(), rangePropertyDayFn())}
      disabledDay={disableBookedDates}
    />
  );
};

export default CalendarViewHost;
