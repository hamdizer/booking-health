import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Jet = {
  id: string;
  name: string;
  subtitle: string;
  range: string;
  base: string;
  rating: number;
  reviews: number;
  unlockPrice: string;
  rentPrice: string;
  image: string;
};

const jets: Jet[] = [
  {
    id: "gulfstream-g650er",
    name: "GULFSTREAM G650ER",
    subtitle: "Billionaire Getaway",
    range: "7,500nm",
    base: "Teterboro, NJ",
    rating: 5,
    reviews: 53,
    unlockPrice: "$999",
    rentPrice: "$350,000/month",
    image:
      "https://images.unsplash.com/photo-1583500178690-f7d5b7d6e7d4?w=800&q=80",
  },
  {
    id: "phenom-300e",
    name: "PHENOM 300E",
    subtitle: "Bachelor Party Blast",
    range: "Miami to Nassau",
    base: "Miami, FL",
    rating: 4,
    reviews: 12,
    unlockPrice: "$299",
    rentPrice: "$22,000/weekend",
    image:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80",
  },
  {
    id: "global-7500",
    name: "GLOBAL 7500",
    subtitle: "Long Haul Power Trip",
    range: "7,700nm",
    base: "New York, NY",
    rating: 5,
    reviews: 47,
    unlockPrice: "$899",
    rentPrice: "$420,000/month",
    image:
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80",
  },
  {
    id: "challenger-350",
    name: "CHALLENGER 350",
    subtitle: "Vegas Corporate Raid",
    range: "LA to Cabo",
    base: "Los Angeles, CA",
    rating: 4,
    reviews: 28,
    unlockPrice: "$499",
    rentPrice: "$48,000/weekend",
    image:
      "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=800&q=80",
  },
  {
    id: "falcon-900",
    name: "FALCON 900",
    subtitle: "Executive Elite",
    range: "4,750nm",
    base: "Dallas, TX",
    rating: 5,
    reviews: 31,
    unlockPrice: "$799",
    rentPrice: "$180,000/month",
    image:
      "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=800&q=80",
  },
];

const JetCard: React.FC<{ jet: Jet }> = ({ jet }) => (
  <Link href={`/jets/${jet.id}`} className="snap-start">
    <div className="min-w-[280px] max-w-[280px] rounded-2xl border border-purple-200 bg-white shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300">
      <div className="relative h-[200px]">
        <Image
          src={jet.image}
          alt={jet.name}
          fill
          className="object-cover"
          unoptimized
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent text-white p-4 flex flex-col justify-end">
          <div className="font-bold text-sm">{jet.name}</div>

          <div className="text-xs opacity-90">{jet.subtitle}</div>

          <div className="flex justify-between text-xs mt-1">
            <span>✈ {jet.range}</span>
            <span>📍 {jet.base}</span>
          </div>

          <div className="text-yellow-400 text-xs mt-1">
            {"★".repeat(jet.rating)}{" "}
            <span className="text-white">({jet.reviews})</span>
          </div>

          <span className="bg-green-500 text-xs px-2 py-0.5 rounded-full w-fit mt-1">
            AVAILABLE
          </span>
        </div>
      </div>

      <div className="p-4 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>🔓 Unlock</span>
          <span className="font-semibold text-black">{jet.unlockPrice}</span>
        </div>

        <div className="flex justify-between text-gray-600 mb-3">
          <span>💳 Rent</span>
          <span className="font-semibold text-black">{jet.rentPrice}</span>
        </div>

        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
          📅 Book Now
        </button>
      </div>
    </div>
  </Link>
);

export default function LuxuryAirTravel() {
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

    const cardWidth = 280 + 24; // card width + gap
    const scrollAmount = cardWidth * 1;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#f3f6fb] py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block mb-4">
          <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-semibold shadow">
            ✈ Elite Private Jet Access
          </span>
        </div>

        <h2 className="text-5xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text mb-4">
          Luxury Air Travel
        </h2>

        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Experience unparalleled comfort and convenience with our curated fleet
          of premium private jets.
        </p>

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
            {jets.map((jet, i) => (
              <JetCard key={i} jet={jet} />
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

        <div className="mt-10">
          <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition-all">
            ✈ Explore All Jets
          </button>
        </div>
      </div>
    </section>
  );
}
