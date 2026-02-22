"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  Search,
  Bookmark,
  Bell,
  ChevronDown,
  Sparkles,
  X,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import MobileProfileMenu from "../components/MobileProfileMenu/MobileProfileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const profileButtonRef = useRef<HTMLButtonElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node) &&
        profileButtonRef.current &&
        !profileButtonRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    }

    if (isProfileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 py-3">
      <div className=" max-w-[1400px] bg-white border border-gray-200 rounded-full shadow-lg px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="flex items-center    px-4 py-2  hover:shadow transition">
              <img
                src="https://www.openmypro.com/_next/image?url=%2Fassets%2Fimages%2FOMDLogo.png&w=128&q=75"
                alt="OpenMyPro"
                className="h-7 object-contain"
              />
            </div>
          </Link>
          <div className="hidden md:flex items-center border border-gray-200 rounded-full px-2 py-1 shadow-sm min-w-[600px]">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Menu size={20} className="text-blue-600" />
            </button>

            <button className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-100">
              <span className="text-gray-700 font-medium text-sm">
                Wellness Pro
              </span>
              <ChevronDown size={16} className="text-gray-500" />
            </button>

            <div className="h-6 w-px bg-gray-200 mx-1" />

            <input
              placeholder="Search for Wellness Professionals..."
              className="flex-1 outline-none text-sm px-2 py-2"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />

            <button
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition
                ${
                  isSearchFocused
                    ? "bg-teal-500 border-teal-500"
                    : "border-teal-500 hover:bg-teal-50"
                }`}
            >
              <Search
                size={16}
                className={`${
                  isSearchFocused ? "text-white" : "text-teal-600"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/upgrade"
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-yellow-300 to-yellow-400 text-yellow-900 font-semibold text-sm px-5 py-2 rounded-full shadow-md hover:shadow-lg transition"
          >
            <Sparkles size={16} />
            TRY PRO
          </Link>

          <div className="hidden md:block h-6 w-px bg-gray-300" />

          <Link
            href="/saved"
            className="hidden md:block p-2 hover:bg-gray-100 rounded-full"
          >
            <Bookmark size={20} className="text-gray-600" />
          </Link>

          <Link
            href="/messages"
            className="relative hidden md:block p-2 hover:bg-gray-100 rounded-full"
          >
            <MessageSquare size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </Link>

          <button className="relative hidden md:block p-2 hover:bg-gray-100 rounded-full">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          <div className="relative" ref={profileMenuRef}>
            <button
              ref={profileButtonRef}
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center gap-2 border border-teal-500 rounded-full px-2 py-1 hover:bg-teal-50 transition"
            >
              <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-semibold text-sm">
                H
              </div>

              <ChevronDown
                size={16}
                className="text-gray-600 hidden md:block"
              />
            </button>

            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-72">
                <MobileProfileMenu
                  isOpen={isProfileMenuOpen}
                  onClose={() => setIsProfileMenuOpen(false)}
                  variant="dropdown"
                />
              </div>
            )}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className="md:hidden mt-3 w-full max-w-[1400px] bg-white border border-gray-200 rounded-full px-4 py-2 shadow">
        <div className="flex items-center">
          <Search size={18} className="text-gray-400" />
          <input
            placeholder="Search..."
            className="flex-1 px-3 outline-none text-sm"
          />
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 top-20 bg-white z-40 md:hidden">
          <div className="p-4 space-y-4">
            <Link
              href="/upgrade"
              className="block text-center px-4 py-3 rounded-full font-bold text-xs bg-gradient-to-r from-yellow-300 to-yellow-400"
              onClick={() => setIsMenuOpen(false)}
            >
              TRY PRO
            </Link>

            <Link
              href="/saved"
              onClick={() => setIsMenuOpen(false)}
              className="block p-3 hover:bg-gray-50 rounded-xl"
            >
              Saved
            </Link>

            <Link
              href="/messages"
              onClick={() => setIsMenuOpen(false)}
              className="block p-3 hover:bg-gray-50 rounded-xl"
            >
              Messages
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
