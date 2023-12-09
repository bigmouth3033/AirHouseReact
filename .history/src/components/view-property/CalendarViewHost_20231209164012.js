import React, { useState, useEffect } from "react";
import { addDays, startOfDay } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { useDateRange } from "./DateRangeContext";

const CalendarViewHost = ({ data }) => {
  const {
    selectedDateRange,
    setSelectedDateRange,
    countDay,
    disableBookedDates,
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

  const { start_date, end_date, minimun_stay, maximum_stay } = data;

  // Show date range list for client choice
  const rangePropertyDayFn = () => {
    if (new Date(start_date) < new Date()) {
      return (new Date(end_date) - new Date()) / (24 * 60 * 60 * 1000) + 1;
    }
    return (
      (new Date(end_date) - new Date(start_date)) / (24 * 60 * 60 * 1000) + 1
    );
  };
  //Handle when client pick range
  const handleUserPickRange = (item) => {
    const total = countDay(item);
    if (
      total[0] === 1 ||
      (total[0] >= minimun_stay && total[0] <= maximum_stay)
    ) {
    } else {
      alert("Range from " + minimun_stay + " to " + maximum_stay);
      setSelectedDateRange([
        {
          startDate: startOfDay(new Date()),
          endDate: startOfDay(addDays(new Date(), data.maximum_stay)),
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
