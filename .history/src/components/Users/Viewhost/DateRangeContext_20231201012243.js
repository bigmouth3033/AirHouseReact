// DateRangeContext.js
import { isSameDay, startOfDay } from "date-fns";
import React, { createContext, useState, useContext } from "react";
import * as locales from "react-date-range/dist/locale";

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
    startOfDay(new Date("2023-12-1")),
    startOfDay(new Date("2023-12-5")),
    startOfDay(new Date("2023-12-10")),
  ];

  const isDateBooked = (date) => {
    const result = bookedDates.some((bookedDate) =>
      isSameDay(startOfDay(date), bookedDate)
    );
    //     console.log("Is Date Booked?", result);
    return result;
  };
  const disableBookedDates = (date) => {
    //     console.log("Is Disabled?", isDateBooked(date));
    return isDateBooked(date);
  };
  const handleDateChange = (item) => {
    setSelectedDateRange([item.selection]);
    //     console.log("Ngày đã cập nhật selectedDateRange:", item.selection);
  };
  // giờ quốc tế
  const nameMapper = {
    ar: "Arabic",
    bg: "Bulgarian",
    ca: "Catalan",
    cs: "Czech",
    cy: "Welsh",
    da: "Danish",
    de: "German",
    el: "Greek",
    enGB: "English (United Kingdom)",
    enUS: "English (United States)",
    eo: "Esperanto",
    es: "Spanish",
    et: "Estonian",
    faIR: "Persian",
    fi: "Finnish",
    fil: "Filipino",
    fr: "French",
    hi: "Hindi",
    hr: "Croatian",
    hu: "Hungarian",
    hy: "Armenian",
    id: "Indonesian",
    is: "Icelandic",
    it: "Italian",
    ja: "Japanese",
    ka: "Georgian",
    ko: "Korean",
    lt: "Lithuanian",
    lv: "Latvian",
    mk: "Macedonian",
    nb: "Norwegian Bokmål",
    nl: "Dutch",
    pl: "Polish",
    pt: "Portuguese",
    ro: "Romanian",
    ru: "Russian",
    sk: "Slovak",
    sl: "Slovenian",
    sr: "Serbian",
    sv: "Swedish",
    th: "Thai",
    tr: "Turkish",
    uk: "Ukrainian",
    vi: "Vietnamese",
    zhCN: "Chinese Simplified",
    zhTW: "Chinese Traditional",
  };

  const localeOptions = Object.keys(locales)
    .map((key) => ({
      value: key,
      label: `${key} - ${nameMapper[key] || ""}`,
    }))
    .filter((item) => nameMapper[item.value]);

  const [locale, setLocale] = React.useState("vi");

  return (
    <DateRangeContext.Provider
      value={{
        selectedDateRange,
        handleDateChange,
        localeOptions,
        locale,
        setLocale,
        locales,
        disableBookedDates,
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
