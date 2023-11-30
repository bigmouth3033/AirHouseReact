import React from "react";
import { format, isSameDay, startOfDay } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { DateRangeProvider, useDateRange } from "./DateRangeContext";

const CalendarViewHost = () => {
  const { selectedDateRange, handleDateChange } = useDateRange();
  //   const [range, setRange] = useState([
  //     {
  //       startDate: new Date(),
  //       endDate: new Date(),
  //       key: "selection",
  //     },
  //   ]);

  const today = new Date();

  // Giả sử bạn có một danh sách các ngày đã được đặt
  const bookedDates = [
    startOfDay(Date("2023-11-30")),
    startOfDay(Date("2023-12-5")),
    startOfDay(Date("2023-12-7")),
    // Thêm các ngày đã đặt khác nếu cần
  ];

  // Hàm kiểm tra xem một ngày có được đặt hay không
  const isDateBooked = (date) => {
    return bookedDates.some((bookedDate) =>
      isSameDay(startOfDay(date), bookedDate)
    );
  };

  // Hàm vô hiệu hóa các ngày đã đặt
  const disableBookedDates = ({ date }) => {
    return isDateBooked(date);
  };

  return (
    <div>
      <input
        value={`${format(
          selectedDateRange[0].startDate,
          "yyyy-MM-dd"
        )} to ${format(selectedDateRange[0].endDate, "yyyy-MM-dd")}`}
      />
      <DateRangePicker
        onChange={(item) => handleDateChange(item)}
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        ranges={selectedDateRange}
        months={1}
        direction="horizontal"
        minDate={today}
        dateDisabled={disableBookedDates}
      />
    </div>
  );
};

export default CalendarViewHost;
