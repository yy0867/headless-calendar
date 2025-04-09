import { PropsWithChildren } from "react";
import { CalendarContextType } from "../types/calendar.types";
interface CalendarProviderProps {
    initialMonth?: number;
    initialYear?: number;
    selectedDates?: Date[];
    weekdayNames?: string[];
    monthNames?: string[];
    onDateSelect?: (date: Date) => void;
    onSelectedDatesChange?: (dates: Date[]) => void;
    onClickToday?: () => void;
}
export declare const CalendarProvider: ({ initialMonth, initialYear, selectedDates: externalSelectedDates, weekdayNames, monthNames, onDateSelect, onSelectedDatesChange, onClickToday, children, }: PropsWithChildren<CalendarProviderProps>) => import("react/jsx-runtime").JSX.Element;
export declare const useCalendar: () => CalendarContextType;
export {};
//# sourceMappingURL=CalendarContext.d.ts.map