"use client";

import CardTradeNews from "@/components/card-trades-news";
import { useState } from "react";

export default function WalletPage() {
  const openPositions = [
    {
      id: 1,
      question: "Will Bitcoin exceed $70,000 by Dec 2025?",
      position: "Yes",
      shares: 100,
      avgPrice: 0.62,
      currentPrice: 0.65,
      value: 65,
      profit: 3,
    },
    {
      id: 2,
      question: "Will Ethereum hit $10,000 by 2026?",
      position: "No",
      shares: 50,
      avgPrice: 0.61,
      currentPrice: 0.58,
      value: 29,
      profit: -1.5,
    },
    {
      id: 3,
      question: "Will SpaceX land on Mars before 2030?",
      position: "Yes",
      shares: 200,
      avgPrice: 0.25,
      currentPrice: 0.28,
      value: 56,
      profit: 6,
    },
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-b from-orange-400 to-white">
      <div className="w-full flex flex-col items-center justify-center gap-2 p-8 text-white">
        <span className="font-medium text-xl">Current Balance</span>
        <span className="font-extrabold text-6xl">
          $120.000
        </span>
      </div>
      <CardTradeNews />
    </div>
  );
}
