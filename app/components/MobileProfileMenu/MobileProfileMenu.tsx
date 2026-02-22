import React from "react";
import Link from "next/link";
import {
  Crown,
  User,
  MessageSquare,
  Stethoscope,
  ChevronRight,
  LogOut,
} from "lucide-react";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  badge?: string;
  highlight?: boolean;
  href?: string;
  onClick?: () => void;
}

function MenuItem({
  icon,
  label,
  badge,
  highlight,
  href,
  onClick,
}: MenuItemProps) {
  const content = (
    <div
      onClick={onClick}
      className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-9 h-9 flex items-center justify-center rounded-lg ${
            highlight ? "bg-yellow-100 text-yellow-600" : "text-gray-500"
          }`}
        >
          {icon}
        </div>

        <span className="text-gray-700 text-sm font-medium">{label}</span>
      </div>

      <div className="flex items-center gap-2">
        {badge && (
          <span className="text-xs font-semibold bg-yellow-400 text-white px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}

        <ChevronRight className="text-gray-400" size={16} />
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}

interface MobileProfileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  variant?: "dropdown" | "modal";
}

export default function MobileProfileMenu({
  isOpen,
  onClose,
  variant = "modal",
}: MobileProfileMenuProps) {
  if (!isOpen) return null;

  if (variant === "dropdown") {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 px-4 py-4">
          <div className="text-white text-sm opacity-90 mb-0.5">Welcome,</div>
          <div className="text-white text-lg font-semibold">
            Hamdi Zeramdini
          </div>
        </div>

        <div className="divide-y">
          <MenuItem
            icon={<Crown size={18} />}
            label="Upgrade to Pro"
            badge="NEW"
            highlight
          />

          <MenuItem
            icon={<User size={18} />}
            label="My Profile"
            href="/profile"
          />

          <MenuItem icon={<MessageSquare size={18} />} label="Messages" />

          <MenuItem
            icon={<Stethoscope size={18} />}
            label="My Appointments"
            href="/appointments"
          />
        </div>

        <div className="p-3 border-t">
          <button className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 transition text-gray-700 font-medium py-2.5 rounded-xl text-sm">
            <LogOut size={16} />
            Log out
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[320px] rounded-t-3xl overflow-hidden shadow-xl bg-white z-50 animate-slide-up">
        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 px-5 pt-6 pb-8">
          <div className="text-white text-sm opacity-90 mb-1">Welcome,</div>
          <div className="text-white text-xl font-semibold">
            Hamdi Zeramdini
          </div>
        </div>

        <div className="divide-y">
          <MenuItem
            icon={<Crown size={20} />}
            label="Upgrade to Pro"
            badge="NEW"
            highlight
          />

          <MenuItem
            icon={<User size={20} />}
            label="My Profile"
            href="/profile"
          />

          <MenuItem icon={<MessageSquare size={20} />} label="Messages" />

          <MenuItem
            icon={<Stethoscope size={20} />}
            label="My Appointments"
            href="/appointments"
          />
        </div>

        <div className="p-4 border-t">
          <button className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 transition text-gray-700 font-medium py-3 rounded-xl">
            <LogOut size={18} />
            Log out
          </button>
        </div>
      </div>
    </>
  );
}
