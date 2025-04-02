"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { CalendarContextType } from "@/lib/types/calendar.types";
import {
  DEFAULT_MONTH_NAMES,
  DEFAULT_WEEKDAY_NAMES,
} from "@/lib/constants/calendar.constants";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  getDate,
  getMonth,
  getYear,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";

const CalendarContext = createContext<CalendarContextType | undefined>(
  undefined,
);

interface CalendarProviderProps {
  initialMonth?: number;
  initialYear?: number;
  selectedDates?: Date[];
  weekdayNames?: string[];
  monthNames?: string[];

  // Actions
  onDateSelect?: (date: Date) => void;
  onSelectedDatesChange?: (dates: Date[]) => void;
}

export const CalendarProvider = ({
  initialMonth,
  initialYear,
  selectedDates: externalSelectedDates,
  weekdayNames = DEFAULT_WEEKDAY_NAMES,
  monthNames = DEFAULT_MONTH_NAMES,
  onDateSelect,
  onSelectedDatesChange,
  children,
}: PropsWithChildren<CalendarProviderProps>) => {
  const today = new Date();

  const [currentDate, setCurrentDate] = useState<Date>(() => {
    if (initialMonth !== undefined && initialYear !== undefined) {
      return new Date(initialYear, initialMonth, 1);
    }
    return startOfMonth(today);
  });
  const [internalSelectedDates, setInternalSelectedDates] = useState<Date[]>(
    externalSelectedDates || [],
  );

  const selectedDates = externalSelectedDates || internalSelectedDates;

  const days = useMemo(() => {
    const today = new Date();
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

    return eachDayOfInterval({ start: startDate, end: endDate }).map(
      (date) => ({
        date,
        day: getDate(date),
        month: getMonth(date),
        year: getYear(date),
        isCurrentMonth: isSameMonth(date, monthStart),
        isToday: isSameDay(date, today),
        isSelected: selectedDates.some((selectedDate) =>
          isSameDay(selectedDate, date),
        ),
      }),
    );
  }, [currentDate, selectedDates]);

  const goToNextMonth = () => setCurrentDate((prev) => addMonths(prev, 1));

  const goToPrevMonth = () => setCurrentDate((prev) => subMonths(prev, 1));

  const goToToday = () => setCurrentDate(today);

  const goToMonth = (month: number, year: number) =>
    setCurrentDate(new Date(year, month, 1));

  const isDateSelected = (date: Date) =>
    selectedDates.some((selectedDate) => isSameDay(selectedDate, date));

  const selectDate = (date: Date) => {
    const isAlreadySelected = isDateSelected(date);

    if (externalSelectedDates && onSelectedDatesChange) {
      let newSelectedDates: Date[] = [];
      if (isAlreadySelected) {
        newSelectedDates = externalSelectedDates.filter(
          (selectedDate) => !isSameDay(selectedDate, date),
        );
      } else {
        newSelectedDates = [...externalSelectedDates, date];
      }
      onSelectedDatesChange(newSelectedDates);
    } else {
      let newSelectedDates;
      if (isAlreadySelected) {
        newSelectedDates = internalSelectedDates.filter(
          (selectedDate) => !isSameDay(selectedDate, date),
        );
      } else {
        newSelectedDates = [...internalSelectedDates, date];
      }

      setInternalSelectedDates(newSelectedDates);
    }

    onDateSelect?.(date);
  };

  const value = {
    days,
    month: getMonth(currentDate),
    year: getYear(currentDate),
    today,
    currentDate,
    selectedDates,
    weekdayNames,
    monthNames,
    goToNextMonth,
    goToPrevMonth,
    goToToday,
    goToMonth,
    selectDate,
    isDateSelected,
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (context === undefined) {
    throw new Error("useCalendar must be used within a CalendarProvider");
  }
  return context;
};
