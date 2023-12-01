import React from "react";
import { addDays, format, isSameDay, startOfDay } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useDateRange } from "./DateRangeContext";

const CalendarViewHost = () => {
  const {
    selectedDateRange,
    handleDateChange,
    countDay,
    localeOptions,
    locale,
    setLocale,
    locales,
    disableBookedDates,
  } = useDateRange();
  const today = new Date();

  return (
    <div>
      <input
        value={`${format(
          selectedDateRange[0].startDate,
          "yyyy-MM-dd"
        )} to ${format(selectedDateRange[0].endDate, "yyyy-MM-dd")}`}
        type="hidden"
      />
      {/* Chon quốc gia */}
      <div>
        <select onChange={(e) => setLocale(e.target.value)} value={locale}>
          {localeOptions.map((option, i) => (
            <option value={option.value} key={i}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <DateRangePicker
        // onChange={(item) => handleDateChange(item)}
        onChange={(item) => {
          countDay(item);
        }}
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        ranges={selectedDateRange}
        months={1}
        direction="horizontal"
        minDate={today}
        maxDate={addDays(new Date(), 60)}
        locale={locales[locale]}
        disabledDay={disableBookedDates}
      />
      <div></div>
    </div>
  );
};

export default CalendarViewHost;
