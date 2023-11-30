// DateRangeContext.js
import { startOfDay } from "date-fns";
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

  const handleDateChange = (item) => {
    setSelectedDateRange([item.selection]);
    console.log(selectedDateRange);
  };

  return (
    <DateRangeContext.Provider value={{ selectedDateRange, handleDateChange }}>
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
