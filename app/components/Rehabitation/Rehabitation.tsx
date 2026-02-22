import React, { useRef, useState, useEffect } from "react";
import {
  Star,
  Users,
  Sparkles,
  Zap,
  Stethoscope,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Provider = {
  name: string;
  id: string;
  role: string;
  rating: number;
  reviews: number;
  description: string;
};

const providers: Provider[] = [
  {
    id: "kokoro-wellness",
    name: "Kokoro Wellness",
    role: "HEALTH PARTNER",
    rating: 5,
    reviews: 1,
    description:
      "State of the art fitness and wellness center focusing on peak performance, wellness",
  },
  {
    id: "hand-to-shoulder-austin",
    name: "Hand To Shoulder Austin",
    role: "HEALTH PARTNER",
    rating: 5,
    reviews: 1,
    description:
      "Austin's premier hand, wrist, elbow and shoulder rehabilitation clinic",
  },
  {
    id: "alas-de-libertad",
    name: "Alas De Libertad",
    role: "HEALTH PARTNER",
    rating: 5,
    reviews: 1,
    description: "psicologia",
  },
  {
    id: "james-stubbs",
    name: "James Stubbs",
    role: "HEALTH PARTNER",
    rating: 5,
    reviews: 1,
    description:
      "Doctor of Chiropractic dedicated to providing comprehensive care",
  },
  {
    id: "alyssa-cappelletti",
    name: "Alyssa Cappelletti",
    role: "HEALTH PARTNER",
    rating: 5,
    reviews: 2,
    description:
      "Developed a passion for fitness and sports, leading to rehabilitation expertise",
  },
  {
    id: "naqash-khan",
    name: "Naqash Khan",
    role: "HEALTH PARTNER",
    rating: 5,
    reviews: 1,
    description: "Health specialist focused on preventive care and wellness",
  },
  {
    id: "walking-tall",
    name: "Walking Tall",
    role: "HEALTH PARTNER",
    rating: 5,
    reviews: 1,
    description: "Holistic practitioner for spiritual counseling and wellness",
  },
];

const stats = [
  {
    icon: <Star size={18} />,
    value: "30+",
    label: "FEATURED PROS",
    sub: "Expert Care",
    action: "EXPLORE",
    color: "text-green-600",
  },
  {
    icon: <Users size={18} />,
    value: "100+",
    label: "SPECIALISTS",
    sub: "Wellness Experts",
    action: "JOIN NOW",
    color: "text-blue-600",
  },
  {
    icon: <Sparkles size={18} />,
    value: "15K+",
    label: "SUCCESS STORIES",
    sub: "Clients Served",
    action: "SEE REVIEWS",
    color: "text-purple-600",
  },
  {
    icon: <Zap size={18} />,
    value: "98%",
    label: "TOP RATED",
    sub: "Satisfaction Rate",
    action: "BROWSE ALL",
    color: "text-orange-500",
  },
];

export default function PhysicalHealthCarouselSection() {
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
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center mb-4">
          <Stethoscope size={42} className="text-green-600" />
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Physical Health, Sports Medicine & Rehabilitation
        </h2>

        <p className="text-center text-gray-600 mb-2">
          Expert care for injury prevention, treatment, and recovery with
          Blossend&apos;s trusted physical health professionals.
        </p>

        <p className="text-center text-green-600 font-medium mb-10">
          Book comprehensive rehab services alongside your wellness care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-14">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-full border border-blue-200 bg-white px-6 py-4"
            >
              <div className="flex items-center gap-3">
                <div className={stat.color}>{stat.icon}</div>
                <div>
                  <div className="font-bold">{stat.value}</div>
                  <div className="text-xs">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.sub}</div>
                </div>
              </div>

              <button className="text-xs text-blue-600 font-semibold">
                {stat.action}
              </button>
            </div>
          ))}
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
            {providers.map((provider, index) => (
              <a
                href={`/professionals/${provider.id}`}
                key={index}
                className="min-w-[260px] max-w-[260px] bg-white border border-blue-300 rounded-2xl p-5 flex flex-col justify-between snap-start hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div>
                  <div className="flex gap-3 mb-2">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <Stethoscope size={18} className="text-blue-600" />
                    </div>

                    <div>
                      <div className="font-semibold text-gray-900">
                        {provider.name}
                      </div>

                      <div className="text-[10px] bg-red-100 text-red-600 px-2 py-[2px] rounded-full inline-block mt-1 font-semibold">
                        {provider.role}
                      </div>
                    </div>
                  </div>

                  <div className="text-xs bg-yellow-100 text-yellow-700 inline-block px-2 py-[2px] rounded-full mb-2">
                    {provider.rating} ★ ({provider.reviews})
                  </div>

                  <p className="text-sm text-gray-600">
                    {provider.description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="text-green-600 text-xs font-semibold flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    AVAILABLE
                  </div>

                  <ArrowRight size={16} className="text-blue-600" />
                </div>
              </a>
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
          <button className="bg-gradient-to-r from-green-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform">
            See All Physical Health & Rehab Services
          </button>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
