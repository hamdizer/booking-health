export interface Profile {
  id: string;
  profilePic: string;
  fullName: string;
  email: string;
  username: string;
  city: string;
  country: string;
  bio: string;
  membershipStatus: "Premium" | "Free";
  reviewsGiven: number;
  commentsGiven: number;
  messages: number;
  notifications: number;
  isActive: boolean;
}

export interface ProfileMetrics {
  profileId: string;
  profileViews: number;
  callClicks: number;
  dmClicks: number;
  timeSpent: number;
  views: number;
  exits: number;
  publicMetrics: {
    profileViews: number;
    clicks: number;
  };
}

export interface Appointment {
  id: string;
  profileId: string;
  clientName: string;
  clientEmail: string;
  date: Date;
  time: string;
  service: string;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  notes?: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}
