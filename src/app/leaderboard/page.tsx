"use client";

import { profitData, volumeData } from "@/hooks/use-leaderboard-data";
import { useState } from "react";
import { ChartNoAxesColumn, DollarSign } from "lucide-react";

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState("profit");

  const currentData = activeTab === "profit" ? profitData : volumeData;

  return (
    <div className="w-full h-screen bg-white">
      <div className="w-full flex flex-col gap-4 items-center justify-center p-4">
        <div className="relative bg-orange-500/50 w-fit rounded-full p-1 font-medium text-xl flex gap-1">
          <div
            className={`absolute top-1 h-[calc(100%-8px)] w-[164px] bg-white shadow-md rounded-full transition-all duration-300 ease-in-out ${
              activeTab === "profit" ? "left-1" : "left-[calc(164px+8px)]"
            }`}
          />

          <button
            onClick={() => setActiveTab("profit")}
            className={`relative z-10 flex gap-1 items-center justify-center py-2 px-4 rounded-full transition-all duration-300 ease-in-out w-[164px] ${
              activeTab === "profit" ? "text-orange-500" : "text-orange-500/70"
            }`}
          >
            <DollarSign
              className={`transition-transform duration-300 ${
                activeTab === "profit" ? "scale-110" : "scale-100"
              }`}
            />
            Profit
          </button>

          <button
            onClick={() => setActiveTab("volume")}
            className={`relative z-10 flex gap-1 items-center justify-center py-2 px-4 rounded-full transition-all duration-300 ease-in-out w-[164px] ${
              activeTab === "volume" ? "text-orange-500" : "text-orange-500/70"
            }`}
          >
            <ChartNoAxesColumn
              className={`transition-transform duration-300 ${
                activeTab === "volume" ? "scale-110" : "scale-100"
              }`}
            />
            Volume
          </button>
        </div>

        <div className="w-full rounded-2xl border border-border shadow-md p-4 mt-4 text-gray-800">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Leaderboard {activeTab === "profit" ? "Profit" : "Volume"}
          </h2>
          <div className="grid grid-cols-1 gap-2">
            {currentData.map((item) => (
              <div key={item.rank} className="flex flex-row items-center gap-2">
                <span className="w-8">{item.rank}.</span>
                <span className="w-full">{item.name}</span>
                <span>{item.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
