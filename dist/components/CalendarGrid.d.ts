import { ReactNode } from "react";
import { useCalendar } from "../context/CalendarContext";
type CalendarGridChildrenType = ReactNode | ((context: {
    days: ReturnType<typeof useCalendar>["days"];
}) => ReactNode);
interface CalendarGridProps {
    className?: string;
    weekdayNamesClassName?: string;
    children?: CalendarGridChildrenType;
}
declare const CalendarGrid: ({ className, children }: CalendarGridProps) => import("react/jsx-runtime").JSX.Element;
export default CalendarGrid;
//# sourceMappingURL=CalendarGrid.d.ts.map