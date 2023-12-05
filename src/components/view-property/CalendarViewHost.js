import React from "react";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useDateRange } from "./DateRangeContext";

const CalendarViewHost = () => {
  const { selectedDateRange, countDay, disableBookedDates } = useDateRange();
  const today = new Date();

  return (
    <DateRangePicker
      onChange={(item) => {
        countDay(item);
      }}
      editableDateInputs={true}
      moveRangeOnFirstSelection={false}
      ranges={selectedDateRange}
      months={1}
      direction="horizontal"
      minDate={today}
      maxDate={addDays(new Date(), 60)}
      disabledDay={disableBookedDates}
    />
  );
};

export default CalendarViewHost;
