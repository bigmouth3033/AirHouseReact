import React from "react";
import { format, isSameDay, set, startOfDay } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useDateRange } from "./DateRangeContext";

const CalendarViewHost = () => {
  const { selectedDateRange, handleDateChange, disableBookedDates } =
    useDateRange();
  const today = new Date();
  const handleDateChange = (item) => {
    setSelectedDateRange([item.selection]);
    console.log("Ngày đã cập nhật selectedDateRange:", item.selection);
  };

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
        dateDisabled={disableBookedDates}
      />
    </div>
  );
};

export default CalendarViewHost;
