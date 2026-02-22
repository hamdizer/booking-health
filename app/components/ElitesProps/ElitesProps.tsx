import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin,
  Star,
  Calendar,
} from "lucide-react";

type Pro = {
  id: string;
  name: string;
  location: string;
  price: string;
  rating: string;
  reviews: string;
  image: string;
};

const pros: Pro[] = [
  {
    id: "alyssa-cappelletti",
    name: "Alyssa Cappelletti",
    location: "AUSTIN, TX",
    price: "$0.00 / visit*",
    rating: "5.0",
    reviews: "(2)",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    id: "michael-rosano",
    name: "Mihael Rosano",
    location: "TLALPAN, CDMX",
    price: "$0.00 / visit*",
    rating: "5.0",
    reviews: "(1)",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    id: "walking-tall",
    name: "Walking Tall",
    location: "ASHEVILLE, NC",
    price: "$0.00 / visit*",
    rating: "5.0",
    reviews: "(1)",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    id: "acapulco-luxury-apartment",
    name: "Acapulco Luxury Apartment",
    location: "CIUDAD DE MÉXICO, CDMX",
    price: "$0.00 / visit*",
    rating: "5.0",
    reviews: "(1)",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: "stephen-kwame-ansong",
    name: "Stephen Kwame Ansong",
    location: "ACCRA, GHANA",
    price: "$0.00 / visit*",
    rating: "5.0",
    reviews: "(2)",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
];

export default function EliteProsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 260;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex justify-center mb-4">
        <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 font-semibold text-sm">
          <Sparkles size={16} />
          Elite Wellness Network
          <Sparkles size={16} />
        </div>
      </div>

      <h2 className="text-center text-4xl font-bold mb-2">
        Meet Our <span className="text-teal-500">Elite Pros</span>
      </h2>

      <p className="text-center text-gray-500 mb-8">
        Connect with world-class professionals who combine cutting-edge
        expertise with compassionate care.
      </p>

      <div className="relative flex items-center mb-6">
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <div className="text-2xl font-bold text-teal-600 flex items-center justify-center gap-2">
            Available Now
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>

          <div className="text-gray-400 text-sm">
            Professionals accepting clients right now!
          </div>
        </div>

        <div className="ml-auto">
          <Link
            href="/professionals"
            className="px-5 py-2 rounded-full border text-gray-700 hover:bg-gray-100 whitespace-nowrap"
          >
            ✨ Browse All Available Professionals →
          </Link>
        </div>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronLeft />
        </button>

        <div
          ref={carouselRef}
          className="flex gap-5 scroll-smooth no-scrollbar"
        >
          {pros.map((pro) => (
            <Link key={pro.id} href={`/professionals/${pro.id}`}>
              <div className="min-w-[230px] h-[310px] rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer">
                <Image
                  src={pro.image}
                  alt={pro.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                  unoptimized
                />

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
                  <div className="font-semibold text-sm">{pro.name}</div>

                  <div className="flex items-center gap-1 text-xs opacity-90">
                    <MapPin size={12} />
                    {pro.location}
                  </div>

                  <div className="flex justify-between items-center mt-1 text-xs">
                    <span>{pro.price}</span>

                    <span className="flex items-center gap-1">
                      <Star
                        size={12}
                        className="fill-yellow-400 text-yellow-400"
                      />
                      {pro.rating} {pro.reviews}
                    </span>
                  </div>

                  <button className="mt-3 w-full flex items-center justify-center gap-2 text-sm font-medium py-2 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 hover:opacity-90">
                    <Calendar size={14} />
                    Instant Book
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
