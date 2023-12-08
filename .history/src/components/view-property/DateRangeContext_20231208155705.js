// DateRangeContext.js
import React, { createContext, useState, useContext } from "react";
import { isSameDay, startOfDay } from "date-fns";

const DateRangeContext = createContext();

export const DateRangeProvider = ({ children }) => {
  //chọn ngày đi ngày đến
  const [selectedDateRange, setSelectedDateRange] = useState([
    {
      startDate: startOfDay(new Date()),
      endDate: startOfDay(new Date()),
      key: "selection",
    },
  ]);

  const bookedDates = [
    startOfDay(new Date("2023-12-1")),
    startOfDay(new Date("2023-12-5")),
    startOfDay(new Date("2023-12-10")),
  ];

  const isDateBooked = (date) => {
    const isDisabled = bookedDates.some((bookedDate) =>
      isSameDay(startOfDay(date), bookedDate)
    );
    return isDisabled;
  };
  const disableBookedDates = (date) => {
    //     console.log("Is Disabled?", isDateBooked(date));
    return isDateBooked(date);
  };
  const countDay = (item) => {
    const { startDate, endDate } = item.selection;
    // Tạo một mảng chứa tất cả các ngày trong khoảng
    const allDatesInRange = [];
    const currentDate = startOfDay(new Date(startDate));

    while (currentDate <= endDate) {
      const check = () => {
        for (let index = 0; index < bookedDates.length; index++) {
          if (isSameDay(bookedDates[index], currentDate)) {
            return false;
          }
        }
        return true;
      };
      if (check()) {
        allDatesInRange.push(new Date(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    // In ra console tất cả các ngày trong khoảng đã chọn
    // console.log("Tất cả các ngày trong khoảng đã chọn:", allDatesInRange);
    // console.log("Số ngày được chọn:", allDatesInRange.length);
    console.log(allDatesInRange.length);
    // Cập nhật state cho selectedDateRange
    setSelectedDateRange([item.selection]);
    return [allDatesInRange.length, allDatesInRange[0], allDatesInRange[-1]];
  };

  return (
    <DateRangeContext.Provider
      value={{
        selectedDateRange,
        disableBookedDates,
        countDay,
      }}
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
