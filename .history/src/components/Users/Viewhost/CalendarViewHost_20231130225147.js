import React from "react";
import { format, isSameDay, set, startOfDay } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useDateRange } from "./DateRangeContext";

const CalendarViewHost = () => {
  const { selectedDateRange, handleDateChange } = useDateRange();

  const today = new Date();

  const bookedDates = [
    startOfDay(new Date("2023-11-30")),
    startOfDay(new Date("2023-12-5")),
    startOfDay(new Date("2023-12-7")),
    // Thêm các ngày đã đặt khác nếu cần
  ];

  const isDateBooked = (date) => {
    return bookedDates.some((bookedDate) =>
      isSameDay(startOfDay(date), bookedDate)
    );
  };

  const disableBookedDates = ({ date }) => {
    return isDateBooked(date);
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
