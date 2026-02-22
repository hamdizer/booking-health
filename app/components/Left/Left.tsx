import React from "react";
import {
  Search,
  Sparkles,
  Pill,
  TrendingUp,
  Users,
  Activity,
  ChevronRight,
} from "lucide-react";

export default function WellnessAdvisorCard() {
  return (
    <div className="w-[340px]  px-3 flex flex-col gap-4">
      <div className="bg-white border border-emerald-500 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-emerald-100 text-emerald-600 p-2 rounded-lg">
            <Sparkles size={16} />
          </div>
          <div className="text-xs font-bold text-emerald-600 tracking-wide">
            AI WELLNESS & FINANCE ADVISOR
          </div>
        </div>

        <div className="flex items-center border rounded-lg overflow-hidden mb-3">
          <input
            className="flex-1 px-3 py-2 text-xs outline-none"
            placeholder="ask wellness & fin questions..."
          />
          <button className="bg-emerald-500 text-white p-2">
            <Search size={14} />
          </button>
        </div>

        <div className="text-[10px] text-gray-400 mb-2">
          Looking for unlimited search?
        </div>

        <div className="flex flex-wrap gap-2 mb-2">
          <Chip text="therapy near me" />
          <Chip text="crypto today" />
          <Chip text="best vitamins" />
          <Chip text="stock picks" />
        </div>

        <div className="text-[10px] text-gray-400">
          SeekarPro unlimited search powered by AI
        </div>
      </div>

      <div className="bg-white border border-emerald-500 rounded-2xl p-4 shadow-sm">
        <div className="text-xs font-bold text-blue-600 mb-3">
          TODAY&apos;S PICKS
        </div>

        <StockItem name="RIVZ" price="$19.77" change="+1.72%" />
        <StockItem name="PIPPIN" price="$0.5253" change="+0.89%" />
        <StockItem name="BTC" price="$0.0194" change="+2.75%" />

        <div className="text-[10px] text-gray-400 mt-2">
          Updated 39 mins ago • AI powered
        </div>
      </div>

      <div className="bg-white border border-emerald-500 rounded-2xl p-4 shadow-sm">
        <div className="text-xs font-bold text-emerald-600 mb-1">FOR YOU</div>

        <div className="text-[10px] text-gray-400 mb-3">
          Based on your activity
        </div>

        <ForYouItem
          title="Book best clinics in your area"
          desc="Compare top-rated chiropractors near you and book fast"
        />

        <ForYouItem
          title="Talk to top Therapists now"
          desc="Find trusted therapists and get support"
        />
      </div>

      <div className="bg-white border border-emerald-500 rounded-2xl p-4 shadow-sm">
        <div className="text-xs font-bold text-blue-600 mb-3">
          LIVE ACTIVITY
        </div>

        <ActivityItem
          text="Disabled Info Subscribed to SeekarPro"
          time="4 days ago"
        />
        <ActivityItem
          text="Rush Huang Subscribed to SeekarPro"
          time="1 week ago"
        />
        <ActivityItem
          text="Breagan Campbell Subscribed to SeekarPro"
          time="3 week ago"
        />

        <div className="mt-4 border rounded-xl p-3 bg-gray-50">
          <div className="flex justify-between items-center mb-2">
            <div className="text-[10px] text-gray-400 flex items-center gap-1">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Live
            </div>

            <div className="text-[10px] text-gray-400">Real-time</div>
          </div>

          <div className="text-2xl font-bold text-emerald-600">3140</div>

          <div className="text-[10px] text-gray-400">currently online</div>

          <div className="flex gap-[2px] mt-2 items-end">
            {[6, 10, 8, 14, 12, 16, 10].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-emerald-500 rounded"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Chip({ text }: { text: string }) {
  return (
    <div className="text-[10px] border border-emerald-400 text-emerald-600 px-2 py-1 rounded-full">
      {text}
    </div>
  );
}

function StockItem({
  name,
  price,
  change,
}: {
  name: string;
  price: string;
  change: string;
}) {
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
        <div className="bg-yellow-100 p-1 rounded">
          <TrendingUp size={12} />
        </div>

        <div>
          <div className="text-xs font-semibold">{name}</div>
          <div className="text-[10px] text-gray-400">Mid cap</div>
        </div>
      </div>

      <div className="text-right">
        <div className="text-xs font-semibold">{price}</div>
        <div className="text-[10px] text-emerald-500">{change}</div>
      </div>
    </div>
  );
}

function ForYouItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start gap-2 mb-3">
      <div className="bg-emerald-100 text-emerald-600 p-1 rounded">
        <Users size={12} />
      </div>

      <div className="flex-1">
        <div className="text-xs font-semibold">{title}</div>

        <div className="text-[10px] text-gray-400">{desc}</div>

        <div className="text-[10px] text-emerald-600 mt-1 cursor-pointer">
          Browse featured →
        </div>
      </div>
    </div>
  );
}

function ActivityItem({ text, time }: { text: string; time: string }) {
  return (
    <div className="flex gap-2 mb-2">
      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1"></div>

      <div>
        <div className="text-[10px] text-gray-600">{text}</div>
        <div className="text-[10px] text-gray-400">{time}</div>
      </div>
    </div>
  );
}
