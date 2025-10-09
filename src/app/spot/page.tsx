"use client";

import React, { useState } from "react";
import { Clock, Users, DollarSign } from "lucide-react";

export default function Spot() {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const market = {
    question: "Will Bitcoin reach $100,000 by end of 2025?",
    description:
      "This market resolves to Yes if Bitcoin (BTC) reaches or exceeds $100,000 USD on any major exchange before December 31, 2025 23:59:59 UTC.",
    options: [
      {
        id: "yes",
        label: "Yes",
        probability: 68,
        shares: 145234,
        color: "from-emerald-400 to-emerald-500",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
        textColor: "text-emerald-700",
      },
      {
        id: "no",
        label: "No",
        probability: 32,
        shares: 67890,
        color: "from-rose-400 to-rose-500",
        bgColor: "bg-rose-50",
        borderColor: "border-rose-200",
        textColor: "text-rose-700",
      },
    ],
    volume: "$2,458,392",
    endTime: "Dec 31, 2025",
    endTimeFull: "December 31, 2025 at 11:59 PM UTC",
    totalVotes: 15420,
    category: "Crypto",
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <div className="w-full h-screen p-4 bg-white">
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-border">
          {/* Header */}
          {/* <div className="p-5 bg-gradient-to-br from-indigo-500 to-purple-600">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-xs font-medium">
                {market.category}
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-xs font-medium flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Active
              </span>
            </div>
            <h2 className="text-white font-bold text-xl leading-tight">
              {market.question}
            </h2>
          </div> */}

          {/* Description */}
          <div className="p-5 border-b border-gray-400">
            <h2 className="text-gray-800 font-bold text-xl leading-tight">
              {market.question}
            </h2>
          </div>

          {/* Options */}
          <div className="p-5 space-y-3">
            <h3 className="text-slate-900 font-semibold text-sm mb-3">
              Place your prediction
            </h3>
            {market.options.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`w-full rounded-2xl border-2 transition-all ${
                  selectedOption === option.id
                    ? `${option.borderColor} shadow-lg scale-105`
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                {/* Progress Background */}
                <div className="relative overflow-hidden rounded-2xl">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${option.color} opacity-10`}
                    style={{ width: `${option.probability}%` }}
                  />

                  {/* Content */}
                  <div className="relative p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-900 font-bold text-lg">
                        {option.label}
                      </span>
                      <span
                        className={`font-bold text-2xl ${option.textColor}`}
                      >
                        {option.probability}¢
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">
                        {formatNumber(option.shares)} shares
                      </span>
                      <span className={`font-medium ${option.textColor}`}>
                        {option.probability}% chance
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="border-t border-slate-200 bg-slate-50">
            <div className="grid grid-cols-3 divide-x divide-slate-200">
              {/* Volume */}
              <div className="p-4 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <DollarSign className="w-4 h-4 text-orange-500" />
                  <span className="text-slate-500 text-xs font-medium">
                    Volume
                  </span>
                </div>
                <div className="text-slate-900 font-bold text-sm">
                  {market.volume}
                </div>
              </div>

              {/* Traders */}
              <div className="p-4 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Users className="w-4 h-4 text-orange-500" />
                  <span className="text-slate-500 text-xs font-medium">
                    Traders
                  </span>
                </div>
                <div className="text-slate-900 font-bold text-sm">
                  {formatNumber(market.totalVotes)}
                </div>
              </div>

              {/* Ends */}
              <div className="p-4 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span className="text-slate-500 text-xs font-medium">
                    Ends
                  </span>
                </div>
                <div className="text-slate-900 font-bold text-xs">
                  {market.endTime}
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="p-5">
            <button
              className={`w-full py-4 rounded-2xl font-bold text-white text-lg transition-all ${
                selectedOption
                  ? "bg-gradient-to-r from-orange-500 to-orange-400 shadow-lg"
                  : "bg-slate-300 cursor-not-allowed"
              }`}
              disabled={!selectedOption}
            >
              {selectedOption ? "Trade Now" : "Select an option"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
