"use client";

import React, { useState } from "react";
import { useProfile } from "@/app/context/ProfileContext";
import { Appointment, TimeSlot } from "@/app/types/profile";
import {
  Calendar,
  Clock,
  User,
  Mail,
  MessageSquare,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Video,
  Phone,
  MapPin,
} from "lucide-react";

interface AppointmentSchedulerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentScheduler({
  isOpen,
  onClose,
}: AppointmentSchedulerProps) {
  const {
    appointments,
    timeSlots,
    addAppointment,
    updateAppointment,
    cancelAppointment,
  } = useProfile();

  const [activeTab, setActiveTab] = useState<"schedule" | "appointments">(
    "schedule",
  );
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const services = [
    {
      id: "consultation",
      name: "Initial Consultation",
      duration: 30,
      price: 50,
    },
    { id: "therapy", name: "Therapy Session", duration: 60, price: 120 },
    { id: "followup", name: "Follow-up Visit", duration: 30, price: 75 },
    { id: "wellness", name: "Wellness Check", duration: 45, price: 90 },
  ];

  const handleSchedule = () => {
    if (!selectedTime || !selectedService || !clientName || !clientEmail)
      return;

    addAppointment({
      profileId: "1",
      clientName,
      clientEmail,
      date: selectedDate,
      time: selectedTime,
      service: selectedService,
      status: "pending",
      notes,
    });

    setSelectedTime(null);
    setSelectedService("");
    setClientName("");
    setClientEmail("");
    setNotes("");
    setActiveTab("appointments");
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">
              Appointment Scheduler
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
              { id: "schedule", label: "Book Appointment", icon: Calendar },
              { id: "appointments", label: "My Appointments", icon: Clock },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(tab.id as "schedule" | "appointments")
                }
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === tab.id
                    ? "bg-white text-blue-600"
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
          {activeTab === "schedule" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Select Date
                </h3>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <div className="flex justify-between items-center mb-4">
                    <button
                      onClick={() =>
                        setSelectedDate(
                          new Date(
                            selectedDate.getFullYear(),
                            selectedDate.getMonth() - 1,
                          ),
                        )
                      }
                      className="p-2 hover:bg-gray-200 rounded-full transition"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <span className="font-semibold">
                      {selectedDate.toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                    <button
                      onClick={() =>
                        setSelectedDate(
                          new Date(
                            selectedDate.getFullYear(),
                            selectedDate.getMonth() + 1,
                          ),
                        )
                      }
                      className="p-2 hover:bg-gray-200 rounded-full transition"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (day) => (
                        <div
                          key={day}
                          className="text-xs font-medium text-gray-500 py-2"
                        >
                          {day}
                        </div>
                      ),
                    )}
                    {getDaysInMonth(selectedDate).map((date, index) => (
                      <button
                        key={index}
                        disabled={!date || date < new Date()}
                        onClick={() => date && setSelectedDate(date)}
                        className={`p-2 text-sm rounded-lg transition ${
                          !date
                            ? ""
                            : date < new Date()
                              ? "text-gray-300 cursor-not-allowed"
                              : isSameDay(date, selectedDate)
                                ? "bg-blue-500 text-white"
                                : "hover:bg-blue-100 text-gray-700"
                        }`}
                      >
                        {date?.getDate()}
                      </button>
                    ))}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-800">
                  Select Time
                </h3>
                <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      disabled={!slot.available}
                      onClick={() =>
                        slot.available && setSelectedTime(slot.time)
                      }
                      className={`p-2 text-sm rounded-lg transition ${
                        !slot.available
                          ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                          : selectedTime === slot.time
                            ? "bg-blue-500 text-white"
                            : "bg-gray-50 hover:bg-blue-100 text-gray-700"
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Appointment Details
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service
                  </label>
                  <div className="space-y-2">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.name)}
                        className={`w-full p-3 rounded-xl text-left transition ${
                          selectedService === service.name
                            ? "bg-blue-50 border-2 border-blue-500"
                            : "bg-gray-50 border-2 border-transparent hover:border-blue-300"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{service.name}</span>
                          <span className="text-sm text-gray-500">
                            ${service.price}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                          <Clock size={12} />
                          {service.duration} min
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notes (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare
                      size={18}
                      className="absolute left-3 top-3 text-gray-400"
                    />
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any special requests..."
                      rows={3}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 space-y-2">
                  <h4 className="font-medium text-gray-800">
                    Appointment Summary
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={14} />
                    <span>{formatDate(selectedDate)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={14} />
                    <span>{selectedTime || "Select a time"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <User size={14} />
                    <span>{selectedService || "Select a service"}</span>
                  </div>
                </div>

                <button
                  onClick={handleSchedule}
                  disabled={
                    !selectedTime ||
                    !selectedService ||
                    !clientName ||
                    !clientEmail
                  }
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          )}

          {activeTab === "appointments" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Your Appointments
              </h3>

              {appointments.length === 0 ? (
                <div className="text-center py-12">
                  <Calendar size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">No appointments scheduled</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="bg-gray-50 rounded-2xl p-4 border border-gray-200"
                    >
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                appointment.status === "confirmed"
                                  ? "bg-green-100 text-green-700"
                                  : appointment.status === "pending"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : appointment.status === "cancelled"
                                      ? "bg-red-100 text-red-700"
                                      : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {appointment.status.charAt(0).toUpperCase() +
                                appointment.status.slice(1)}
                            </span>
                          </div>
                          <h4 className="font-semibold text-gray-800">
                            {appointment.service}
                          </h4>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              {formatDate(new Date(appointment.date))}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={14} />
                              {appointment.time}
                            </span>
                          </div>
                          <div className="text-sm text-gray-500">
                            <span className="font-medium">
                              {appointment.clientName}
                            </span>
                          </div>
                        </div>

                        {appointment.status === "pending" && (
                          <div className="flex gap-2">
                            <button
                              onClick={() =>
                                updateAppointment(appointment.id, {
                                  status: "confirmed",
                                })
                              }
                              className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                            >
                              <Check size={18} />
                            </button>
                            <button
                              onClick={() => cancelAppointment(appointment.id)}
                              className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                            >
                              <X size={18} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
