export interface CalendarDay {
    date: Date;
    day: number;
    month: number;
    year: number;
    isCurrentMonth: boolean;
    isToday: boolean;
    isSelected: boolean;
}
export interface CalendarContextType {
    days: CalendarDay[];
    month: number;
    year: number;
    today: Date;
    currentDate: Date;
    selectedDates: Date[];
    weekdayNames: string[];
    monthNames: string[];
    goToNextMonth: () => void;
    goToPrevMonth: () => void;
    goToToday: () => void;
    goToMonth: (month: number, year: number) => void;
    selectDate: (date: Date) => void;
    isDateSelected: (date: Date) => void;
}
//# sourceMappingURL=calendar.types.d.ts.map