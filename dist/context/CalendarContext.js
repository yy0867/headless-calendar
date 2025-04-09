"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCalendar = exports.CalendarProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const calendar_constants_1 = require("../constants/calendar.constants");
const date_fns_1 = require("date-fns");
const CalendarContext = (0, react_1.createContext)(undefined);
const CalendarProvider = ({ initialMonth, initialYear, selectedDates: externalSelectedDates, weekdayNames = calendar_constants_1.DEFAULT_WEEKDAY_NAMES, monthNames = calendar_constants_1.DEFAULT_MONTH_NAMES, onDateSelect, onSelectedDatesChange, children, }) => {
    const today = new Date();
    const [currentDate, setCurrentDate] = (0, react_1.useState)(() => {
        if (initialMonth !== undefined && initialYear !== undefined) {
            return new Date(initialYear, initialMonth, 1);
        }
        return (0, date_fns_1.startOfMonth)(today);
    });
    const [internalSelectedDates, setInternalSelectedDates] = (0, react_1.useState)(externalSelectedDates || []);
    const selectedDates = externalSelectedDates || internalSelectedDates;
    const days = (0, react_1.useMemo)(() => {
        const today = new Date();
        const monthStart = (0, date_fns_1.startOfMonth)(currentDate);
        const monthEnd = (0, date_fns_1.endOfMonth)(currentDate);
        const startDate = (0, date_fns_1.startOfWeek)(monthStart, { weekStartsOn: 0 });
        const endDate = (0, date_fns_1.endOfWeek)(monthEnd, { weekStartsOn: 0 });
        return (0, date_fns_1.eachDayOfInterval)({ start: startDate, end: endDate }).map((date) => ({
            date,
            day: (0, date_fns_1.getDate)(date),
            month: (0, date_fns_1.getMonth)(date),
            year: (0, date_fns_1.getYear)(date),
            isCurrentMonth: (0, date_fns_1.isSameMonth)(date, monthStart),
            isToday: (0, date_fns_1.isSameDay)(date, today),
            isSelected: selectedDates.some((selectedDate) => (0, date_fns_1.isSameDay)(selectedDate, date)),
        }));
    }, [currentDate, selectedDates]);
    const goToNextMonth = () => setCurrentDate((prev) => (0, date_fns_1.addMonths)(prev, 1));
    const goToPrevMonth = () => setCurrentDate((prev) => (0, date_fns_1.subMonths)(prev, 1));
    const goToToday = () => setCurrentDate(today);
    const goToMonth = (month, year) => setCurrentDate(new Date(year, month, 1));
    const isDateSelected = (date) => selectedDates.some((selectedDate) => (0, date_fns_1.isSameDay)(selectedDate, date));
    const selectDate = (date) => {
        const isAlreadySelected = isDateSelected(date);
        if (externalSelectedDates && onSelectedDatesChange) {
            let newSelectedDates = [];
            if (isAlreadySelected) {
                newSelectedDates = externalSelectedDates.filter((selectedDate) => !(0, date_fns_1.isSameDay)(selectedDate, date));
            }
            else {
                newSelectedDates = [...externalSelectedDates, date];
            }
            onSelectedDatesChange(newSelectedDates);
        }
        else {
            let newSelectedDates;
            if (isAlreadySelected) {
                newSelectedDates = internalSelectedDates.filter((selectedDate) => !(0, date_fns_1.isSameDay)(selectedDate, date));
            }
            else {
                newSelectedDates = [...internalSelectedDates, date];
            }
            setInternalSelectedDates(newSelectedDates);
        }
        onDateSelect === null || onDateSelect === void 0 ? void 0 : onDateSelect(date);
    };
    const value = {
        days,
        month: (0, date_fns_1.getMonth)(currentDate),
        year: (0, date_fns_1.getYear)(currentDate),
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
    return ((0, jsx_runtime_1.jsx)(CalendarContext.Provider, { value: value, children: children }));
};
exports.CalendarProvider = CalendarProvider;
const useCalendar = () => {
    const context = (0, react_1.useContext)(CalendarContext);
    if (context === undefined) {
        throw new Error("useCalendar must be used within a CalendarProvider");
    }
    return context;
};
exports.useCalendar = useCalendar;
//# sourceMappingURL=CalendarContext.js.map