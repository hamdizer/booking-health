"use client";
import {
  Crown,
  Zap,
  Gift,
  Lock,
  MessageSquare,
  Star,
  Trophy,
} from "lucide-react";

interface SeekerProProps {
  onCardClick?: (item: {
    name: string;
    description: string;
    rating: number;
    location: string;
    category: string;
  }) => void;
}

export default function SeekerProCard({ onCardClick }: SeekerProProps) {
  const handleJoinClick = () => {
    if (onCardClick) {
      onCardClick({
        name: "SeekerPro",
        description:
          "Unlimited access to all features, giveaways, and premium benefits.",
        rating: 4.9,
        location: "Online",
        category: "Membership",
      });
    }
  };

  return (
    <div className="flex items-center justify-center p-3">
      <div className="w-full bg-white border-2 border-emerald-400 rounded-2xl shadow-xl p-6 lg:p-8 text-center space-y-6">
        <div className="flex justify-center items-center gap-2 text-emerald-600 text-sm font-medium">
          <Crown size={16} />
          Members Only
        </div>

        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-emerald-600">
            SeekerPro
          </h1>
          <p className="text-sm text-gray-500 mt-1 flex justify-center items-center gap-2">
            <Zap size={14} className="text-emerald-500" />
            One subscription. Unlimited access.
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleJoinClick}
            className="w-full max-w-md mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 hover:opacity-90 transition text-black font-semibold py-3 rounded-xl shadow-md"
          >
            🎁 JOIN SeekerPro → SPIN TO WIN + UNLIMITED POSTS
          </button>
          <p className="text-xs text-gray-400">Cancel anytime</p>
        </div>

        <div className="space-y-3">
          <p className="text-xs text-gray-400 font-semibold tracking-wide">
            🎁 WHAT YOU GET WITH SEEKERPRO
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureItem
              icon={<Gift size={18} />}
              text="Entry to all giveaways"
              active
            />
            <FeatureItem
              icon={<MessageSquare size={18} />}
              text="Unlimited forum posts"
              active={false}
            />
            <FeatureItem
              icon={<Lock size={18} />}
              text="Unlock exclusive benefits"
              active={false}
            />
            <FeatureItem
              icon={<Crown size={18} />}
              text="Priority winner selection"
              active
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 lg:gap-6 text-sm text-gray-600 pt-4 border-t flex-wrap">
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-500 fill-yellow-400" />
            4.9/5
          </div>
          <div className="flex items-center gap-1">
            <Trophy size={16} className="text-emerald-600" />
            1200+ prizes awarded
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  icon,
  text,
  active,
}: {
  icon: React.ReactNode;
  text: string;
  active: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium transition
        ${
          active
            ? "bg-emerald-50 border-emerald-400 text-emerald-700"
            : "bg-gray-50 border-gray-200 text-gray-600"
        }`}
    >
      <span className="text-emerald-600">{icon}</span>
      {text}
    </div>
  );
}
