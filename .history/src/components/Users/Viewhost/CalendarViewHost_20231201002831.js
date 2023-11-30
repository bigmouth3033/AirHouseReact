import React from "react";
import { addDays, format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useDateRange } from "./DateRangeContext";

const CalendarViewHost = () => {
  const {
    selectedDateRange,
    handleDateChange,
    disableBookedDates,
    localeOptions,
    locale,
    setLocale,
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
      <div style={{ display: "flex", flexFlow: "column nowrap" }}>
        <select
          style={{ margin: "20px auto" }}
          onChange={(e) => setLocale(e.target.value)}
          value={locale}
        >
          {localeOptions.map((option, i) => (
            <option value={option.value} key={i}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      ;
      <DateRangePicker
        onChange={(item) => handleDateChange(item)}
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        ranges={selectedDateRange}
        months={1}
        direction="vertical"
        minDate={today}
        maxDate={addDays(new Date(), 20)}
        scroll={{ enabled: true }}
        locale={locales[locale]}
        dateDisabled={() => {
          const isDisabled = disableBookedDates();
          console.log("Is Disabled in DateRangePicker?", isDisabled);
          return isDisabled;
        }}
      />
    </div>
  );
};

export default CalendarViewHost;
