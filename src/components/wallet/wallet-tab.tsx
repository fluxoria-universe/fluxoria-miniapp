"use client";

import { useState } from "react";
import { Plus, Wallet, TrendingUp, Clock, DollarSign } from "lucide-react";

const WalletTabComponent = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState("open");

  // Dummy open positions data
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Market created!");
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="mx-auto">
        {/* Floating Tab Control */}
        <div className="bg-muted rounded-full p-1 flex gap-1 mb-6">
          <button
            onClick={() => setActiveTab("open")}
            className={`flex-1 py-3 px-6 rounded-full font-medium transition-all ${
              activeTab === "open"
                ? "bg-card text-card-foreground shadow-md"
                : "text-muted-foreground"
            }`}
          >
            Open
          </button>
          <button
            onClick={() => setActiveTab("create")}
            className={`flex-1 py-3 px-6 rounded-full font-medium transition-all ${
              activeTab === "create"
                ? "bg-card text-card-foreground shadow-md"
                : "text-muted-foreground"
            }`}
          >
            Create
          </button>
        </div>

        {/* Content */}
        {activeTab === "open" ? (
          <div className="space-y-4">
            {/* Portfolio Summary */}
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground text-sm">
                  Total Value
                </span>
                <Wallet className="w-4 h-4 text-primary" />
              </div>
              <div className="text-card-foreground text-3xl font-bold mb-1">
                $150.00
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-green-500 text-sm font-medium">
                  +$7.50 (5.26%)
                </span>
              </div>
            </div>

            {/* Position Cards */}
            {openPositions.map((position) => (
              <div
                key={position.id}
                className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer"
              >
                <h3 className="text-card-foreground font-medium text-sm mb-3 line-clamp-2">
                  {position.question}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      position.position === "Yes"
                        ? "bg-green-500/20 text-green-500"
                        : "bg-red-500/20 text-red-500"
                    }`}
                  >
                    {position.position}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {position.shares} shares @ ${position.avgPrice.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div>
                    <div className="text-muted-foreground text-xs">
                      Current Value
                    </div>
                    <div className="text-card-foreground font-semibold">
                      ${position.value.toFixed(2)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-muted-foreground text-xs">
                      Profit/Loss
                    </div>
                    <div
                      className={`font-semibold ${
                        position.profit >= 0 ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {position.profit >= 0 ? "+" : ""}$
                      {position.profit.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-card border border-border rounded-lg p-4">
            <h2 className="text-card-foreground text-lg font-bold mb-4 flex items-center gap-2">
              <Plus className="w-5 h-5 text-primary" />
              Create New Market
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-card-foreground text-sm font-medium mb-2">
                  Question
                </label>
                <textarea
                  placeholder="Will Bitcoin hit $100,000 by end of 2025?"
                  className="w-full bg-muted text-foreground border border-border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-card-foreground text-sm font-medium mb-2">
                  Category
                </label>
                <select className="w-full bg-muted text-foreground border border-border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Crypto</option>
                  <option>Politics</option>
                  <option>Sports</option>
                  <option>Tech</option>
                  <option>Entertainment</option>
                  <option>Science</option>
                </select>
              </div>

              <div>
                <label className="block text-card-foreground text-sm font-medium mb-2">
                  Deadline
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full bg-muted text-foreground border border-border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-card-foreground text-sm font-medium mb-2">
                  Initial Liquidity (USDC)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="100"
                    className="w-full bg-muted text-foreground border border-border rounded-lg p-3 pl-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
                <p className="text-muted-foreground text-xs mt-1">
                  Minimum: $10 USDC
                </p>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity mt-6"
              >
                Create Market
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletTabComponent;
