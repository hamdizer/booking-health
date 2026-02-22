"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import {
  Profile,
  ProfileMetrics,
  Appointment,
  TimeSlot,
} from "@/app/types/profile";

const sampleProfiles: Profile[] = [
  {
    id: "1",
    profilePic: "https://i.pravatar.cc/150?img=1",
    fullName: "John Doe",
    email: "john.doe@example.com",
    username: "johndoe",
    city: "Austin",
    country: "USA",
    bio: "Wellness professional specializing in holistic health.",
    membershipStatus: "Premium",
    reviewsGiven: 42,
    commentsGiven: 156,
    messages: 23,
    notifications: 5,
    isActive: true,
  },
  {
    id: "2",
    profilePic: "https://i.pravatar.cc/150?img=2",
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    username: "janesmith",
    city: "New York",
    country: "USA",
    bio: "Fitness coach and nutrition expert.",
    membershipStatus: "Free",
    reviewsGiven: 18,
    commentsGiven: 67,
    messages: 8,
    notifications: 2,
    isActive: false,
  },
  {
    id: "3",
    profilePic: "https://i.pravatar.cc/150?img=3",
    fullName: "Mike Johnson",
    email: "mike.j@example.com",
    username: "mikej",
    city: "Los Angeles",
    country: "USA",
    bio: "Mental health therapist and life coach.",
    membershipStatus: "Premium",
    reviewsGiven: 89,
    commentsGiven: 234,
    messages: 45,
    notifications: 12,
    isActive: false,
  },
];

const sampleMetrics: ProfileMetrics = {
  profileId: "1",
  profileViews: 1247,
  callClicks: 89,
  dmClicks: 156,
  timeSpent: 4523,
  views: 3891,
  exits: 234,
  publicMetrics: {
    profileViews: 1247,
    clicks: 245,
  },
};

const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  for (let hour = 9; hour <= 17; hour++) {
    slots.push({ time: `${hour}:00`, available: Math.random() > 0.3 });
    slots.push({ time: `${hour}:30`, available: Math.random() > 0.3 });
  }
  return slots;
};

const sampleAppointments: Appointment[] = [
  {
    id: "1",
    profileId: "1",
    clientName: "Alice Brown",
    clientEmail: "alice@example.com",
    date: new Date(),
    time: "10:00",
    service: "Consultation",
    status: "confirmed",
  },
  {
    id: "2",
    profileId: "1",
    clientName: "Bob Wilson",
    clientEmail: "bob@example.com",
    date: new Date(Date.now() + 86400000),
    time: "14:30",
    service: "Therapy Session",
    status: "pending",
  },
];

interface ProfileContextType {
  profiles: Profile[];
  activeProfile: Profile | null;
  metrics: ProfileMetrics | null;
  appointments: Appointment[];
  timeSlots: TimeSlot[];
  switchProfile: (id: string) => void;
  updateProfile: (id: string, updates: Partial<Profile>) => void;
  addProfile: (profile: Omit<Profile, "id">) => void;
  deleteProfile: (id: string) => void;
  addAppointment: (appointment: Omit<Appointment, "id">) => void;
  updateAppointment: (id: string, updates: Partial<Appointment>) => void;
  cancelAppointment: (id: string) => void;
  trackEngagement: (type: "call" | "dm" | "view" | "exit") => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profiles, setProfiles] = useState<Profile[]>(sampleProfiles);
  const [activeProfile, setActiveProfile] = useState<Profile | null>(
    sampleProfiles[0],
  );
  const [metrics, setMetrics] = useState<ProfileMetrics | null>(sampleMetrics);
  const [appointments, setAppointments] =
    useState<Appointment[]>(sampleAppointments);
  const [timeSlots] = useState<TimeSlot[]>(generateTimeSlots());

  const switchProfile = useCallback(
    (id: string) => {
      const profile = profiles.find((p) => p.id === id);
      if (profile) {
        setActiveProfile(profile);
        // Update metrics for the switched profile
        if (metrics) {
          setMetrics({ ...metrics, profileId: id });
        }
      }
    },
    [profiles, metrics],
  );

  const updateProfile = useCallback(
    (id: string, updates: Partial<Profile>) => {
      setProfiles((prev) =>
        prev.map((p) => (p.id === id ? { ...p, ...updates } : p)),
      );
      if (activeProfile?.id === id) {
        setActiveProfile((prev) => (prev ? { ...prev, ...updates } : null));
      }
    },
    [activeProfile],
  );

  const addProfile = useCallback((profile: Omit<Profile, "id">) => {
    const newProfile: Profile = {
      ...profile,
      id: Date.now().toString(),
    };
    setProfiles((prev) => [...prev, newProfile]);
  }, []);

  const deleteProfile = useCallback(
    (id: string) => {
      setProfiles((prev) => prev.filter((p) => p.id !== id));
      if (activeProfile?.id === id) {
        setActiveProfile(profiles.find((p) => p.id !== id) || null);
      }
    },
    [activeProfile, profiles],
  );

  const addAppointment = useCallback((appointment: Omit<Appointment, "id">) => {
    const newAppointment: Appointment = {
      ...appointment,
      id: Date.now().toString(),
    };
    setAppointments((prev) => [...prev, newAppointment]);
  }, []);

  const updateAppointment = useCallback(
    (id: string, updates: Partial<Appointment>) => {
      setAppointments((prev) =>
        prev.map((a) => (a.id === id ? { ...a, ...updates } : a)),
      );
    },
    [],
  );

  const cancelAppointment = useCallback((id: string) => {
    setAppointments((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, status: "cancelled" as const } : a,
      ),
    );
  }, []);

  const trackEngagement = useCallback(
    (type: "call" | "dm" | "view" | "exit") => {
      if (!metrics) return;

      setMetrics((prev) => {
        if (!prev) return prev;

        const newMetrics = { ...prev };
        switch (type) {
          case "call":
            newMetrics.callClicks += 1;
            newMetrics.publicMetrics.clicks += 1;
            break;
          case "dm":
            newMetrics.dmClicks += 1;
            newMetrics.publicMetrics.clicks += 1;
            break;
          case "view":
            newMetrics.profileViews += 1;
            newMetrics.views += 1;
            newMetrics.publicMetrics.profileViews += 1;
            break;
          case "exit":
            newMetrics.exits += 1;
            break;
        }
        return newMetrics;
      });
    },
    [metrics],
  );

  return (
    <ProfileContext.Provider
      value={{
        profiles,
        activeProfile,
        metrics,
        appointments,
        timeSlots,
        switchProfile,
        updateProfile,
        addProfile,
        deleteProfile,
        addAppointment,
        updateAppointment,
        cancelAppointment,
        trackEngagement,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}
