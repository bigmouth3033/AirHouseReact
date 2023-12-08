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
    console.log("Tất cả các ngày trong khoảng đã chọn:", allDatesInRange);
    console.log("Số ngày được chọn:", allDatesInRange.length);

    // Cập nhật state cho selectedDateRange
    setSelectedDateRange([item.selection]);
    return allDatesInRange.length;
  };
  const [searchParam, setSearchParam] = useSearchParams();
  const propertyId = searchParam.get("id");
  const propertyQuery = PropertyQueryId(propertyId);

  const { start_date, end_date, minimun_stay, maximum_stay } =
    propertyQuery.data;
  //Bat bgay user chon
  const [minDate, setMinDate] = useState(new Date());
  const [rangePropertyDay, setRangePropertyDay] = useState(
    start_date && end_date
      ? (new Date(end_date) - new Date(start_date)) / (24 * 60 * 60 * 1000)
      : 0
  );

  const hanldeUserPickRange = () => {
    setMinDate(selectedDateRange[0].startDate);
    setRangePropertyDay(maximum_stay);

    console.log("mindate", minDate);
    console.log();
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
