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
    localeOptions,
    locale,
    setLocale,
    locales,
    disableBookedDates,
  } = useDateRange();
  const today = new Date();
  // Thêm state để lưu số ngày được chọn
  const [selectedDaysCount, setSelectedDaysCount] = React.useState(0);

  const updateSelectedDaysCount = (dates) => {
    setSelectedDaysCount(dates.length);
  };

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
        onChange={(item) => {
          const selectedDates = handleDateChange(item);
          updateSelectedDaysCount(selectedDates);
        }}
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        ranges={selectedDateRange}
        months={1}
        direction="horizontal"
        minDate={today}
        maxDate={addDays(new Date(), 60)}
        //    scroll={{ enabled: true }}
        locale={locales[locale]}
        //    dateDisabled={() => {
        //      const isDisabled = disableBookedDates();
        //      console.log("Is Disabled in DateRangePicker?", isDisabled);
        //      return isDisabled;
        //    }}
        disabledDay={disableBookedDates}
      />
      {/* Hiển thị số ngày được chọn */}
      <div>Số ngày được chọn: {selectedDaysCount}</div>
    </div>
  );
};

export default CalendarViewHost;
