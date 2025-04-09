import { CalendarDay } from "../types/calendar.types";
import { ReactNode } from "react";
interface CalendarCellProps {
    className?: string;
    day?: CalendarDay;
    children?: ReactNode;
}
declare const CalendarCell: ({ className, day, children }: CalendarCellProps) => import("react/jsx-runtime").JSX.Element | null;
export default CalendarCell;
//# sourceMappingURL=CalendarCell.d.ts.map