"use client";
import {
  X,
  Star,
  MapPin,
  Phone,
  Mail,
  Calendar,
  ShieldCheck,
} from "lucide-react";

interface ProfileModalProps {
  profile: {
    name: string;
    description: string;
    rating: number;
    location: string;
    category: string;
  };
  onClose: () => void;
}

export default function ProfileModal({ profile, onClose }: ProfileModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-6 rounded-t-3xl">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-teal-600 text-2xl font-bold">
                {profile.name.charAt(0)}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {profile.name}
                </h2>
                <p className="text-teal-100 text-sm">{profile.category}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold text-yellow-700">
                {profile.rating}/5.0
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700">{profile.location}</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">About</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {profile.description}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-emerald-50 px-4 py-3 rounded-xl">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-700 text-sm font-medium">
              Verified Professional
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
              <Phone className="w-4 h-4" />
              Call Now
            </button>
            <button className="flex items-center justify-center gap-2 bg-gray-100 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
              <Mail className="w-4 h-4" />
              Message
            </button>
          </div>

          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5" />
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
