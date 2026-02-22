"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AppointmentsPage() {
  const [selectedDate, setSelectedDate] = useState<number | null>(21);

  const days = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];

  const dates = [
    26, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 1,
  ];

  return (
    <div className="min-h-screen  px-8 py-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Appointments</h1>

          <p className="text-gray-500 text-sm">
            All upcoming and past bookings at a glance
          </p>
        </div>

        <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm font-medium shadow">
          + New Booking
        </button>
      </div>

      <div className="flex gap-3 mb-6">
        {["All", "Upcoming", "Past", "Canceled"].map((item, index) => (
          <button
            key={item}
            className={`px-4 py-1.5 rounded-full text-sm ${
              index === 0
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-gray-600 mb-2">Select a Date</p>

          <div className="bg-white rounded-xl shadow border">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="flex gap-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronLeft size={16} />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronLeft size={16} />
                </button>
              </div>

              <p className="text-sm font-medium text-gray-700">février 2026</p>

              <div className="flex gap-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronRight size={16} />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 text-xs text-gray-500 px-4 pt-3">
              {days.map((day) => (
                <div key={day} className="text-center font-medium">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-y-2 px-4 py-3 text-sm">
              {dates.map((date, index) => {
                const isSelected = selectedDate === date && index > 20;

                return (
                  <button
                    key={index}
                    onClick={() => setSelectedDate(date)}
                    className={`h-9 rounded-md flex items-center justify-center
                      ${
                        isSelected
                          ? "bg-teal-400 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                  >
                    {date}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
            Available dates
          </div>
        </div>

        <div className="bg-white rounded-xl shadow border p-6">
          <p className="text-sm font-medium text-gray-700 mb-4">
            Your Appointments
          </p>

          <div className="h-40 flex items-center justify-center text-gray-400 text-sm">
            No appointments found.
          </div>
        </div>
      </div>
    </div>
  );
}
