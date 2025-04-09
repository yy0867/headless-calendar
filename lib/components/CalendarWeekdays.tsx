import { ReactNode } from "react";
import { useCalendar } from "../context/CalendarContext";

interface CalendarWeekdaysProps {
  className?: string;
  children?: ReactNode | ((weekdayNames: string[]) => ReactNode);
}

const CalendarWeekdays = ({ className, children }: CalendarWeekdaysProps) => {
  const { weekdayNames } = useCalendar();

  if (typeof children === "function") {
    return (
      <div className={className}>
        {children(weekdayNames)}
      </div>
    );
  }

  if (children) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <div className={className}>
      {weekdayNames.map((name, index) => (
        <div key={index}>{name}</div>
      ))}
    </div>
  );
};

export default CalendarWeekdays;
