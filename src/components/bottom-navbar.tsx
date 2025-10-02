"use client";

import { Home, Search, Wallet, Trophy } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function BottomNavbar() {
  const pathname = usePathname();

  const bottomNavigation = [
    { icon: Home, label: "Home" },
    // { icon: Search, label: "Search" },
    { icon: Trophy, label: "Leaderboard" },
    { icon: Wallet, label: "Wallet" },
  ];

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout: NodeJS.Timeout | null = null;

  const handleScroll = () => {
    // 1. Clear the previous timeout to reset the 2s timer
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    // Set the scrolling state to true, which can trigger the hide animation
    setIsScrolling(true);

    // 2. Set a new timeout to run after 2000ms (2 seconds) of no scrolling
    scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 2000);

    const currentScrollY = window.scrollY;

    // 3. Logic to hide on scroll down
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    }
    // 4. Logic to show on scroll up
    else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // This effect runs whenever isScrolling changes
    // 5. If scrolling stops (isScrolling becomes false), show the navbar
    if (!isScrolling) {
      setIsVisible(true);
    }

    // Cleanup function:
    // - Remove the event listener to prevent memory leaks
    // - Clear any remaining timeout when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, isScrolling]);

  return (
    <div
      className={`w-full fixed bottom-0 p-6 left-0 right-0 flex justify-center z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="w-fit flex gap-8 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg p-2">
        {bottomNavigation.map((item) => {
          const Icon = item.icon;
          const href =
            item.label === "Home" ? "/" : `/${item.label.toLowerCase()}`;
          const isActive = pathname === href;

          return (
            <Link
              href={href}
              key={item.label}
              className={`text-white font-semibold p-2 rounded-full transition-all duration-300
                ${isActive ? "bg-primary" : "bg-muted-foreground"}`}
            >
              <Icon size={24} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
