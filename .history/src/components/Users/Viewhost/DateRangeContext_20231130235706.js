// DateRangeContext.js
import { isSameDay, startOfDay } from "date-fns";
import React, { createContext, useState, useContext } from "react";

const DateRangeContext = createContext();

export const DateRangeProvider = ({ children }) => {
  const [selectedDateRange, setSelectedDateRange] = useState([
    {
      startDate: startOfDay(new Date()),
      endDate: startOfDay(new Date()),
      key: "selection",
    },
  ]);

  const bookedDates = [
    startOfDay(new Date("2023-11-30")),
    startOfDay(new Date("2023-12-5")),
    startOfDay(new Date("2023-12-7")),
    // Thêm các ngày đã đặt khác nếu cần
  ];

  const isDateBooked = (date) => {
    const result = bookedDates.some((bookedDate) =>
      isSameDay(startOfDay(date), bookedDate)
    );
    console.log("Is Date Booked?", result);
    return result;
  };

  const disableBookedDates = (date) => {
    return isDateBooked(date);
  };
  const handleDateChange = (item) => {
    setSelectedDateRange([item.selection]);
    //     disableBookedDates(item.selection.startDate);
    //     disableBookedDates(item.selection.endDate);
    console.log(disableBookedDates(item.selection.startDate));
    //     console.log(isDateBooked(item.selection.endDate));
    //     console.log("Ngày đã cập nhật selectedDateRange:", item.selection);
  };

  return (
    <DateRangeContext.Provider
      value={{ selectedDateRange, handleDateChange, disableBookedDates }}
    >
      {children}
    </DateRangeContext.Provider>
  );
};

export const useDateRange = () => {
  const context = useContext(DateRangeContext);
  if (!context) {
    throw new Error("useDateRange must be used within a DateRangeProvider");
  }
  return context;
};
