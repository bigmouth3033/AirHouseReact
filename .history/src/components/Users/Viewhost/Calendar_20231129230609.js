import React from "react";

const Calendar = () => {
  const [value, onChange] = useState < Value > new Date();

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default Calendar;
