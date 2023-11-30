// DateRangeContext.js
import React, { createContext, useState, useContext } from "react";

const DateRangeContext = createContext();

export const DateRangeProvider = ({ children }) => {
  const [selectedDateRange, setSelectedDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleDateChange = (item) => {
    setSelectedDateRange([item.selection]);
  };

  return (
    <DateRangeContext.Provider value={{ selectedDateRange, handleDateChange }}>
      {children}
    </DateRangeContext.Provider>
  );
};

export const useDateRange = () => {
  const context = useContext(DateRangeContext);

  return context;
};
