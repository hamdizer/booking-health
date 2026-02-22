"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Star, Users, Zap, ArrowRight } from "lucide-react";

type FeaturedCard = {
  id: string;
  name: string;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  verified?: boolean;
  inactive?: boolean;
};

const featuredCards: FeaturedCard[] = [
  {
    id: "kokoro-wellness",
    name: "Kokoro Wellness",
    title: "FEATURED",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200&q=80",
    rating: 5,
    reviews: 1,
    description:
      "State of the art fitness and wellness center focusing on peak performance",
    verified: true,
  },
  {
    id: "hand-to-shoulder-austin",
    name: "Hand To Shoulder Austin",
    title: "FEATURED",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80",
    rating: 5,
    reviews: 1,
    description:
      "Austin's premier hand, wrist, elbow and shoulder therapy clinic",
    verified: true,
  },
  {
    id: "kyle-b",
    name: "Kyle B",
    title: "FEATURED",
    image:
      "https://images.unsplash.com/photo-1603415526960-f8f0d3d6d0d5?w=200&q=80",
    rating: 5,
    reviews: 1,
    description:
      "Business and leadership advisor; serial entrepreneur with successes",
    verified: true,
  },
  {
    id: "stephen-kwame-ansong",
    name: "Stephen Kwame Ansong",
    title: "FEATURED",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&q=80",
    rating: 5,
    reviews: 2,
    description: "As a dedicated fitness coach, I specialize in transformation",
    inactive: true,
  },
  {
    id: "walking-tall",
    name: "Walking Tall",
    title: "FEATURED",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    reviews: 1,
    description:
      "Indigenous holistic practitioner dedicated to spiritual and physical wellbeing",
    verified: true,
  },
];

export default function FeaturedSection() {
  return (
    <section className="bg-[#f4f6f8] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center mb-3">
          <Sparkles className="text-emerald-600 w-8 h-8" />
        </div>

        <h2 className="text-center text-4xl font-bold text-slate-800 mb-4">
          Featured
        </h2>

        <div className="flex justify-center mb-10">
          <div className="bg-white border border-emerald-400 rounded-xl px-8 py-5 text-center shadow-sm max-w-xl">
            <p className="text-gray-600 text-sm">
              Discover highly-rated professionals ready to provide expert care,
              just a click away!
            </p>
            <p className="text-emerald-600 text-sm font-semibold mt-1">
              Trusted by thousands of clients.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <StatCard
            icon={<Star className="text-teal-500 w-5 h-5" />}
            value="30+"
            label="FEATURED PROS"
            sub="Expert Care"
            action="EXPLORE"
          />

          <StatCard
            icon={<Users className="text-blue-500 w-5 h-5" />}
            value="100+"
            label="SPECIALISTS"
            sub="Wellness Experts"
            action="JOIN NOW"
          />

          <StatCard
            icon={<Sparkles className="text-purple-500 w-5 h-5" />}
            value="15K+"
            label="SUCCESS STORIES"
            sub="Clients Served"
            action="SEE REVIEWS"
          />

          <StatCard
            icon={<Zap className="text-orange-500 w-5 h-5" />}
            value="98%"
            label="TOP RATED"
            sub="Satisfaction Rate"
            action="BROWSE ALL"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {featuredCards.map((card) => (
            <Link key={card.id} href={`/professionals/${card.id}`}>
              <div className="bg-white border border-blue-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition cursor-pointer h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={card.image}
                      alt={card.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  <div>
                    <div className="font-semibold text-sm text-slate-800">
                      {card.name}
                    </div>

                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                      FEATURED
                    </span>
                  </div>
                </div>

                <div className="text-xs text-yellow-500 mb-2">
                  ★★★★★ ({card.reviews})
                </div>

                <p className="text-xs text-gray-500 mb-4 line-clamp-3">
                  {card.description}
                </p>

                <div className="flex items-center justify-between text-xs">
                  {card.verified && (
                    <span className="text-emerald-600 font-semibold">
                      ● VERIFIED
                    </span>
                  )}

                  {card.inactive && (
                    <span className="text-gray-400 font-semibold">
                      ● INACTIVE
                    </span>
                  )}

                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/professionals"
            className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
          >
            See All Featured Centers & Wellness Professionals
          </Link>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  label,
  sub,
  action,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  sub: string;
  action: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-full px-5 py-3 flex items-center justify-between shadow-sm hover:shadow transition">
      <div className="flex items-center gap-3">
        <div className="bg-gray-100 p-2 rounded-full">{icon}</div>

        <div>
          <div className="font-bold text-lg text-slate-800">{value}</div>
          <div className="text-xs font-semibold text-gray-600">{label}</div>
          <div className="text-xs text-gray-400">{sub}</div>
        </div>
      </div>

      <span className="text-xs text-blue-600 font-semibold">{action}</span>
    </div>
  );
}
