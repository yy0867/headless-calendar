import { ReactNode } from "react";
import { useCalendar } from "../context/CalendarContext";

type CalendarGridChildrenType =
  | ReactNode
  | ((context: { days: ReturnType<typeof useCalendar>["days"] }) => ReactNode);

interface CalendarGridProps {
  className?: string;
  weekdayNamesClassName?: string;
  children?: CalendarGridChildrenType;
}

const CalendarGrid = ({ className, children }: CalendarGridProps) => {
  const { days } = useCalendar();

  const renderCell = () => {
    if (typeof children === "function") return children({ days });

    if (children) return children;

    return days.map((day, index) => <div key={index}>{day.day}</div>);
  };

  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div className={"w-full h-full grid grid-cols-7"}>{renderCell()}</div>
    </div>
  );
};

export default CalendarGrid;
