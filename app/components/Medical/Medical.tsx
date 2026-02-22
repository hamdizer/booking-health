"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ArrowRight,
  ShieldCheck,
  Activity,
  Users,
  Zap,
  Hospital,
} from "lucide-react";

interface Card {
  id: string;
  name: string;
  image: string;
  badge: string;
  rating: number;
  reviews: number;
  description: string;
  verified: boolean;
}

const cards: Card[] = [
  {
    id: "kris-meadows",
    name: "Kris Meadows",
    image: "https://i.pravatar.cc/100?img=1",
    badge: "HEALTHORG",
    rating: 5,
    reviews: 1,
    description:
      "I empower athletes to achieve peak performance, helping them build strength.",
    verified: true,
  },
  {
    id: "naqash-khan",
    name: "Naqash Khan",
    image: "https://i.pravatar.cc/100?img=2",
    badge: "HEALTHORG",
    rating: 5,
    reviews: 1,
    description:
      "I am dedicated to helping individuals achieve their optimal physical wellbeing.",
    verified: true,
  },
  {
    id: "maria-paula-lleren-rodas",
    name: "María Paula Lleren Rodas",
    image: "https://i.pravatar.cc/100?img=3",
    badge: "HEALTHORG",
    rating: 5,
    reviews: 1,
    description: "I am Maria Paula, a clinical nutritionist.",
    verified: true,
  },
  {
    id: "julian-ramon",
    name: "Julian Ramón",
    image: "https://i.pravatar.cc/100?img=4",
    badge: "HEALTHORG",
    rating: 5,
    reviews: 1,
    description: "aesthetic doctor",
    verified: true,
  },
  {
    id: "walking-tall",
    name: "Walking Tall",
    image: "https://i.pravatar.cc/100?img=5",
    badge: "HEALTHORG",
    rating: 5,
    reviews: 1,
    description:
      "Indigenous holistic health practitioner dedicated to fostering wellbeing.",
    verified: true,
  },
  {
    id: "kokoro-wellness",
    name: "Kokoro Wellness",
    image: "https://i.pravatar.cc/100?img=6",
    badge: "HEALTHORG",
    rating: 5,
    reviews: 1,
    description: "State of the art fitness and wellness center.",
    verified: true,
  },
  {
    id: "hand-to-shoulder-austin",
    name: "Hand To Shoulder Austin",
    image: "https://i.pravatar.cc/100?img=7",
    badge: "HEALTHORG",
    rating: 5,
    reviews: 1,
    description:
      "Premier hand, wrist, elbow and shoulder rehabilitation clinic.",
    verified: true,
  },
];

export default function MedicalClinicalServices() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!carouselRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    checkScroll();
    carousel.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      carousel.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const cardWidth = 260 + 24; // card width + gap
    const scrollAmount = cardWidth * 1;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-4">
          <Hospital className="w-12 h-12 text-blue-600" strokeWidth={2.5} />
        </div>

        <h2 className="text-center text-4xl font-bold text-slate-900 leading-tight">
          Medical & Clinical Services: Clinics, Hospitals, Labs & Wellness Orgs
        </h2>

        <p className="text-center text-slate-500 mt-4 max-w-2xl mx-auto">
          Trusted healthcare networks collaborating with Blossend to provide
          exceptional care.
        </p>

        <p className="text-center text-blue-600 mt-2 font-medium">
          Join thousands of patients who trust our verified partner network.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <StatCard
            icon={<Star className="w-5 h-5 text-green-500" />}
            title="30+"
            subtitle="FEATURED PROS"
            action="EXPLORE"
          />

          <StatCard
            icon={<Users className="w-5 h-5 text-blue-500" />}
            title="100+"
            subtitle="SPECIALISTS"
            action="JOIN NOW"
          />

          <StatCard
            icon={<Zap className="w-5 h-5 text-purple-500" />}
            title="15K+"
            subtitle="SUCCESS STORIES"
            action="SEE REVIEWS"
          />

          <StatCard
            icon={<Activity className="w-5 h-5 text-orange-500" />}
            title="98%"
            subtitle="TOP RATED"
            action="BROWSE ALL"
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
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-4 py-2 snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {cards.map((card) => (
              <CardItem key={card.id} card={card} />
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
            className="px-8 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-teal-500 shadow hover:opacity-90 hover:scale-105 transition-all"
          >
            See All Partner Organizations & Health Networks
          </Link>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  title,
  subtitle,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  action: string;
}) {
  return (
    <div className="border rounded-xl px-5 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <div className="font-bold text-lg">{title}</div>
          <div className="text-xs text-gray-500">{subtitle}</div>
        </div>
      </div>
      <span className="text-xs text-blue-600 font-medium">{action}</span>
    </div>
  );
}

function CardItem({ card }: { card: Card }) {
  return (
    <Link href={`/professionals/${card.id}`} className="snap-start">
      <div className="min-w-[260px] border rounded-2xl p-5 hover:shadow-xl transition-all duration-300 cursor-pointer bg-white">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={card.image}
              alt={card.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div>
            <div className="font-semibold text-slate-900">{card.name}</div>

            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
              {card.badge}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-3 text-sm">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          {card.rating}.0
          <span className="text-gray-400">({card.reviews})</span>
        </div>

        <p className="text-sm text-gray-500 mt-3 line-clamp-3 min-h-[60px]">
          {card.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1 text-green-600 text-sm">
            <ShieldCheck className="w-4 h-4" />
            VERIFIED
          </div>

          <ArrowRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </Link>
  );
}
