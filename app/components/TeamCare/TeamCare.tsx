import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Star,
  Users,
  Zap,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

interface Elite {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
}

const elites: Elite[] = [
  {
    id: "acapulco-luxury-apartment",
    name: "Acapulco Luxury Apartment",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&q=80",
    description: "apartment on the beach in acapulco",
    rating: 5,
    reviews: 1,
  },
  {
    id: "kokoro-wellness",
    name: "Kokoro Wellness",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&q=80",
    description:
      "State of the art fitness and wellness center focusing on peak performance, wellness",
    rating: 5,
    reviews: 1,
  },
  {
    id: "hand-to-shoulder-austin",
    name: "Hand To Shoulder Austin",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=200&q=80",
    description: "Austin's premier hand, wrist, elbow and therapy clinic",
    rating: 5,
    reviews: 1,
  },
  {
    id: "hole-out",
    name: "Hole Out",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=200&q=80",
    description:
      "seriously good food that turns a night into an unforgettable experience.",
    rating: 0,
    reviews: 0,
  },
  {
    id: "kyle-b",
    name: "Kyle B",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    description:
      "business and leadership advisor; serial entrepreneur with a number successes",
    rating: 5,
    reviews: 1,
  },
];

export default function TeamCareElites() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-4">
          <Sparkles size={42} className="text-emerald-500" strokeWidth={2.5} />
        </div>

        <h2 className="text-center text-4xl font-bold text-slate-900">
          TeamCare Elites
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
          Premier centers hand-selected for outstanding care, top performance,
          and verified excellence in physical rehabilitation & wellness.
        </p>

        <p className="text-center text-emerald-500 font-semibold mt-3">
          Elite quality. Proven results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          <StatCard
            icon={<Star className="text-emerald-500" />}
            value="30+"
            label="FEATURED PROS"
            action="EXPLORE"
            border="border-emerald-400"
          />

          <StatCard
            icon={<Users className="text-blue-500" />}
            value="100+"
            label="SPECIALISTS"
            action="JOIN NOW"
            border="border-blue-400"
          />

          <StatCard
            icon={<Sparkles className="text-purple-500" />}
            value="15K+"
            label="SUCCESS STORIES"
            action="SEE REVIEWS"
            border="border-purple-400"
          />

          <StatCard
            icon={<Zap className="text-orange-500" />}
            value="98%"
            label="TOP RATED"
            action="BROWSE ALL"
            border="border-orange-400"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-12">
          {elites.map((elite) => (
            <Link key={elite.id} href={`/professionals/${elite.id}`}>
              <div className="border border-blue-400 rounded-3xl p-5 hover:shadow-lg transition bg-white cursor-pointer h-full">
                <div className="flex items-start gap-3">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={elite.image}
                      alt={elite.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  <div>
                    <div className="font-bold text-slate-800 leading-tight">
                      {elite.name}
                    </div>

                    <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-semibold inline-block mt-1">
                      ELITE CENTER
                    </span>

                    <div className="flex items-center gap-1 text-xs text-yellow-500 mt-1">
                      <Star size={14} fill="currentColor" />
                      {elite.rating}.0 ({elite.reviews})
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mt-4 line-clamp-3">
                  {elite.description}
                </p>

                <div className="flex items-center justify-between mt-6 text-xs text-emerald-500 font-semibold">
                  <div className="flex items-center gap-1">
                    <BadgeCheck size={14} />
                    VERIFIED
                  </div>

                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  label,
  action,
  border,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  action: string;
  border: string;
}) {
  return (
    <div
      className={`flex items-center justify-between px-5 py-4 rounded-full border ${border} bg-white shadow-sm`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <div className="font-bold text-lg">{value}</div>
          <div className="text-xs text-gray-500">{label}</div>
        </div>
      </div>

      <div className="text-xs font-semibold text-gray-400">{action}</div>
    </div>
  );
}
