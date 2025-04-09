import { PropsWithChildren } from "react";
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
declare const Calendar: ({ className, initialMonth, initialYear, selectedDates, onDateSelect, onSelectedDatesChange, weekdayNames, monthNames, children, }: PropsWithChildren<CalendarProps>) => import("react/jsx-runtime").JSX.Element;
export default Calendar;
//# sourceMappingURL=Calendar.d.ts.map