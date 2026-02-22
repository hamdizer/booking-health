"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Star,
  Calendar,
  MessageSquare,
  ArrowLeft,
} from "lucide-react";

interface WellnessProfilePageProps {
  params: {
    id: string;
  };
}

interface Review {
  id: number;
  clientName: string;
  clientInitials: string;
  rating: number;
  comment: string;
  date: string;
}

interface Professional {
  id: string;
  name: string;
  title: string;
  location: string;
  rating: number;
  phone: string;
  email: string;
  image: string;
  galleryImage: string;
  about: string;
  specialties: string[];
  reviews: Review[];
}

const professionalsData: Professional[] = [
  {
    id: "stephen-kwame-ansong",
    name: "Stephen Kwame Ansong",
    title: "Fitness Coach",
    location: "Austin, TX",
    rating: 5.0,
    phone: "512-555-0101",
    email: "stephen@fitnesascoach.com",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400",
    galleryImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    about:
      "As a dedicated fitness coach, I specialize in helping clients achieve transformation through personalized training programs and nutrition guidance.",
    specialties: [
      "Personal Training",
      "Fitness Coaching",
      "Nutrition Planning",
    ],
    reviews: [
      {
        id: 1,
        clientName: "Sarah M.",
        clientInitials: "SM",
        rating: 5,
        comment:
          "Stephen helped me lose 20 pounds in 3 months! His personalized approach made all the difference.",
        date: "2 weeks ago",
      },
      {
        id: 2,
        clientName: "Michael R.",
        clientInitials: "MR",
        rating: 5,
        comment:
          "Best fitness coach I've ever had. Very knowledgeable and motivating!",
        date: "1 month ago",
      },
    ],
  },
  {
    id: "kokoro-wellness",
    name: "Kokoro Wellness",
    title: "Wellness Center",
    location: "Austin, TX",
    rating: 5.0,
    phone: "512-555-0100",
    email: "info@kokorowellness.com",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400",
    galleryImage:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
    about:
      "State of the art fitness and wellness center offering comprehensive health services with cutting-edge equipment and expert staff.",
    specialties: [
      "Nutrition Counseling",
      "Personal Training",
      "Wellness Coaching",
    ],
    reviews: [
      {
        id: 1,
        clientName: "Jennifer L.",
        clientInitials: "JL",
        rating: 5,
        comment:
          "Amazing facility with top-notch equipment. The staff is incredibly knowledgeable and friendly.",
        date: "3 days ago",
      },
      {
        id: 2,
        clientName: "David K.",
        clientInitials: "DK",
        rating: 5,
        comment:
          "I've been to many wellness centers, but Kokoro is by far the best. Highly recommend!",
        date: "1 week ago",
      },
      {
        id: 3,
        clientName: "Amanda P.",
        clientInitials: "AP",
        rating: 5,
        comment:
          "Great atmosphere and wonderful trainers. I've seen amazing results!",
        date: "2 weeks ago",
      },
    ],
  },
  {
    id: "kris-meadows",
    name: "Kris Meadows",
    title: "Performance Coach",
    location: "Austin, TX",
    rating: 5.0,
    phone: "512-555-0102",
    email: "kris@performancoach.com",
    image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400",
    galleryImage:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
    about:
      "I empower athletes to achieve peak performance, helping them build strength, endurance, and mental resilience.",
    specialties: [
      "Sports Performance",
      "Athletic Training",
      "Strength Conditioning",
    ],
    reviews: [
      {
        id: 1,
        clientName: "Tom H.",
        clientInitials: "TH",
        rating: 5,
        comment:
          "Kris is extremely knowledgeable and professional. Highly recommend for athletes!",
        date: "5 days ago",
      },
    ],
  },
  {
    id: "naqash-khan",
    name: "Naqash Khan",
    title: "Health Specialist",
    location: "Austin, TX",
    rating: 5.0,
    phone: "512-555-0103",
    email: "naqash@healthspecialist.com",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400",
    galleryImage:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=600&h=400&fit=crop",
    about:
      "I am dedicated to helping individuals achieve their optimal physical health through personalized wellness programs.",
    specialties: ["Health Coaching", "Preventive Care", "Lifestyle Medicine"],
    reviews: [
      {
        id: 1,
        clientName: "Lisa M.",
        clientInitials: "LM",
        rating: 5,
        comment:
          "Naqash changed my life! His holistic approach to health is exactly what I needed.",
        date: "3 weeks ago",
      },
    ],
  },
  {
    id: "walking-tall",
    name: "Walking Tall",
    title: "Holistic Practitioner",
    location: "Asheville, NC",
    rating: 5.0,
    phone: "828-555-0104",
    email: "info@walkingtall.com",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    galleryImage:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    about:
      "Indigenous holistic health practitioner dedicated to fostering spiritual counseling and overall wellness through traditional healing methods.",
    specialties: [
      "Spiritual Counseling",
      "Holistic Healing",
      "Wellness Coaching",
    ],
    reviews: [
      {
        id: 1,
        clientName: "Rebecca S.",
        clientInitials: "RS",
        rating: 5,
        comment:
          "Incredible spiritual healing experience. I feel more balanced and at peace than ever before.",
        date: "1 week ago",
      },
    ],
  },
  {
    id: "luxe-skin-beauty-bar",
    name: "Luxe Skin & Beauty Bar",
    title: "Beauty & Aesthetics",
    location: "Miami, FL",
    rating: 5.0,
    phone: "305-555-0200",
    email: "contact@luxeskinbeauty.com",
    image: "https://images.unsplash.com/photo-1560066984-138deb2a3a2d?w=400",
    galleryImage:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
    about:
      "Premium skincare and aesthetic treatments for your beauty needs. Experience luxury beauty services.",
    specialties: ["Skincare", "Aesthetic Treatments", "Facials"],
    reviews: [
      {
        id: 1,
        clientName: "Emily R.",
        clientInitials: "ER",
        rating: 5,
        comment:
          "Best spa experience ever! My skin has never looked better. The staff is amazing!",
        date: "4 days ago",
      },
      {
        id: 2,
        clientName: "Jessica T.",
        clientInitials: "JT",
        rating: 5,
        comment:
          "Love this place! Professional, clean, and the results are incredible.",
        date: "1 week ago",
      },
    ],
  },
  {
    id: "alyssa-cappelletti",
    name: "Alyssa Cappelletti",
    title: "Nutrition Specialist",
    location: "Austin, TX",
    rating: 5.0,
    phone: "512-555-0300",
    email: "alyssa@email.com",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    galleryImage:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    about:
      "Experienced nutrition specialist helping clients achieve optimal health through personalized diet plans.",
    specialties: ["Nutrition Counseling", "Diet Planning", "Wellness Coaching"],
    reviews: [
      {
        id: 1,
        clientName: "Karen W.",
        clientInitials: "KW",
        rating: 5,
        comment:
          "Alyssa helped me create a meal plan that fits my busy lifestyle. Great results!",
        date: "2 weeks ago",
      },
      {
        id: 2,
        clientName: "Robert B.",
        clientInitials: "RB",
        rating: 5,
        comment:
          "Very knowledgeable and patient. She answered all my questions about nutrition.",
        date: "1 month ago",
      },
    ],
  },
  {
    id: "hand-to-shoulder-austin",
    name: "Hand To Shoulder Austin",
    title: "Medical Specialist",
    location: "Austin, TX",
    rating: 4.8,
    phone: "512-555-0400",
    email: "info@handtoshoulderaustin.com",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    galleryImage:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
    about:
      "Austin's premier hand, wrist, elbow center with expert medical care and rehabilitation services.",
    specialties: ["Hand Surgery", "Physical Therapy", "Orthopedics"],
    reviews: [
      {
        id: 1,
        clientName: "Patricia N.",
        clientInitials: "PN",
        rating: 5,
        comment:
          "After my injury, they got me back to full mobility. Excellent care!",
        date: "1 week ago",
      },
      {
        id: 2,
        clientName: "James D.",
        clientInitials: "JD",
        rating: 5,
        comment:
          "Dr. and staff are amazing. They explain everything clearly and truly care about patients.",
        date: "2 weeks ago",
      },
      {
        id: 3,
        clientName: "Maria G.",
        clientInitials: "MG",
        rating: 4,
        comment:
          "Great physical therapy program. Would recommend to anyone needing hand/wrist care.",
        date: "3 weeks ago",
      },
    ],
  },
  {
    id: "acapulco-luxury-apartment",
    name: "Acapulco Luxury Apartment",
    title: "Wellness Retreat",
    location: "Ciudad de México, CDMX",
    rating: 5.0,
    phone: "52-555-0105",
    email: "info@acapulcoluxury.com",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
    galleryImage:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
    about:
      "Apartment on the beach in Acapulco. Luxury wellness retreat offering relaxation and rejuvenation.",
    specialties: ["Wellness Retreat", "Beach Resort", "Relaxation Therapy"],
    reviews: [
      {
        id: 1,
        clientName: "Carlos R.",
        clientInitials: "CR",
        rating: 5,
        comment:
          "Absolutely stunning views and impeccable service. The perfect getaway!",
        date: "5 days ago",
      },
    ],
  },
  {
    id: "kyle-b",
    name: "Kyle B",
    title: "Business Advisor",
    location: "New York, NY",
    rating: 5.0,
    phone: "212-555-0106",
    email: "kyle@businessadvisor.com",
    image: "https://images.unsplash.com/photo-1603415526960-f8f0d3d6d0d5?w=400",
    galleryImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    about:
      "Business and leadership advisor; serial entrepreneur with successes.",
    specialties: [
      "Business Consulting",
      "Leadership Development",
      "Strategic Planning",
    ],
    reviews: [
      {
        id: 1,
        clientName: "Daniel L.",
        clientInitials: "DL",
        rating: 5,
        comment:
          "Kyle's insights transformed my business. Highly recommend his consulting services!",
        date: "2 weeks ago",
      },
    ],
  },
];

function ContactCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl shadow-sm px-4 py-3">
      <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
        {icon}
      </div>

      <div className="leading-tight">
        <div className="text-xs text-gray-400">{label}</div>
        <div className="text-sm font-medium text-gray-800">{value}</div>
      </div>
    </div>
  );
}

function SidebarCard({
  title,
  button,
  icon,
}: {
  title: string;
  button: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
      <div className="text-sm font-semibold text-gray-800 mb-3">{title}</div>

      <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium py-2.5 rounded-lg hover:opacity-90 transition">
        {icon}
        {button}
      </button>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold">
            {review.clientInitials}
          </div>

          <div>
            <div className="text-sm font-medium text-gray-800">
              {review.clientName}
            </div>
            <div className="text-xs text-gray-400">{review.date}</div>
          </div>
        </div>

        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < review.rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
        </div>
      </div>

      <p className="text-xs text-gray-500 leading-relaxed">{review.comment}</p>
    </div>
  );
}

export default function WellnessProfilePage({
  params,
}: WellnessProfilePageProps) {
  const professional =
    professionalsData.find((p) => p.id === params.id) || professionalsData[0];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gradient-to-r from-teal-500 via-blue-500 to-emerald-500 text-white pb-16">
        <div className="max-w-5xl mx-auto px-6 pt-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs opacity-90 hover:opacity-100 mb-6"
          >
            <ArrowLeft size={14} /> Back
          </Link>

          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white/30">
              <Image
                src={professional.image}
                alt={professional.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div>
              <div className="text-lg font-semibold">{professional.name}</div>

              <div className="flex items-center gap-3 text-xs opacity-90 mt-1">
                <span>{professional.title}</span>

                <div className="flex items-center gap-1">
                  <MapPin size={12} /> {professional.location}
                </div>

                <div className="flex items-center gap-1">
                  <Star size={12} className="fill-yellow-300 text-yellow-300" />
                  {professional.rating}
                </div>
              </div>

              <div className="mt-2 inline-block bg-white/20 text-xs px-3 py-1 rounded-full">
                Available
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-10 space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          <ContactCard
            icon={<Phone size={16} />}
            label="Phone"
            value={professional.phone}
          />

          <ContactCard
            icon={<Mail size={16} />}
            label="Email"
            value={professional.email}
          />

          <ContactCard
            icon={<MapPin size={16} />}
            label="Location"
            value={professional.location}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
              <div className="font-semibold mb-2">About</div>

              <p className="text-sm text-gray-600 leading-relaxed">
                {professional.about}
              </p>

              <div className="mt-4">
                <div className="text-sm font-semibold mb-2">
                  Specialties & Services
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  {professional.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-xl overflow-hidden border h-[200px] relative">
                <Image
                  src={professional.galleryImage}
                  alt={`${professional.name} gallery`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="font-semibold">Great Experiences</div>

                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-emerald-600">
                      {professional.rating}
                    </span>

                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < Math.floor(professional.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">
                      ({professional.reviews.length} reviews)
                    </span>
                  </div>
                </div>

                <button className="text-xs bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2 rounded-lg">
                  Write a Review
                </button>
              </div>

              <div className="space-y-4">
                {professional.reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <SidebarCard
              title="Book an Appointment"
              button="Schedule Now"
              icon={<Calendar size={16} />}
            />

            <SidebarCard
              title="Want to chat?"
              button="Send Message"
              icon={<MessageSquare size={16} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
