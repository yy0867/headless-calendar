import { CalendarDay } from "../types/calendar.types";
import { ReactNode } from "react";
import { useCalendar } from "../context/CalendarContext";

interface CalendarCellProps {
  className?: string;
  day?: CalendarDay;
  children?: ReactNode;
}

const CalendarCell = ({ className, day, children }: CalendarCellProps) => {
  const { days, selectDate } = useCalendar();

  if (children) {
    return <div className={className}>{children}</div>;
  }

  if (!day && days.length > 0) {
    return (
      <>
        {days.map((calendarDay, index) => (
          <button
            key={index}
            className={`${calendarDay.isSelected && "font-semibold"} ${className}`}
            onClick={() => selectDate(calendarDay.date)}
          >
            {calendarDay.day}
          </button>
        ))}
      </>
    );
  }

  if (!day) return null;

  return (
    <div className={className} onClick={() => selectDate(day.date)}>
      {day.day}
    </div>
  );
};

export default CalendarCell;
