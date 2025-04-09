"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CalendarContext_1 = require("../context/CalendarContext");
const CalendarGrid = ({ className, children }) => {
    const { days } = (0, CalendarContext_1.useCalendar)();
    const renderCell = () => {
        if (typeof children === "function")
            return children({ days });
        if (children)
            return children;
        return days.map((day, index) => (0, jsx_runtime_1.jsx)("div", { children: day.day }, index));
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: `flex flex-col w-full ${className}`, children: (0, jsx_runtime_1.jsx)("div", { className: "w-full h-full grid grid-cols-7", children: renderCell() }) }));
};
exports.default = CalendarGrid;
//# sourceMappingURL=CalendarGrid.js.map