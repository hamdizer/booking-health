"use client";

import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden from-teal-50 to-white pt-24 pb-16 mt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-emerald-300/20 rounded-full blur-[90px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-300/20 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative  mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-teal-400 bg-gradient-to-r from-teal-100 via-teal-50 to-white shadow-sm">
              <img
                src="/blossend.png"
                alt="OpenMyPro"
                className="h-7 object-contain"
              />
            </div>
            <p className="mt-6 text-gray-700 leading-relaxed text-sm max-w-xl text-justify">
              <span className="text-teal-700 font-semibold underline hover:text-teal-800 cursor-pointer">
                About
              </span>{" "}
              : OpenMyPro by Blossend is a teleservices platform redefining how
              professionals and consumers connect. With instant booking,
              AI-powered matching, & seamless 24/7 availability, we make it
              possible for anyone to find and book the right expert in under 3
              clicks, anywhere, anytime.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/company/blossend/"
                className="group p-2 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all hover:text-[#0077b6]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/blossend"
                className="group p-2 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all hover:text-[#1DA1F2]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com/blossend"
                className="group p-2 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all hover:text-[#E4405F]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/blossend"
                className="group p-2 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all hover:text-[#1877F2]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-gray-900 font-semibold">Quick Links</h4>
            <ul className="mt-4 text-sm text-gray-700 space-y-2">
              <li>
                <Link href="/" className="hover:text-teal-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/professionals" className="hover:text-teal-600">
                  Professionals
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-600">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-gray-900 font-semibold">Legal</h4>
            <ul className="mt-4 text-sm text-gray-700 space-y-2">
              <li>
                <Link href="/about" className="hover:text-teal-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-teal-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-teal-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-teal-600">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-gray-900 font-semibold">Contact</h4>
            <ul className="mt-4 text-sm text-gray-700 space-y-2">
              <li>Blossend</li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-teal-600" />
                Austin, TX
              </li>
              <li>
                <a
                  href="mailto:info@blossend.com"
                  className="flex items-center gap-2 hover:text-teal-600"
                >
                  <Mail size={14} />
                  info@blossend.com
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-gray-900 font-semibold">Support</h4>
            <ul className="mt-4 text-sm text-gray-700 space-y-2">
              <li>
                <Link href="/help" className="hover:text-teal-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-teal-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm gap-4">
            <p>© 2026 Blossend. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/terms" className="hover:text-teal-600">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-teal-600">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
