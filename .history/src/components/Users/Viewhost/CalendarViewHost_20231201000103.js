import React from "react";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useDateRange } from "./DateRangeContext";

const CalendarViewHost = () => {
  const { selectedDateRange, handleDateChange, disableBookedDates } =
    useDateRange();
  const today = new Date();
  return (
    <div>
      <input
        value={`${format(
          selectedDateRange[0].startDate,
          "yyyy-MM-dd"
        )} to ${format(selectedDateRange[0].endDate, "yyyy-MM-dd")}`}
        type="hidden"
      />
      <DateRangePicker
        onChange={(item) => handleDateChange(item)}
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        ranges={selectedDateRange}
        months={1}
        direction="horizontal"
        minDate={today}
        dateDisabled={() => {
          const isDisabled = disableBookedDates();
          console.log("Is Disabled in DateRangePicker?", isDisabled);
          return isDisabled;
        }}
      />
    </div>
  );
};

export default CalendarViewHost;
