"use client";

import { Home, Wallet, Trophy, Newspaper } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavbar() {
  const pathname = usePathname();

  const bottomNavigation = [
    { icon: Home, label: "Home" },
    { icon: Newspaper, label: "News" },
    { icon: Trophy, label: "Leaderboard" },
    { icon: Wallet, label: "Wallet" },
  ];

  const activeIndex = bottomNavigation.findIndex((item) => {
    const href = item.label === "Home" ? "/" : `/${item.label.toLowerCase()}`;
    return pathname === href;
  });

  const positions = ["15%", "38.5%", "61%", "84%"];

  return (
    <div className="w-full fixed bottom-0 left-0 right-0 flex justify-center z-50 pb-6 px-6">
      <div className="w-full max-w-md flex justify-around bg-white rounded-3xl shadow-2xl p-4 relative">
        {activeIndex !== -1 && (
          <div
            className="absolute top-0 w-12 transition-all duration-300 ease-out"
            style={{
              left: positions[activeIndex],
              transform: "translateX(-50%)",
            }}
          >
            <div className="h-1 bg-orange-500 rounded-full" />
            <div className="h-12 bg-gradient-to-b from-orange-300/50 to-transparent"></div>
          </div>
        )}

        {bottomNavigation.map((item) => {
          const Icon = item.icon;
          const href =
            item.label === "Home" ? "/" : `/${item.label.toLowerCase()}`;
          const isActive = pathname === href;

          return (
            <Link
              href={href}
              key={item.label}
              className="flex flex-col items-center gap-2 relative z-10"
            >
              <Icon
                size={24}
                className={`transition-colors duration-300 ${
                  isActive ? "text-orange-500" : "text-gray-400"
                }`}
                strokeWidth={isActive ? 2.5 : 2}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
