import { PropsWithChildren } from "react";
import { CalendarProvider } from "../context/CalendarContext";

interface CalendarProps {
  className?: string;
  initialMonth?: number;
  initialYear?: number;
  selectedDates?: Date[];
  onDateSelect?: (date: Date) => void;
  onSelectedDatesChange?: (dates: Date[]) => void;
  weekdayNames?: string[];
  monthNames?: string[];
}

const Calendar = ({
  className,
  initialMonth,
  initialYear,
  selectedDates,
  onDateSelect,
  onSelectedDatesChange,
  weekdayNames,
  monthNames,
  children,
}: PropsWithChildren<CalendarProps>) => (
  <CalendarProvider
    initialMonth={initialMonth}
    initialYear={initialYear}
    selectedDates={selectedDates}
    onDateSelect={onDateSelect}
    onSelectedDatesChange={onSelectedDatesChange}
    weekdayNames={weekdayNames}
    monthNames={monthNames}
  >
    <div className={`w-full h-full ${className}`}>{children}</div>
  </CalendarProvider>
);

export default Calendar;
