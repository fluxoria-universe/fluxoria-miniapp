"use client";

import { profitData, volumeData } from "@/hooks/use-leaderboard-data";
import { useState } from "react";

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState("profit");

  const currentData = activeTab === "profit" ? profitData : volumeData;
  const valueLabel = activeTab === "profit" ? "Profit ($)" : "Volume ($)";

  return (
    <div className="flex flex-col min-h-screen py-8 px-4 bg-foreground">
      <div className="fixed top-0 left-0 w-full bg-background border-b border-border rounded-b-3xl flex flex-col gap-4">
        <div className="w-full flex justify-center p-2">
          <span className="text-md text-semibold text-foreground">
            Welcome to Fluxoria
          </span>
        </div>
      </div>
      <div className="mx-auto mt-8">
        <div className="bg-muted w-96 rounded-full p-1 text-bold flex gap-1 mb-6">
          <button
            onClick={() => setActiveTab("profit")}
            className={`flex-1 py-3 px-6 rounded-full font-medium transition-all ${
              activeTab === "profit"
                ? "bg-muted-foreground text-secondary shadow-md"
                : "text-muted-foreground"
            }`}
          >
            Profit
          </button>
          <button
            onClick={() => setActiveTab("volume")}
            className={`flex-1 py-3 px-6 rounded-full font-medium transition-all ${
              activeTab === "volume"
                ? "bg-muted-foreground text-secondary shadow-md"
                : "text-muted-foreground"
            }`}
          >
            Volume
          </button>
        </div>
      </div>

      <div className="mx-auto w-full max-w-lg bg-card rounded-2xl border border-border-muted-foreground shadow-md p-6 mt-4">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Leaderboard {activeTab === "profit" ? "Profit" : "Volume"}
        </h2>
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500 uppercase text-sm">
              <th className="py-2 px-4">Rank</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4 text-right">{valueLabel}</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr key={item.rank} className="border-b border-gray-100">
                <td className="py-3 px-4 text-lg font-bold">{item.rank}</td>
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4 text-right font-medium">
                  {item.value.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
