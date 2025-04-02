"use client";

import Calendar from "@/lib/components/Calendar";
import CalendarHeader from "@/lib/components/CalendarHeader";
import CalendarGrid from "@/lib/components/CalendarGrid";
import CalendarWeekdays from "@/lib/components/CalendarWeekdays";

const Page = () => {
  return (
    <div className={"w-[500px] h-[300px]"}>
      <Calendar>
        <CalendarHeader className={"flex"}>
          <CalendarHeader.PrevButton />
          <CalendarHeader.NextButton />
          <CalendarHeader.Title />
        </CalendarHeader>
        <CalendarWeekdays />
        <CalendarGrid>
          {({ days }) =>
            days.map((day, index) => <div key={index}>{day.day}</div>)
          }
        </CalendarGrid>
      </Calendar>
    </div>
  );
};

export default Page;
