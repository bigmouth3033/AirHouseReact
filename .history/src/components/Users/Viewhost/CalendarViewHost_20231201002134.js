import React from "react";
import { addDays, format } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useDateRange } from "./DateRangeContext";
import * as locales from "react-date-range/dist/locale";
import { useState } from "react";

const CalendarViewHost = () => {
  const { selectedDateRange, handleDateChange, disableBookedDates } =
    useDateRange();
  const today = new Date();
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

  const [locale, setLocale] = React.useState("ja");
  const [date, setDate] = useState(null);

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
      <DateRangePicker
        onChange={(item) => handleDateChange(item)}
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        ranges={selectedDateRange}
        months={1}
        direction="vertical"
        minDate={today}
        maxDate={addDays(new Date(), 365)}
        scroll={{ enabled: true }}
        locale={locales[locale]}
        date={date}
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
