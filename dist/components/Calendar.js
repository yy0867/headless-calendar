"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CalendarContext_1 = require("@/lib/context/CalendarContext");
const Calendar = ({ className, initialMonth, initialYear, selectedDates, onDateSelect, onSelectedDatesChange, weekdayNames, monthNames, children, }) => ((0, jsx_runtime_1.jsx)(CalendarContext_1.CalendarProvider, { initialMonth: initialMonth, initialYear: initialYear, selectedDates: selectedDates, onDateSelect: onDateSelect, onSelectedDatesChange: onSelectedDatesChange, weekdayNames: weekdayNames, monthNames: monthNames, children: (0, jsx_runtime_1.jsx)("div", { className: `w-full h-full ${className}`, children: children }) }));
exports.default = Calendar;
//# sourceMappingURL=Calendar.js.map