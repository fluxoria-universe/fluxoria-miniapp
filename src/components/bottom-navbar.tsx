"use client";

import { Home, Search, Wallet, Trophy } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavbar() {
  const pathname = usePathname();

  const bottomNavigation = [
    { icon: Home, label: "Home" },
    // { icon: Search, label: "Search" },
    { icon: Trophy, label: "Leaderboard" },
    { icon: Wallet, label: "Wallet" },
  ];

  return (
    // <nav
    //   className="fixed bottom-0 w-full z-10 bg-card border-t border-border"
    //   style={{ maxWidth: "480px" }}
    // >
    //   <div className="flex justify-around p-2 w-full">
    //     {bottomNavigation.map((item) => {
    //       const Icon = item.icon;
    //       const href = item.label === "Home" ? "/" : `/${item.label.toLowerCase()}`;
    //       const isActive = pathname === href;

    //       return (
    //         <Link
    //           href={href}
    //           key={item.label}
    //           className={`flex flex-col items-center py-1 px-4 rounded-lg transition-colors ${
    //             isActive ? "text-primary" : "text-muted-foreground"
    //           }`}
    //         >
    //           <Icon size={24} />
    //           <span className="text-xs mt-1">{item.label}</span>
    //         </Link>
    //       );
    //     })}
    //   </div>
    // </nav>
    <div className="w-full fixed bottom-0 p-4">
      <div className="w-full flex justify-around bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-lg p-2">
        {bottomNavigation.map((item) => {
          const Icon = item.icon;
          const href =
            item.label === "Home" ? "/" : `/${item.label.toLowerCase()}`;
          const isActive = pathname === href;

          return (
            <Link
              href={href}
              key={item.label}
              className={`flex flex-col items-center py-1 px-4 rounded-lg transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon size={24} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
