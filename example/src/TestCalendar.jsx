import React from "react";
// 다양한 방식으로 import 시도
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
} from "@bbd-seyoung/headless-calendar";

export function TestCalendar() {
  try {
    return (
      <div className="p-6 border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Calendar Test</h2>

        <div className="bg-white p-4 rounded-lg shadow">
          <Calendar>
            <CalendarGrid>
              <CalendarCell />
            </CalendarGrid>
          </Calendar>
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-700">
            If you see this with styling, Tailwind CSS is working!
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error rendering TestCalendar:", error);
    return (
      <div className="p-6 border border-red-500 rounded-lg bg-red-50">
        <h2 className="text-xl font-bold text-red-700 mb-4">
          Calendar Test (Error)
        </h2>
        <p className="text-red-600">{error.message}</p>
        <pre className="mt-2 p-2 bg-gray-100 rounded text-sm overflow-auto">
          {error.stack}
        </pre>
      </div>
    );
  }
}
