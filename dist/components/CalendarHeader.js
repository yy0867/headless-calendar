import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCalendar } from "../context/CalendarContext";
const PrevButton = ({ className, label = "Prev month", children, }) => {
    const { goToPrevMonth } = useCalendar();
    return (_jsx("button", { onClick: goToPrevMonth, "aria-label": label, className: className, children: children || (_jsx("svg", { viewBox: "0 0 24 24", width: "24", height: "24", children: _jsx("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }) })) }));
};
const NextButton = ({ className, label = "Next month", children, }) => {
    const { goToNextMonth } = useCalendar();
    return (_jsx("button", { onClick: goToNextMonth, "aria-label": label, className: className, children: children || (_jsx("svg", { viewBox: "0 0 24 24", width: "24", height: "24", children: _jsx("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }) })) }));
};
const Title = ({ className, format: formatFn, children }) => {
    const { month, year, monthNames } = useCalendar();
    if (children) {
        return _jsx("div", { className: className, children: children });
    }
    if (formatFn) {
        return _jsx("div", { className: className, children: formatFn(month, year, monthNames) });
    }
    return _jsx("p", { children: `${monthNames[month]}, ${year}` });
};
const TodayButton = ({ className, label = "Today", children, }) => {
    const { goToToday } = useCalendar();
    return (_jsx("button", { onClick: goToToday, "aria-label": label, className: className, children: children || label }));
};
const CalendarHeader = ({ className, children }) => {
    if (!children) {
        return (_jsxs("header", { className: `flex justify-between items-center ${className}`, children: [_jsxs("div", { className: "flex gap-8 justify-between items-center", children: [_jsx(PrevButton, {}), _jsx(Title, {}), _jsx(NextButton, {})] }), _jsx(TodayButton, {})] }));
    }
    return _jsx("header", { className: className, children: children });
};
CalendarHeader.PrevButton = PrevButton;
CalendarHeader.NextButton = NextButton;
CalendarHeader.Title = Title;
CalendarHeader.TodayButton = TodayButton;
export default CalendarHeader;
//# sourceMappingURL=CalendarHeader.js.map