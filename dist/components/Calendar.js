import { jsx as _jsx } from "react/jsx-runtime";
import { CalendarProvider } from "../context/CalendarContext";
const Calendar = ({ className, initialMonth, initialYear, selectedDates, onDateSelect, onSelectedDatesChange, weekdayNames, monthNames, children, }) => (_jsx(CalendarProvider, { initialMonth: initialMonth, initialYear: initialYear, selectedDates: selectedDates, onDateSelect: onDateSelect, onSelectedDatesChange: onSelectedDatesChange, weekdayNames: weekdayNames, monthNames: monthNames, children: _jsx("div", { className: `w-full h-full ${className}`, children: children }) }));
export default Calendar;
//# sourceMappingURL=Calendar.js.map