import React from "react";
import { Gift, Trophy, Flame, ChevronDown } from "lucide-react";

export default function InstantWinGame() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="flex flex-col gap-6 px-4  min-h-screen items-center">
      <div className="w-[340px] bg-white rounded-2xl border border-emerald-500 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-semibold text-center py-3 tracking-wide">
          🎁 INSTANT WIN GAME - PREMIUM PRIZES
        </div>

        <div className="p-5 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 border rounded-full px-4 py-1 text-sm mb-3">
            🎉 <span className="text-emerald-600 font-semibold">$10,000+</span>
            <span className="text-gray-500">in prizes this month</span>
          </div>

          <h2 className="text-2xl font-bold mb-1">
            Win <span className="text-emerald-500">AIRPODS PRO 3</span>
          </h2>

          <p className="text-xs text-gray-500 mb-3">
            Apple Watch ultra, MacBook Pro M5, Trips & More!
          </p>

          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-medium mb-6">
            <Trophy size={14} />0 Total Spins
          </div>

          <div className="flex justify-center mb-6">
            <div className="relative w-[220px] h-[220px] rounded-full border-4 border-emerald-400 flex items-center justify-center">
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-emerald-300"></div>

              <div className="w-[180px] h-[180px] rounded-full bg-[conic-gradient(#ef4444_0_45deg,#0f172a_45deg_90deg,#ef4444_90deg_135deg,#0f172a_135deg_180deg,#ef4444_180deg_225deg,#0f172a_225deg_270deg,#ef4444_270deg_315deg,#0f172a_315deg_360deg)] flex items-center justify-center">
                <button className="bg-emerald-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow">
                  SPIN NOW
                </button>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 mb-4">
            First 100 spins this week = 90% chance to win iPhone 17 Pro Max
          </p>

          <button className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold py-3 rounded-xl shadow-md">
            SPIN TO WIN (FREE)
          </button>

          <p className="text-xs text-gray-400 mt-2">
            Weekly free spin available!
          </p>
        </div>
      </div>

      <div className="w-[340px] bg-white rounded-2xl border border-emerald-500 shadow-lg p-5">
        <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-xl p-4 text-center mb-4">
          <div className="flex items-center justify-center gap-2 text-lg font-bold">
            <Flame size={18} />0 DAY STREAK
          </div>

          <div className="text-xs opacity-90">Only daily free spins count</div>
        </div>

        <div className="border rounded-xl p-4 text-center mb-3">
          <div className="text-xs text-emerald-600 font-semibold mb-3">
            📅 THIS WEEK&apos;S PROGRESS
          </div>

          <div className="flex justify-between text-xs mb-2">
            {days.map((day, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-gray-500">{day}</span>

                <div
                  className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs
                  ${
                    i === 5 || i === 6
                      ? "bg-gray-200 text-gray-600"
                      : "bg-red-100 text-red-500 border-red-300"
                  }
                `}
                >
                  {i === 5 || i === 6 ? i + 1 : "X"}
                </div>
              </div>
            ))}
          </div>

          <div className="text-xs text-gray-400 mt-2">
            Start your streak today!
          </div>
        </div>

        <div className="text-xs text-gray-600 mb-3">
          Next Status Badge: 🟢 Platinum{" "}
          <span className="text-gray-400">(1 day away)</span>
        </div>

        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>0 day streak</span>
          <span>1 day streak</span>
        </div>

        <div className="flex justify-center text-emerald-600 text-sm font-medium cursor-pointer">
          Show Status Badges
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
}
