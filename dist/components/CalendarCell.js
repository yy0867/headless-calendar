"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CalendarContext_1 = require("../context/CalendarContext");
const CalendarCell = ({ className, day, children }) => {
    const { days, selectDate } = (0, CalendarContext_1.useCalendar)();
    if (children) {
        return (0, jsx_runtime_1.jsx)("div", { className: className, children: children });
    }
    if (!day && days.length > 0) {
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: days.map((calendarDay, index) => ((0, jsx_runtime_1.jsx)("button", { className: `${calendarDay.isSelected && "font-semibold"} ${className}`, onClick: () => selectDate(calendarDay.date), children: calendarDay.day }, index))) }));
    }
    if (!day)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", { className: className, onClick: () => selectDate(day.date), children: day.day }));
};
exports.default = CalendarCell;
//# sourceMappingURL=CalendarCell.js.map