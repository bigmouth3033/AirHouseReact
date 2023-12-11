import React, { createContext, useState, useContext } from "react";
import { addDays, isSameDay, startOfDay } from "date-fns";
const DateRangeContext = createContext();

const bookedDate = [
  { start: "2023-12-12", end: "2023-12-15" },
  { start: "2023-12-17", end: "2023-12-23" },
  { start: "2023-12-25", end: "2023-12-26" },
];

const formatDate = (dateObj) => {
  const date = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  return `${year}-${month < 10 ? "0" + month : month}-${date < 10 ? "0" + date : date}`;
};

const listDate = (start, end) => {
  const allDatesInRange = [];

  const current = new Date(start);
  const endDate = new Date(end);

  while (formatDate(current) <= formatDate(endDate)) {
    allDatesInRange.push(formatDate(current));

    current.setDate(current.getDate() + 1);
  }

  return allDatesInRange;
};

export const DateRangeProvider = ({ children, data }) => {
  let arrBookedDate = [];
  for (let i = 0; i < bookedDate.length; i++) {
    arrBookedDate = [...arrBookedDate, ...listDate(bookedDate[i].start, bookedDate[i].end)];
  }

  const disabledBookDate = (date) => {
    const isDisabled = arrBookedDate.some((bookedDate) => {
      return bookedDate == formatDate(new Date(date));
    });

    return isDisabled;
  };

  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  return (
    <DateRangeContext.Provider
      value={{
        selectedDateRange,
        setSelectedDateRange,
        disabledBookDate,
        formatDate,
        listDate,
        
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
