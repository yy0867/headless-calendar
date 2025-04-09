"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CalendarContext_1 = require("@/lib/context/CalendarContext");
const CalendarWeekdays = ({ className, children }) => {
    const { weekdayNames } = (0, CalendarContext_1.useCalendar)();
    if (typeof children === "function") {
        return ((0, jsx_runtime_1.jsx)("div", { className: `grid grid-cols-7 text-center ${className}`, children: children(weekdayNames) }));
    }
    if (children) {
        return ((0, jsx_runtime_1.jsx)("div", { className: `grid grid-cols-7 text-center ${className}`, children: children }));
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: `grid grid-cols-7 text-center ${className}`, children: weekdayNames.map((name, index) => ((0, jsx_runtime_1.jsx)("div", { children: name }, index))) }));
};
exports.default = CalendarWeekdays;
//# sourceMappingURL=CalendarWeekdays.js.map