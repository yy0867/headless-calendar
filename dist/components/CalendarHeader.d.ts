import { FC, ReactNode } from "react";
interface CalendarHeaderProps {
    className?: string;
    children?: ReactNode;
}
interface PrevButtonProps {
    className?: string;
    label?: string;
    children?: ReactNode;
}
interface NextButtonProps {
    className?: string;
    label?: string;
    children?: ReactNode;
}
declare const PrevButton: ({ className, label, children, }: PrevButtonProps) => import("react/jsx-runtime").JSX.Element;
declare const NextButton: ({ className, label, children, }: NextButtonProps) => import("react/jsx-runtime").JSX.Element;
interface TitleProps {
    className?: string;
    format?: (month: number, year: number, monthNames: string[]) => ReactNode;
    children?: ReactNode;
}
declare const Title: ({ className, format: formatFn, children }: TitleProps) => import("react/jsx-runtime").JSX.Element;
interface TodayButtonProps {
    className?: string;
    label?: string;
    children?: ReactNode;
}
declare const TodayButton: ({ className, label, children, }: TodayButtonProps) => import("react/jsx-runtime").JSX.Element;
declare const CalendarHeader: FC<CalendarHeaderProps> & {
    PrevButton: typeof PrevButton;
    NextButton: typeof NextButton;
    Title: typeof Title;
    TodayButton: typeof TodayButton;
};
export default CalendarHeader;
//# sourceMappingURL=CalendarHeader.d.ts.map