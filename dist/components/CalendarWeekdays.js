import { jsx as _jsx } from "react/jsx-runtime";
import { useCalendar } from "../context/CalendarContext";
const CalendarWeekdays = ({ className, children }) => {
    const { weekdayNames } = useCalendar();
    if (typeof children === "function") {
        return (_jsx("div", { className: className, children: children(weekdayNames) }));
    }
    if (children) {
        return (_jsx("div", { className: className, children: children }));
    }
    return (_jsx("div", { className: className, children: weekdayNames.map((name, index) => (_jsx("div", { children: name }, index))) }));
};
export default CalendarWeekdays;
//# sourceMappingURL=CalendarWeekdays.js.map