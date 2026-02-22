"use client";
import React from "react";
import {
  X,
  Star,
  MapPin,
  Phone,
  Mail,
  Calendar,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

interface ProfileProps {
  isOpen: boolean;
  onClose: () => void;
  profile: {
    name: string;
    description: string;
    rating: number;
    location: string;
    category: string;
  } | null;
}

export default function Profile({ isOpen, onClose, profile }: ProfileProps) {
  if (!isOpen || !profile) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition z-10"
        >
          <X size={20} className="text-gray-600" />
        </button>

        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 h-32 rounded-t-3xl" />

        <div className="px-6 pb-6 -mt-16">
          <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4">
            <span className="text-4xl font-bold text-emerald-600">
              {profile.name.charAt(0)}
            </span>
          </div>

          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
            <p className="text-sm text-emerald-600 font-medium">
              {profile.category}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Star size={18} className="text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">{profile.rating.toFixed(1)}</span>
              <span className="text-gray-500 text-sm">(128 reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={18} />
              <span>{profile.location}</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">About</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {profile.description}
            </p>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck size={20} className="text-emerald-500" />
            <span className="text-sm text-emerald-600 font-medium">
              Verified Professional
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-xl font-semibold transition">
              <Calendar size={18} />
              Book Now
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold transition">
              <MessageCircle size={18} />
              Message
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">
              Contact Information
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-gray-600">
                <Phone size={16} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail size={16} />
                <span className="text-sm">contact@professional.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
