// DateRangeContext.js
import React, { createContext, useState, useContext } from "react";
import { addDays, isSameDay, startOfDay } from "date-fns";

const DateRangeContext = createContext();

export const DateRangeProvider = ({ children, data }) => {
  //chọn ngày đi ngày đến
  const [selectedDateRange, setSelectedDateRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);

  const bookedDates = [
    startOfDay(new Date("2023-12-12")),
    startOfDay(new Date("2023-12-22")),
    startOfDay(new Date("2023-12-10")),
  ];
  //kiem tra ngay tra ve va disableBooked
  const isDateBooked = (date) => {
    const isDisabled = bookedDates.some((bookedDate) =>
      isSameDay(startOfDay(date), bookedDate)
    );
    return isDisabled;
  };
  const disableBookedDates = (date) => {
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

    setSelectedDateRange([item.selection]);
    console.log(allDatesInRange);
    return [
      allDatesInRange.length,
      allDatesInRange[0],
      allDatesInRange[allDatesInRange.length - 1],
      allDatesInRange,
    ];
  };

  return (
    <DateRangeContext.Provider
      value={{
        selectedDateRange,
        setSelectedDateRange,
        disableBookedDates,
        countDay,
        bookedDates,
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
