import { FC, ReactNode } from "react";
import { useCalendar } from "../context/CalendarContext";

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

const PrevButton = ({
  className,
  label = "Prev month",
  children,
}: PrevButtonProps) => {
  const { goToPrevMonth } = useCalendar();

  return (
    <button onClick={goToPrevMonth} aria-label={label} className={className}>
      {children || (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      )}
    </button>
  );
};

const NextButton = ({
  className,
  label = "Next month",
  children,
}: NextButtonProps) => {
  const { goToNextMonth } = useCalendar();

  return (
    <button onClick={goToNextMonth} aria-label={label} className={className}>
      {children || (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      )}
    </button>
  );
};

interface TitleProps {
  className?: string;
  format?: (month: number, year: number, monthNames: string[]) => ReactNode;
  children?: ReactNode;
}

const Title = ({ className, format: formatFn, children }: TitleProps) => {
  const { month, year, monthNames } = useCalendar();

  if (children) {
    return <div className={className}>{children}</div>;
  }

  if (formatFn) {
    return <div className={className}>{formatFn(month, year, monthNames)}</div>;
  }

  return <p className={className}>{`${monthNames[month]}, ${year}`}</p>;
};

interface TodayButtonProps {
  className?: string;
  label?: string;
  children?: ReactNode;
}

const TodayButton = ({
  className,
  label = "Today",
  children,
}: TodayButtonProps) => {
  const { goToToday } = useCalendar();

  return (
    <button onClick={goToToday} aria-label={label} className={className}>
      {children || label}
    </button>
  );
};

const CalendarHeader: FC<CalendarHeaderProps> & {
  PrevButton: typeof PrevButton;
  NextButton: typeof NextButton;
  Title: typeof Title;
  TodayButton: typeof TodayButton;
} = ({ className, children }) => {
  if (!children) {
    return (
      <header className={className}>
        <div>
          <PrevButton />
          <Title />
          <NextButton />
        </div>
        <TodayButton />
      </header>
    );
  }

  return <header className={className}>{children}</header>;
};

CalendarHeader.PrevButton = PrevButton;
CalendarHeader.NextButton = NextButton;
CalendarHeader.Title = Title;
CalendarHeader.TodayButton = TodayButton;

export default CalendarHeader;
