"use client";

import React, { useState } from "react";
import { useProfile } from "@/app/context/ProfileContext";
import { Profile } from "@/app/types/profile";
import {
  User,
  Users,
  Edit2,
  Camera,
  Mail,
  MapPin,
  Award,
  MessageSquare,
  Bell,
  Crown,
  CreditCard,
  LogOut,
  Plus,
  Trash2,
  Check,
  X,
  Shield,
  Lock,
} from "lucide-react";

interface ProfileManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileManager({
  isOpen,
  onClose,
}: ProfileManagerProps) {
  const {
    profiles,
    activeProfile,
    switchProfile,
    updateProfile,
    addProfile,
    deleteProfile,
    metrics,
  } = useProfile();

  const [activeTab, setActiveTab] = useState<
    "profiles" | "edit" | "metrics" | "billing"
  >("profiles");
  const [editingProfile, setEditingProfile] = useState<Profile | null>(null);
  const [isAddingProfile, setIsAddingProfile] = useState(false);

  if (!isOpen) return null;

  const handleSaveProfile = (profile: Profile) => {
    updateProfile(profile.id, profile);
    setEditingProfile(null);
    setIsAddingProfile(false);
  };

  const handleAddProfile = () => {
    const newProfile: Omit<Profile, "id"> = {
      profilePic: `https://i.pravatar.cc/150?img=${Date.now()}`,
      fullName: "",
      email: "",
      username: "",
      city: "",
      country: "",
      bio: "",
      membershipStatus: "Free",
      reviewsGiven: 0,
      commentsGiven: 0,
      messages: 0,
      notifications: 0,
      isActive: false,
    };
    addProfile(newProfile);
    setIsAddingProfile(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">
              Profile Management
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/20 transition"
            >
              <X className="text-white" size={24} />
            </button>
          </div>

          <div className="flex gap-4 mt-4">
            {[
              { id: "profiles", label: "Profiles", icon: Users },
              { id: "edit", label: "Edit Profile", icon: Edit2 },
              { id: "metrics", label: "Metrics", icon: Award },
              { id: "billing", label: "Billing", icon: CreditCard },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(
                    tab.id as "profiles" | "edit" | "metrics" | "billing",
                  )
                }
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === tab.id
                    ? "bg-white text-emerald-600"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          {activeTab === "profiles" && (
            <ProfileListTab
              profiles={profiles}
              activeProfile={activeProfile}
              onSwitch={switchProfile}
              onEdit={setEditingProfile}
              onDelete={deleteProfile}
              onAdd={handleAddProfile}
            />
          )}

          {activeTab === "edit" && (
            <EditProfileTab
              profile={editingProfile || activeProfile}
              onSave={handleSaveProfile}
              onCancel={() => setEditingProfile(null)}
            />
          )}

          {activeTab === "metrics" && <MetricsTab metrics={metrics} />}

          {activeTab === "billing" && (
            <BillingTab
              membershipStatus={activeProfile?.membershipStatus || "Free"}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function ProfileListTab({
  profiles,
  activeProfile,
  onSwitch,
  onEdit,
  onDelete,
  onAdd,
}: {
  profiles: Profile[];
  activeProfile: Profile | null;
  onSwitch: (id: string) => void;
  onEdit: (profile: Profile) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
}) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Your Profiles</h3>
        <button
          onClick={onAdd}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition"
        >
          <Plus size={18} />
          Add Profile
        </button>
      </div>

      <div className="grid gap-4">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition ${
              activeProfile?.id === profile.id
                ? "border-emerald-500 bg-emerald-50"
                : "border-gray-200 hover:border-emerald-300"
            }`}
          >
            <div className="relative">
              <img
                src={profile.profilePic}
                alt={profile.fullName}
                className="w-16 h-16 rounded-full object-cover"
              />
              {activeProfile?.id === profile.id && (
                <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1">
                  <Check size={12} className="text-white" />
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-gray-800">
                  {profile.fullName}
                </h4>
                {profile.membershipStatus === "Premium" && (
                  <Crown size={16} className="text-yellow-500" />
                )}
              </div>
              <p className="text-sm text-gray-500">@{profile.username}</p>
              <div className="flex items-center gap-2 mt-1">
                <MapPin size={14} className="text-gray-400" />
                <span className="text-xs text-gray-500">
                  {profile.city}, {profile.country}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {activeProfile?.id !== profile.id && (
                <button
                  onClick={() => onSwitch(profile.id)}
                  className="px-4 py-2 text-sm bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition"
                >
                  Switch
                </button>
              )}
              <button
                onClick={() => onEdit(profile)}
                className="p-2 text-gray-500 hover:text-emerald-500 transition"
              >
                <Edit2 size={18} />
              </button>
              {profiles.length > 1 && (
                <button
                  onClick={() => onDelete(profile.id)}
                  className="p-2 text-gray-500 hover:text-red-500 transition"
                >
                  <Trash2 size={18} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {profiles.length < 3 && (
        <p className="text-center text-sm text-gray-500">
          You can add up to {3 - profiles.length} more profile
          {3 - profiles.length > 1 ? "s" : ""}
        </p>
      )}
    </div>
  );
}

function EditProfileTab({
  profile,
  onSave,
  onCancel,
}: {
  profile: Profile | null;
  onSave: (profile: Profile) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState<Profile | null>(profile);

  if (!profile || !formData) {
    return (
      <div className="text-center py-12">
        <User size={48} className="mx-auto text-gray-300 mb-4" />
        <p className="text-gray-500">Select a profile to edit</p>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800">Edit Profile</h3>

      <div className="flex items-center gap-6">
        <div className="relative">
          <img
            src={formData.profilePic}
            alt={formData.fullName}
            className="w-24 h-24 rounded-full object-cover"
          />
          <label className="absolute bottom-0 right-0 p-2 bg-emerald-500 rounded-full cursor-pointer hover:bg-emerald-600 transition">
            <Camera size={16} className="text-white" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setFormData({
                      ...formData,
                      profilePic: reader.result as string,
                    });
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </label>
        </div>
        <div>
          <p className="font-medium text-gray-800">{formData.fullName}</p>
          <p className="text-sm text-gray-500">
            {formData.membershipStatus} Member
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country
          </label>
          <input
            type="text"
            value={formData.country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            value="********"
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-gray-50"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Bio
        </label>
        <textarea
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
          placeholder="Tell us about yourself..."
        />
      </div>

      <div className="flex justify-end gap-4 pt-4 border-t">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

function MetricsTab({
  metrics,
}: {
  metrics: {
    publicMetrics: { profileViews: number; clicks: number };
    callClicks: number;
    dmClicks: number;
    timeSpent: number;
    exits: number;
  } | null;
}) {
  if (!metrics) {
    return (
      <div className="text-center py-12">
        <Award size={48} className="mx-auto text-gray-300 mb-4" />
        <p className="text-gray-500">No metrics available</p>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800">
        Analytics Dashboard
      </h3>

      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 text-white">
        <h4 className="font-medium mb-4 flex items-center gap-2">
          <Shield size={18} />
          Public Metrics (Visible to Everyone)
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/20 rounded-xl p-4">
            <p className="text-3xl font-bold">
              {metrics.publicMetrics.profileViews.toLocaleString()}
            </p>
            <p className="text-sm text-white/80">Profile Views</p>
          </div>
          <div className="bg-white/20 rounded-xl p-4">
            <p className="text-3xl font-bold">
              {metrics.publicMetrics.clicks.toLocaleString()}
            </p>
            <p className="text-sm text-white/80">Total Clicks</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6">
        <h4 className="font-medium text-gray-800 mb-4 flex items-center gap-2">
          <Lock size={18} />
          Private Metrics (Account Holders & Blossend Only)
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-2xl font-bold text-emerald-600">
              {metrics.callClicks}
            </p>
            <p className="text-sm text-gray-500">Call Clicks</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-2xl font-bold text-blue-600">
              {metrics.dmClicks}
            </p>
            <p className="text-sm text-gray-500">DM Clicks</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-2xl font-bold text-purple-600">
              {formatTime(metrics.timeSpent)}
            </p>
            <p className="text-sm text-gray-500">Time Spent</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <p className="text-2xl font-bold text-red-500">{metrics.exits}</p>
            <p className="text-sm text-gray-500">Exits</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl">
          <div className="p-2 bg-emerald-100 rounded-lg">
            <User size={20} className="text-emerald-600" />
          </div>
          <div>
            <p className="text-lg font-bold text-gray-800">
              {metrics.publicMetrics.profileViews.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">Total Views</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
          <div className="p-2 bg-blue-100 rounded-lg">
            <MessageSquare size={20} className="text-blue-600" />
          </div>
          <div>
            <p className="text-lg font-bold text-gray.views-800">
              {metrics.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">Page Views</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Bell size={20} className="text-purple-600" />
          </div>
          <div>
            <p className="text-lg font-bold text-gray-800">
              {metrics.callClicks + metrics.dmClicks}
            </p>
            <p className="text-xs text-gray-500">Engagements</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-xl">
          <div className="p-2 bg-yellow-100 rounded-lg">
            <Award size={20} className="text-yellow-600" />
          </div>
          <div>
            <p className="text-lg font-bold text-gray-800">
              {Math.round(
                ((metrics.publicMetrics.profileViews - metrics.exits) /
                  metrics.publicMetrics.profileViews) *
                  100,
              )}
              %
            </p>
            <p className="text-xs text-gray-500">Retention</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BillingTab({
  membershipStatus,
}: {
  membershipStatus: "Premium" | "Free";
}) {
  const [showCardForm, setShowCardForm] = useState(false);

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800">
        Billing & Subscription
      </h3>

      <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-6 text-white">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm opacity-80">Current Plan</p>
            <p className="text-3xl font-bold flex items-center gap-2">
              <Crown size={28} />
              {membershipStatus}
            </p>
          </div>
          {membershipStatus === "Free" && (
            <button className="px-6 py-2 bg-white text-amber-600 rounded-full font-semibold hover:bg-gray-100 transition">
              Upgrade to Premium
            </button>
          )}
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6">
        <h4 className="font-medium text-gray-800 mb-4">Payment Method</h4>

        {showCardForm ? (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="text"
                placeholder="CVC"
                className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setShowCardForm(false)}
                className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition">
                Save Card
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <CreditCard size={20} className="text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-800">•••• •••• •••• 4242</p>
                <p className="text-sm text-gray-500">Expires 12/25</p>
              </div>
            </div>
            <button
              onClick={() => setShowCardForm(true)}
              className="text-emerald-600 hover:text-emerald-700"
            >
              Update
            </button>
          </div>
        )}
      </div>

      <div className="border-t pt-6">
        <button className="flex items-center gap-2 px-6 py-2 border border-red-300 text-red-600 rounded-full hover:bg-red-50 transition">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}
