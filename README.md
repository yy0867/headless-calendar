# Headless Calendar

A flexible and customizable headless calendar component for React applications.

## Installation

```bash
npm install @bbd-seyoung/headless-calendar

# Or using yarn
yarn add @bbd-seyoung/headless-calendar

# Or using pnpm
pnpm add @bbd-seyoung/headless-calendar
```

## Features

- Fully customizable UI
- Month navigation
- Date selection (single or multiple)
- Custom weekday and month names
- Responsive design
- Headless architecture for maximum flexibility

## Usage

```tsx
import { 
  Calendar,
  CalendarHeader,
  CalendarGrid,
  CalendarWeekdays
} from '@bbd-seyoung/headless-calendar';

const MyCalendar = () => {
  return (
    <div className="w-[500px] h-[300px]">
      <Calendar>
        <CalendarHeader className="flex">
          <CalendarHeader.PrevButton />
          <CalendarHeader.NextButton />
          <CalendarHeader.Title />
        </CalendarHeader>
        <CalendarWeekdays />
        <CalendarGrid>
          {({ days }) =>
            days.map((day, index) => (
              <div 
                key={index}
                className={`
                  p-2 text-center
                  ${day.isCurrentMonth ? "" : "text-gray-400"}
                  ${day.isToday ? "bg-blue-100" : ""}
                  ${day.isSelected ? "bg-blue-500 text-white" : ""}
                `}
                onClick={() => day.selectDate(day.date)}
              >
                {day.day}
              </div>
            ))
          }
        </CalendarGrid>
      </Calendar>
    </div>
  );
};

export default MyCalendar;
```

## API Reference

### Calendar

The main component that provides context for all calendar functionality.

```tsx
<Calendar
  initialMonth={2} // Default: current month
  initialYear={2024} // Default: current year
  selectedDates={[new Date()]} // Default: []
  onDateSelect={(date) => console.log(date)}
  onSelectedDatesChange={(dates) => console.log(dates)}
  weekdayNames={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']} // Default: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  monthNames={['January', 'February', ...]} // Default: abbreviated month names
>
  {/* Calendar children */}
</Calendar>
```

### CalendarHeader

Provides navigation controls and title display for the calendar.

```tsx
<CalendarHeader className="flex justify-between">
  <CalendarHeader.PrevButton />
  <CalendarHeader.Title format={(month, year, monthNames) => `${monthNames[month]} ${year}`} />
  <CalendarHeader.NextButton />
  <CalendarHeader.TodayButton />
</CalendarHeader>
```

### CalendarWeekdays

Displays weekday names.

```tsx
<CalendarWeekdays className="grid grid-cols-7 text-center" />
```

### CalendarGrid

Renders the days of the month.

```tsx
<CalendarGrid>
  {({ days }) => 
    days.map((day, index) => (
      <div key={index} onClick={() => day.selectDate(day.date)}>
        {day.day}
      </div>
    ))
  }
</CalendarGrid>
```

### useCalendar Hook

Access calendar data and functions from any component.

```tsx
import { useCalendar } from '@bbd-seyoung/headless-calendar';

const MyComponent = () => {
  const { 
    days, 
    month, 
    year, 
    today,
    selectedDates,
    goToNextMonth,
    goToPrevMonth,
    goToToday,
    goToMonth,
    selectDate,
    isDateSelected
  } = useCalendar();
  
  // Use these values and functions
  return <div>...</div>;
};
```

## License

MIT
