"use client";

import { Trophy, User, Zap, Send, Users, MessageSquare } from "lucide-react";

export default function WeeklyForumCard() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="rounded-t-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-center py-3 font-semibold tracking-wide text-sm">
        ⚡ WEEKLY FORUM QUESTION
      </div>

      <div className="bg-white border border-teal-300 rounded-b-2xl shadow-sm p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full">
              <MessageSquare size={16} />
              Limited Time Offer
            </div>

            <div className="flex items-center gap-2 text-gray-500">
              <Users size={16} />
              3140 Live visitors
            </div>
          </div>

          <div className="text-right text-sm">
            <div className="text-teal-600 font-medium">
              ● Live Now · Giveaway ends in
            </div>

            <div className="bg-green-50 text-green-700 font-semibold px-3 py-1 rounded-md inline-block mt-1">
              00d : 01h : 33m : 14s
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
            <Trophy size={28} />
          </div>

          <h2 className="text-3xl font-bold text-gray-900">
            Best answer wins{" "}
            <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
              iPhone 17 Pro Max
            </span>
          </h2>
        </div>

        <div className="border border-teal-400 rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center">
              <User size={18} />
            </div>

            <h3 className="font-semibold text-lg text-gray-800">
              What&apos;s the one thing you wish existed that doesn&apos;t yet?
            </h3>
          </div>

          <div className="relative">
            <textarea
              placeholder="Be heard by thousands right away. share your thoughts & win big!"
              className="w-full h-32 border border-teal-400 rounded-xl p-4 resize-none outline-none focus:ring-2 focus:ring-teal-400 text-gray-700"
              maxLength={500}
            />

            <span className="absolute bottom-3 right-4 text-xs text-gray-400">
              0/500
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Zap size={16} className="text-yellow-500" />
                38 spots left
              </div>

              <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full" />
              </div>

              <div className="bg-gray-100 px-4 py-2 rounded-xl text-sm text-gray-600 shadow-sm">
                ✓ Jayden J. just entered the competition
              </div>
            </div>

            <button className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition">
              <Send size={16} />
              Post
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between bg-gray-50 border rounded-xl px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <img
                src="https://i.pravatar.cc/40?img=1"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/40?img=2"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/40?img=3"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/40?img=4"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>

            <span className="text-gray-700 font-medium">+64 participating</span>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <span className="text-teal-600 font-medium">First 100 judged</span>

            <span className="text-gray-500">Friday</span>
          </div>
        </div>
      </div>
    </div>
  );
}
