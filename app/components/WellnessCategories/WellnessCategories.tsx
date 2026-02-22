"use client";
import React from "react";
import {
  Heart,
  Activity,
  Dumbbell,
  Scissors,
  Brain,
  Building2,
} from "lucide-react";

interface WellnessCategoriesProps {
  onCardClick?: (item: {
    name: string;
    description: string;
    rating: number;
    location: string;
    category: string;
  }) => void;
}

interface CategoryCardProps {
  title: string;
  description: string;
  count: string;
  icon: React.ReactNode;
  iconBg: string;
  onCardClick?: (item: {
    name: string;
    description: string;
    rating: number;
    location: string;
    category: string;
  }) => void;
}

function CategoryCard({
  title,
  description,
  count,
  icon,
  iconBg,
  onCardClick,
}: CategoryCardProps) {
  const handleClick = () => {
    if (onCardClick) {
      onCardClick({
        name: title,
        description,
        rating: 0,
        location: "All Locations",
        category: title,
      });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-4 lg:p-5 flex flex-col justify-between min-h-[120px] lg:min-h-[140px] cursor-pointer"
    >
      <div>
        <div
          className={`w-8 lg:w-10 h-8 lg:h-10 rounded-lg flex items-center justify-center text-white mb-2 lg:mb-3 ${iconBg}`}
        >
          {icon}
        </div>

        <h3 className="font-semibold text-gray-900 text-sm mb-1">{title}</h3>

        <p className="text-xs text-gray-500 mb-3 lg:mb-4 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="text-xs text-gray-400 border-t pt-2 lg:pt-3">{count}</div>
    </div>
  );
}

export default function WellnessCategoriesSection({
  onCardClick,
}: WellnessCategoriesProps) {
  const categories = [
    {
      title: "Holistic Wellness",
      description: "Mind, body, and lifestyle wellness professionals",
      count: "120+ Professionals",
      icon: <Activity size={16} />,
      iconBg: "bg-emerald-500",
    },
    {
      title: "Physical Health",
      description: "Medical and physical care specialists",
      count: "300+ Professionals",
      icon: <Brain size={16} />,
      iconBg: "bg-blue-500",
    },
    {
      title: "Fitness",
      description: "Fitness, training, and movement experts",
      count: "180+ Professionals",
      icon: <Heart size={16} />,
      iconBg: "bg-orange-500",
    },
    {
      title: "Salon & Beauty",
      description: "Beauty, grooming, and self‑care services",
      count: "95+ Professionals",
      icon: <Scissors size={16} />,
      iconBg: "bg-pink-500",
    },
    {
      title: "Coaching",
      description: "Life, career, and wellness coaching",
      count: "70+ Professionals",
      icon: <Dumbbell size={16} />,
      iconBg: "bg-purple-500",
    },
    {
      title: "Organizations",
      description: "Partner clinics and organizations",
      count: "60+ Professionals",
      icon: <Building2 size={16} />,
      iconBg: "bg-gray-500",
    },
  ];

  return (
    <section className="w-full py-12 lg:py-20 bg-gradient-to-b from-gray-50 to-gray-100 px-4 lg:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
          Wellness Categories
        </div>

        <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-3">
          Find a <span className="text-emerald-500">Wellness Pro</span> by
          category
        </h2>

        <p className="text-sm text-gray-600 max-w-xl mx-auto mb-8 lg:mb-12">
          Browse verified professionals across our core wellness categories and
          connect with the right expert for your needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 text-left">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} onCardClick={onCardClick} />
          ))}
        </div>
      </div>
    </section>
  );
}
