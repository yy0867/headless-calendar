import { jsx as _jsx } from "react/jsx-runtime";
import { useCalendar } from "../context/CalendarContext";
const CalendarGrid = ({ className, children }) => {
    const { days } = useCalendar();
    const renderCell = () => {
        if (typeof children === "function")
            return children({ days });
        if (children)
            return children;
        return days.map((day, index) => _jsx("div", { children: day.day }, index));
    };
    return _jsx("div", { className: className, children: renderCell() });
};
export default CalendarGrid;
//# sourceMappingURL=CalendarGrid.js.map