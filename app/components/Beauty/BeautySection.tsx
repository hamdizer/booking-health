import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Leaf,
  Star,
  Users,
  Sparkles,
  Zap,
  BadgeCheck,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Partner {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
}

const partners: Partner[] = [
  {
    id: "walking-tall",
    name: "Walking Tall",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    description:
      "I am an Indigenous holistic health practitioner dedicated to fostering spiritual counseling and overall wellness.",
    rating: 5,
    reviews: 1,
  },
  {
    id: "wellness-drips",
    name: "Wellness Drips",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=200&q=80",
    description:
      "Wellness Drips is Mexico's premier IV therapy and longevity center, specializing in IV therapy.",
    rating: 5,
    reviews: 1,
  },
  {
    id: "kokoro-wellness",
    name: "Kokoro Wellness",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200&q=80",
    description: "State of the art fitness and wellness center.",
    rating: 5,
    reviews: 1,
  },
  {
    id: "naqash-khan",
    name: "Naqash Khan",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&q=80",
    description: "Health specialist focused on preventive care and wellness.",
    rating: 5,
    reviews: 1,
  },
  {
    id: "kris-meadows",
    name: "Kris Meadows",
    image:
      "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=200&q=80",
    description: "Performance coach for athletes.",
    rating: 5,
    reviews: 1,
  },
];

export default function MindBodyWellness() {
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-4">
          <Leaf size={42} className="text-emerald-500" strokeWidth={2.5} />
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-bold text-slate-900 max-w-4xl mx-auto leading-tight">
          Mind & Body Wellness: IVs, Therapists, Mental Health Specialists,
          Holistic & Spiritual Experts
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Experience transformative healing and balance with Blossend&apos;s
          curated network of holistic and wellness experts.
        </p>

        <p className="text-center text-emerald-600 font-semibold mt-2">
          Book holistic therapies, meditation, and spiritual guidance.
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

        <div className="relative group mt-12">
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

        <div className="flex justify-center mt-14">
          <Link
            href="/professionals"
            className="px-8 py-4 rounded-xl font-semibold text-white
          bg-gradient-to-r from-emerald-500 to-blue-600
          hover:opacity-90 hover:scale-105 transition-all"
          >
            See All Holistic & Spiritual Services
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

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <Link href={`/professionals/${partner.id}`} className="snap-start">
      <div className="min-w-[260px] border border-blue-400 rounded-3xl p-5 bg-white hover:shadow-xl transition-all duration-300 cursor-pointer">
        <div className="flex gap-3">
          <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src={partner.image}
              alt={partner.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div>
            <div className="font-bold text-slate-800">{partner.name}</div>

            <span
              className="inline-block mt-1 text-xs font-semibold px-2 py-1 rounded-full
          bg-purple-100 text-purple-600"
            >
              HOLISTIC PARTNER
            </span>

            <div className="flex items-center gap-1 mt-1 text-yellow-500 text-xs">
              <Star size={14} fill="currentColor" />
              {partner.rating}.0 ({partner.reviews})
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-4 line-clamp-3">
          {partner.description}
        </p>

        <div className="flex justify-between items-center mt-6 text-xs">
          <div className="flex items-center gap-1 text-emerald-500 font-semibold">
            <BadgeCheck size={14} />
            VERIFIED
          </div>

          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  );
}
