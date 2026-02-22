"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "./layout/Container";
import WeeklyForumCard from "./components/Card/Card";
import InstantWinGame from "./components/Spinner/Spinner";
import AdvisorSidebar from "./components/Left/Left";
import LuxuryAirTravel from "./components/Jets/Jets";
import FeaturedSection from "./components/Featured/Featured";
import SeekerProCard from "./components/SeekerPro/SeekerPro";
import TeamCareSection from "./components/TeamCare/TeamCare";
import BeautySection from "./components/Beauty/BeautySection";
import FitnessSection from "./components/Fitness/Fitness";
import MedicalSection from "./components/Medical/Medical";
import PhysicalHealthSection from "./components/Rehabitation/Rehabitation";
import ProsCarouselSection from "./components/ProsCarousel/ProsCarousel";
import Wellness from "./components/Wellness/Wellness";
import WellnessCategoriesSection from "./components/WellnessCategories/WellnessCategories";
import CommunityForum from "./components/CommunityForum/CommunityForum";
import NewToBlossend from "./components/ProsCarousel/ProsCarousel";
import EliteProsCarousel from "./components/ElitesProps/ElitesProps";

interface WinnerItem {
  name: string;
  description: string;
  rating: number;
  location: string;
  category: string;
}

export default function Home() {
  const router = useRouter();
  const [winner, setWinner] = useState<WinnerItem | null>(null);

  const handleSpinWin = (item: WinnerItem) => {
    setWinner(item);
  };

  const closeWinnerModal = () => {
    setWinner(null);
  };

  return (
    <Container>
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-6">
          <div className="hidden lg:block">
            <AdvisorSidebar />
          </div>

          <div className="space-y-3">
            <WeeklyForumCard />
            <CommunityForum />
            <SeekerProCard />
          </div>

          <div className="hidden lg:block">
            <InstantWinGame />
          </div>
        </div>

        <div>
          <LuxuryAirTravel />
        </div>

        <div>
          <EliteProsCarousel />
        </div>

        <div>
          <FeaturedSection />
        </div>

        <div>
          <TeamCareSection />
        </div>

        <div>
          <BeautySection />
        </div>

        <div>
          <PhysicalHealthSection />
        </div>

        <div>
          <FitnessSection />
        </div>

        <div>
          <MedicalSection />
        </div>

        <NewToBlossend />

        <div>
          <Wellness />
        </div>

        <div>
          <WellnessCategoriesSection />
        </div>
      </div>

      {winner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeWinnerModal}
          />
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center animate-scale-in">
            <button
              onClick={closeWinnerModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Congratulations!
            </h2>
            <p className="text-gray-600 mb-4">
              You won:{" "}
              <span className="font-semibold text-emerald-600">
                {winner.name}
              </span>
            </p>
            <p className="text-sm text-gray-500 mb-6">{winner.description}</p>

            <button
              onClick={closeWinnerModal}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Claim Your Prize!
            </button>
          </div>
        </div>
      )}
    </Container>
  );
}
