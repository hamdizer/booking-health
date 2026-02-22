"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Dumbbell,
  Star,
  Users,
  Sparkles,
  Zap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Partner = {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  verified: boolean;
};

const partners: Partner[] = [
  {
    id: "stephen-kwame-ansong",
    name: "Stephen Kwame Ansong",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&q=80",
    description:
      "As a dedicated fitness coach, I specialize in helping clients achieve transformation.",
    rating: 5,
    reviews: 2,
    verified: true,
  },
  {
    id: "kokoro-wellness",
    name: "Kokoro Wellness",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200&q=80",
    description:
      "State of the art fitness and wellness center focusing on peak performance.",
    rating: 5,
    reviews: 1,
    verified: true,
  },
  {
    id: "kris-meadows",
    name: "Kris Meadows",
    image:
      "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=200&q=80",
    description:
      "I empower athletes to achieve peak performance, helping them build strength.",
    rating: 5,
    reviews: 1,
    verified: true,
  },
  {
    id: "naqash-khan",
    name: "Naqash Khan",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&q=80",
    description:
      "I am dedicated to helping individuals achieve their optimal physical health.",
    rating: 5,
    reviews: 1,
    verified: true,
  },
  {
    id: "walking-tall",
    name: "Walking Tall",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    description:
      "Indigenous holistic practitioner dedicated to spiritual and physical wellbeing.",
    rating: 5,
    reviews: 1,
    verified: true,
  },
  {
    id: "alyssa-cappelletti",
    name: "Alyssa Cappelletti",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    description: "Nutrition specialist helping clients achieve optimal health.",
    rating: 5,
    reviews: 1,
    verified: true,
  },
  {
    id: "james-stubbs",
    name: "James Stubbs",
    image:
      "https://images.unsplash.com/photo-1603415526960-f8f0d3d6d0d5?w=200&q=80",
    description:
      "Doctor of Chiropractic dedicated to providing comprehensive care.",
    rating: 5,
    reviews: 1,
    verified: true,
  },
];

export default function FitnessCoachingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    checkScroll();
    scrollEl.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      scrollEl.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 260 + 24; // card width + gap
    scrollRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#f4f7f9] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center mb-3">
          <Dumbbell className="text-blue-600 w-8 h-8" />
        </div>

        <h2 className="text-center text-4xl font-bold text-slate-800 mb-3">
          Fitness, Exercise & Performance Coaching
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto text-sm">
          Unlock your full potential with Blossend&apos;s network of fitness,
          sports medicine, and performance experts.
        </p>

        <p className="text-center text-blue-600 mt-2 text-sm font-medium">
          Book premium fitness & coaching services alongside your wellness
          appointments.
        </p>

        <div className="grid md:grid-cols-4 gap-4 mt-10 mb-10">
          <StatCard
            value="30+"
            label="FEATURED PROS"
            action="EXPLORE"
            icon={<Star />}
          />
          <StatCard
            value="100+"
            label="SPECIALISTS"
            action="JOIN NOW"
            icon={<Users />}
          />
          <StatCard
            value="15K+"
            label="SUCCESS STORIES"
            action="SEE REVIEWS"
            icon={<Sparkles />}
          />
          <StatCard
            value="98%"
            label="TOP RATED"
            action="BROWSE ALL"
            icon={<Zap />}
          />
        </div>

        <div className="relative group">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border-2 border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl ${
              canScrollLeft ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            style={{ marginLeft: "-12px" }}
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-4 py-2 snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {partners.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white border-2 border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl ${
              canScrollRight ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            style={{ marginRight: "-12px" }}
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/professionals"
            className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-8 py-3 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-all"
          >
            See All Fitness & Sports Medicine Services
          </Link>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  action,
  icon,
}: {
  value: string;
  label: string;
  action: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white border rounded-full px-5 py-3 flex justify-between items-center shadow-sm">
      <div className="flex gap-3 items-center">
        <div className="bg-gray-100 p-2 rounded-full">{icon}</div>

        <div>
          <div className="font-bold">{value}</div>
          <div className="text-xs text-gray-500">{label}</div>
        </div>
      </div>

      <span className="text-xs text-blue-600 font-semibold">{action}</span>
    </div>
  );
}

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <Link href={`/professionals/${partner.id}`} className="snap-start">
      <div className="min-w-[260px] bg-white border border-blue-200 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
        <div className="flex gap-3 mb-3">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={partner.image}
              alt={partner.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div>
            <div className="font-semibold text-sm">{partner.name}</div>

            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
              FITNESS PARTNER
            </span>
          </div>
        </div>

        <div className="text-xs text-yellow-500 mb-2">
          ★★★★★ ({partner.reviews})
        </div>

        <p className="text-xs text-gray-500 mb-4 line-clamp-3">
          {partner.description}
        </p>

        <div className="flex justify-between items-center text-xs">
          <span className="text-emerald-600 font-semibold">● VERIFIED</span>

          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
