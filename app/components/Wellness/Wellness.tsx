import React from "react";
import { Plus, Search, CheckCircle } from "lucide-react";

export default function AddProSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#f4f7fb] via-[#eef7f5] to-[#d7f2ea] py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm mb-6">
            <Plus size={14} />
            Expand Our Network
          </div>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Can&apos;t find your <span className="text-teal-500">Pro</span>
            <br />
            or <span className="text-teal-500">Wellness Center</span>
            <br />
            in our directory?
          </h1>

          <p className="text-gray-600 mb-6 max-w-lg">
            Help us grow our network by adding your trusted professional.
            We&apos;ll verify their credentials and make them available to our
            community.
          </p>

          <div className="space-y-2 mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Quick verification process
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Credential verification included
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Available to community within 48 hours
            </div>
          </div>

          <button className="flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-teal-700 transition mb-10">
            <Plus size={18} />
            Add my Pro or Wellness Center
          </button>

          <div className="flex gap-12">
            <div>
              <div className="text-2xl font-bold text-teal-600">500+</div>
              <div className="text-sm text-gray-500">Pros Added</div>
            </div>

            <div>
              <div className="text-2xl font-bold text-teal-600">24h</div>
              <div className="text-sm text-gray-500">Avg. Approval</div>
            </div>

            <div>
              <div className="text-2xl font-bold text-teal-600">99%</div>
              <div className="text-sm text-gray-500">Success Rate</div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute -top-6 left-10 bg-white shadow-lg px-4 py-2 rounded-lg text-sm text-gray-500 flex items-center gap-2">
            <Search size={14} />
            Searching...
          </div>

          <div className="relative bg-white/70 backdrop-blur-xl border rounded-3xl shadow-xl p-10 w-[420px] text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Search className="text-gray-400" size={32} />
            </div>

            <h3 className="font-semibold text-gray-700 mb-2">
              Pro or Wellness Center Not Found?
            </h3>

            <p className="text-sm text-gray-500 mb-6">
              Can&apos;t find your professional? Help us grow our network by
              adding your trusted health, wellness, or lifestyle professional.
            </p>

            <button className="bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm hover:bg-teal-200 transition">
              Click to add Pro or Wellness Center
            </button>

            <span className="absolute top-6 right-6 w-3 h-3 bg-teal-400 rounded-full"></span>
            <span className="absolute bottom-6 left-6 w-3 h-3 bg-blue-400 rounded-full"></span>
          </div>

          <div className="absolute -bottom-6 right-12 bg-white shadow-xl p-4 rounded-xl">
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-3 rounded-lg">
              <Plus size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
