import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Star,
  Calendar,
} from "lucide-react";

interface Pro {
  id: string;
  name: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
}

const pros: Pro[] = [
  {
    id: "ihor-1",
    name: "Ihor",
    location: "N/A",
    price: "$0.00 / visit*",
    rating: 0,
    reviews: 0,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: "ihor-toronto",
    name: "Ihor",
    location: "TORONTO, ON",
    price: "$0.00 / visit*",
    rating: 0,
    reviews: 0,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: "sasha-brown",
    name: "Sasha Brown",
    location: "HATFIELD, PA",
    price: "$0.00 / visit*",
    rating: 0,
    reviews: 0,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: "parul-kailashiya",
    name: "Parul Kailashiya",
    location: "BHOPAL, MP",
    price: "$0.00 / visit*",
    rating: 0,
    reviews: 0,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: "ahsan-sajid",
    name: "Ahsan Sajid",
    location: "RAWALPINDI, PUNJAB",
    price: "$0.00 / visit*",
    rating: 0,
    reviews: 0,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    id: "john-doe",
    name: "John Doe",
    location: "AUSTIN, TX",
    price: "$0.00 / visit*",
    rating: 0,
    reviews: 0,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    id: "jane-smith",
    name: "Jane Smith",
    location: "MIAMI, FL",
    price: "$0.00 / visit*",
    rating: 0,
    reviews: 0,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  },
];

export default function NewToBlossend() {
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

    const cardWidth = 240 + 24; // card width + gap
    const scrollAmount = cardWidth * 1;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto bg-white border border-emerald-200 rounded-3xl p-10 relative shadow-sm">
        <div className="flex items-center justify-between mb-10">
          <div className="flex-1 text-center">
            <h2 className="text-3xl font-semibold text-emerald-500">
              New to Blossend
            </h2>

            <div className="w-24 h-1 bg-emerald-400 mx-auto mt-2 rounded-full"></div>

            <p className="text-gray-500 mt-4">
              Meet the latest professionals who joined the network.
            </p>
          </div>

          <Link
            href="/professionals"
            className="absolute right-10 top-10 border border-emerald-400 text-emerald-600 px-5 py-2 rounded-full flex items-center gap-2 hover:bg-emerald-50"
          >
            ✨ See All New Pros
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="relative group">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border-2 border-emerald-300 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl ${
              canScrollLeft ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            style={{ marginLeft: "-12px" }}
          >
            <ChevronLeft size={24} className="text-emerald-600" />
          </button>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-4 py-2 snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {pros.map((pro) => (
              <ProCard key={pro.id} pro={pro} />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white border-2 border-emerald-300 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl ${
              canScrollRight ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            style={{ marginRight: "-12px" }}
          >
            <ChevronRight size={24} className="text-emerald-600" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ProCard({ pro }: { pro: Pro }) {
  return (
    <Link href={`/professionals/${pro.id}`} className="snap-start">
      <div className="min-w-[240px] h-[280px] rounded-2xl overflow-hidden relative shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300">
        <div className="absolute inset-0">
          <Image
            src={pro.image}
            alt={pro.name}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
        </div>

        <div className="absolute bottom-0 w-full p-4 text-white">
          <div className="font-semibold text-lg text-center">{pro.name}</div>

          <div className="flex items-center justify-center text-xs text-gray-300 gap-1 mt-1">
            <MapPin size={12} />
            {pro.location}
          </div>

          <div className="flex items-center justify-between mt-2 text-sm">
            <span>{pro.price}</span>

            <div className="flex items-center gap-1 text-yellow-400">
              <Star size={14} fill="currentColor" />
              {pro.rating}.0 ({pro.reviews})
            </div>
          </div>

          <button className="w-full mt-4 flex items-center justify-center gap-2 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-emerald-500 hover:opacity-90">
            <Calendar size={16} />
            Instant Book
          </button>
        </div>
      </div>
    </Link>
  );
}
