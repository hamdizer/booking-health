"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Star,
  Lock,
  MessageSquare,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

interface JetDetailsProps {
  params: {
    id: string;
  };
}

interface JetData {
  id: string;
  name: string;
  image: string;
  location: string;
  rating: number;
  reviews: number;
  passengers: string;
  range: string;
  notice: string;
  hourlyRate: string;
}

const jetsData: JetData[] = [
  {
    id: "gulfstream-g650er",
    name: "GULFSTREAM G650ER",
    image:
      "https://images.unsplash.com/photo-1583500178690-f7d20a49b5e1?q=80&w=1200",
    location: "Teterboro, NJ",
    rating: 5,
    reviews: 42,
    passengers: "14",
    range: "7,500nm",
    notice: "Full catering included",
    hourlyRate: "$350,000/month",
  },
  {
    id: "phenom-300e",
    name: "PHENOM 300E",
    image:
      "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1200",
    location: "Miami, FL",
    rating: 4.8,
    reviews: 36,
    passengers: "8",
    range: "2,000nm",
    notice: "Open bar zone",
    hourlyRate: "$22,000/weekend",
  },
  {
    id: "global-7500",
    name: "GLOBAL 7500",
    image:
      "https://images.unsplash.com/photo-1601924638867-3ec2d7c0a9c9?q=80&w=1200",
    location: "New York, NY",
    rating: 5,
    reviews: 28,
    passengers: "16",
    range: "7,700nm",
    notice: "Luxury interior",
    hourlyRate: "$420,000/month",
  },
  {
    id: "challenger-350",
    name: "CHALLENGER 350",
    image:
      "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?q=80&w=1200",
    location: "Los Angeles, CA",
    rating: 4.5,
    reviews: 52,
    passengers: "9",
    range: "3,200nm",
    notice: "WiFi included",
    hourlyRate: "$48,000/weekend",
  },
  {
    id: "falcon-900",
    name: "FALCON 900",
    image:
      "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=800&q=80",
    location: "Dallas, TX",
    rating: 5,
    reviews: 31,
    passengers: "12",
    range: "4,750nm",
    notice: "Executive configuration",
    hourlyRate: "$180,000/month",
  },
];

function StatBox({
  icon,
  label,
  value,
  locked,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  locked?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm min-w-[240px]">
      <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
        {icon}
      </div>

      <div className="leading-tight">
        <div className="text-xs text-gray-400">{label}</div>
        <div className="text-sm font-semibold text-gray-800">
          {locked ? (
            <span className="flex items-center gap-1 text-gray-500">
              <Lock size={12} />
              {value}
            </span>
          ) : (
            value
          )}
        </div>
      </div>
    </div>
  );
}

function SidebarCard({
  title,
  buttonText,
  icon,
  onClick,
}: {
  title: string;
  buttonText: string;
  icon: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
      <div className="text-sm font-semibold text-gray-800 mb-3">{title}</div>

      <button
        onClick={onClick}
        className="w-full flex items-center justify-center gap-2 text-sm font-medium text-white py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 hover:opacity-90 transition"
      >
        {icon}
        {buttonText}
      </button>
    </div>
  );
}

function ReviewCard({
  name,
  review,
  rating,
}: {
  name: string;
  review: string;
  rating: number;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
      <div className="flex justify-between items-center mb-1">
        <div className="font-medium text-sm text-gray-800">{name}</div>

        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
              }
            />
          ))}
        </div>
      </div>

      <p className="text-xs text-gray-500 leading-relaxed">{review}</p>
    </div>
  );
}

export default function JetDetails({
  params,
}: {
  params: { value: { id: string } };
}) {
  const jet = jetsData.find((j) => j.id === params.value.id) || jetsData[0];

  return (
    <div className="min-h-screen ">
      <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <Link
            href="/"
            className="text-xs opacity-90 mb-3 cursor-pointer hover:underline inline-flex items-center gap-1"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mt-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white/30">
              <Image
                src={jet.image}
                alt={jet.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div>
              <h1 className="text-2xl font-bold">{jet.name}</h1>

              <div className="flex items-center gap-4 text-xs mt-1 opacity-90">
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-yellow-300 text-yellow-300" />
                  {jet.rating} Rating ({jet.reviews} reviews)
                </div>

                <div className="flex items-center gap-1">
                  <MapPin size={14} /> {jet.location}
                </div>

                <div className="underline cursor-pointer">Share Profile</div>
              </div>

              <div className="mt-2 inline-block text-xs bg-white/20 px-3 py-1 rounded-full">
                Available Now
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-wrap gap-4 mb-6">
          <StatBox
            icon={<Phone size={16} />}
            label="Phone"
            value="Unlock Required"
            locked
          />

          <StatBox
            icon={<Mail size={16} />}
            label="Email"
            value="Unlock Required"
            locked
          />

          <StatBox
            icon={<MapPin size={16} />}
            label="Base Location"
            value={jet.location}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
              <div className="font-semibold text-gray-800 mb-3">
                About This Aircraft
              </div>

              <div className="relative rounded-xl overflow-hidden mb-4 h-[260px]">
                <Image
                  src={jet.image}
                  alt={jet.name}
                  fill
                  className="object-cover"
                  unoptimized
                />

                <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition">
                  <ChevronLeft size={16} />
                </button>

                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition">
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-400 text-xs">Passengers</div>
                  <div className="font-medium">{jet.passengers}</div>
                </div>

                <div>
                  <div className="text-gray-400 text-xs">Range</div>
                  <div className="font-medium">{jet.range}</div>
                </div>

                <div>
                  <div className="text-gray-400 text-xs">Notice</div>
                  <div className="font-medium">{jet.notice}</div>
                </div>

                <div>
                  <div className="text-gray-400 text-xs">Hourly Rate</div>
                  <div className="font-medium">{jet.hourlyRate}</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="font-semibold">Guest Experiences</div>
                  <div className="text-xs text-gray-500">
                    {jet.rating} based on {jet.reviews} reviews
                  </div>
                </div>

                <button className="text-xs bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2 rounded-lg">
                  Write a Review
                </button>
              </div>

              <div className="space-y-3">
                <ReviewCard
                  name="Michael R"
                  rating={5}
                  review="Excellent aircraft and smooth flight experience. Highly recommend."
                />

                <ReviewCard
                  name="George L"
                  rating={4}
                  review="Very comfortable and professional crew."
                />

                <ReviewCard
                  name="Jennifer W"
                  rating={5}
                  review="Amazing service and clean aircraft."
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <SidebarCard
              title="Owner Contact"
              buttonText="Unlock Contact ($199)"
              icon={<Lock size={16} />}
            />

            <SidebarCard
              title="Book This Jet"
              buttonText="Book Now"
              icon={<Calendar size={16} />}
            />

            <SidebarCard
              title="Questions?"
              buttonText="Send Message"
              icon={<MessageSquare size={16} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { jetsData };
