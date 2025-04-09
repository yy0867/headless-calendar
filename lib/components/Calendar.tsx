import { PropsWithChildren } from "react";
import { CalendarProvider } from "../context/CalendarContext";

interface CalendarProps {
  className?: string;
  initialMonth?: number;
  initialYear?: number;
  selectedDates?: Date[];
  onDateSelect?: (date: Date) => void;
  onSelectedDatesChange?: (dates: Date[]) => void;
  onClickToday?: () => void;
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
  onClickToday,
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
    onClickToday={onClickToday}
    weekdayNames={weekdayNames}
    monthNames={monthNames}
  >
    <div className={className}>{children}</div>
  </CalendarProvider>
);

export default Calendar;
