"use client";
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useCalendar } from "@/lib/context/CalendarContext";
const CalendarCell = ({ className, day, children }) => {
    const { days, selectDate } = useCalendar();
    if (children) {
        return _jsx("div", { className: className, children: children });
    }
    if (!day && days.length > 0) {
        return (_jsx(_Fragment, { children: days.map((calendarDay, index) => (_jsx("button", { className: `${calendarDay.isSelected && "font-semibold"} ${className}`, onClick: () => selectDate(calendarDay.date), children: calendarDay.day }, index))) }));
    }
    if (!day)
        return null;
    return (_jsx("div", { className: className, onClick: () => selectDate(day.date), children: day.day }));
};
export default CalendarCell;
//# sourceMappingURL=CalendarCell.js.map