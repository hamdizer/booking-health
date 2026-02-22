import React from "react";
import { User, CreditCard, Crown, Pencil } from "lucide-react";

export default function ServiceSeekerProfile() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6 px-4">
      <h1 className="text-xl font-semibold text-gray-700 mb-4">
        Service Seeker Profile
      </h1>

      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md border border-gray-200">
        <div className="flex gap-4 p-4 border-b">
          <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-teal-600 to-green-500 text-white shadow">
            <User size={16} />
            Profile
          </button>

          <button className="flex items-center gap-2 px-6 py-2 rounded-full border text-gray-600 bg-gray-50">
            <CreditCard size={16} />
            Payments
          </button>

          <button className="flex items-center gap-2 px-6 py-2 rounded-full border text-gray-600 bg-gray-50">
            <Crown size={16} />
            Membership
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white">
                <User size={28} />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800">Profile</h2>
                <p className="text-gray-500 text-sm">
                  Manage your personal information
                </p>
              </div>
            </div>

            <button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm">
              <Pencil size={16} />
              Edit
            </button>
          </div>

          <hr className="mb-6" />

          <div className="grid grid-cols-2 gap-y-6 gap-x-12 text-sm">
            <div>
              <p className="text-gray-500 mb-1">First name *</p>
              <p className="text-gray-800 font-medium">Hamdi1</p>
            </div>

            <div>
              <p className="text-gray-500 mb-1">Last name *</p>
              <p className="text-gray-800 font-medium">Zeramdini</p>
            </div>

            <div>
              <p className="text-gray-500 mb-1">Email *</p>
              <p className="text-gray-800 font-medium">
                zeramdinhamdi1@gmail.com
              </p>
            </div>

            <div>
              <p className="text-gray-500 mb-1">Phone</p>
              <p className="text-gray-800 font-medium">96031319</p>
            </div>

            <div>
              <p className="text-gray-500 mb-1">Date of birth</p>
              <p className="text-gray-800 font-medium">—</p>
            </div>

            <div>
              <p className="text-gray-500 mb-1">Gender</p>
              <p className="text-gray-800 font-medium">Male</p>
            </div>
          </div>
        </div>

        <div className="border-t p-6">
          <h3 className="text-red-600 font-semibold mb-1">Danger Zone</h3>

          <p className="text-gray-500 text-sm mb-4">
            Permanently delete your account and all associated data.
          </p>

          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
