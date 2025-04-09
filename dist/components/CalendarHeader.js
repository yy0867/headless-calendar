"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CalendarContext_1 = require("../context/CalendarContext");
const PrevButton = ({ className, label = "Prev month", children, }) => {
    const { goToPrevMonth } = (0, CalendarContext_1.useCalendar)();
    return ((0, jsx_runtime_1.jsx)("button", { onClick: goToPrevMonth, "aria-label": label, className: className, children: children || ((0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", width: "24", height: "24", children: (0, jsx_runtime_1.jsx)("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }) })) }));
};
const NextButton = ({ className, label = "Next month", children, }) => {
    const { goToNextMonth } = (0, CalendarContext_1.useCalendar)();
    return ((0, jsx_runtime_1.jsx)("button", { onClick: goToNextMonth, "aria-label": label, className: className, children: children || ((0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", width: "24", height: "24", children: (0, jsx_runtime_1.jsx)("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }) })) }));
};
const Title = ({ className, format: formatFn, children }) => {
    const { month, year, monthNames } = (0, CalendarContext_1.useCalendar)();
    if (children) {
        return (0, jsx_runtime_1.jsx)("div", { className: className, children: children });
    }
    if (formatFn) {
        return (0, jsx_runtime_1.jsx)("div", { className: className, children: formatFn(month, year, monthNames) });
    }
    return (0, jsx_runtime_1.jsx)("p", { children: `${monthNames[month]}, ${year}` });
};
const TodayButton = ({ className, label = "Today", children, }) => {
    const { goToToday } = (0, CalendarContext_1.useCalendar)();
    return ((0, jsx_runtime_1.jsx)("button", { onClick: goToToday, "aria-label": label, className: className, children: children || label }));
};
const CalendarHeader = ({ className, children }) => {
    if (!children) {
        return ((0, jsx_runtime_1.jsxs)("header", { className: `flex justify-between items-center ${className}`, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex gap-8 justify-between items-center", children: [(0, jsx_runtime_1.jsx)(PrevButton, {}), (0, jsx_runtime_1.jsx)(Title, {}), (0, jsx_runtime_1.jsx)(NextButton, {})] }), (0, jsx_runtime_1.jsx)(TodayButton, {})] }));
    }
    return (0, jsx_runtime_1.jsx)("header", { className: className, children: children });
};
CalendarHeader.PrevButton = PrevButton;
CalendarHeader.NextButton = NextButton;
CalendarHeader.Title = Title;
CalendarHeader.TodayButton = TodayButton;
exports.default = CalendarHeader;
//# sourceMappingURL=CalendarHeader.js.map