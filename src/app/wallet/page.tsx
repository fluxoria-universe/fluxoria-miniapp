"use client";

import { useState, useMemo } from "react";
import { TrendingUp, TrendingDown, ChevronRight } from "lucide-react";

// Types matching your dummy data
interface OpenTrade {
  id: string;
  marketId: string;
  marketQuestion: string;
  position: "Yes" | "No";
  shares: number;
  avgPrice: number;
  currentPrice: number;
  invested: number;
  currentValue: number;
  profitLoss: number;
  profitLossPercentage: number;
  openedAt: string;
}

// Dummy data (import from your data file in real app)
const dummyOpenTrades: OpenTrade[] = [
  {
    id: "t1",
    marketId: "11",
    marketQuestion: "Will Bitcoin reach $100,000 by end of 2025?",
    position: "Yes",
    shares: 150,
    avgPrice: 0.64,
    currentPrice: 0.68,
    invested: 9600,
    currentValue: 10200,
    profitLoss: 600,
    profitLossPercentage: 6.25,
    openedAt: "2025-09-15T10:30:00Z",
  },
  {
    id: "t2",
    marketId: "8",
    marketQuestion: "Will Argentina win the 2026 FIFA World Cup?",
    position: "No",
    shares: 200,
    avgPrice: 0.83,
    currentPrice: 0.81,
    invested: 16600,
    currentValue: 16200,
    profitLoss: -400,
    profitLossPercentage: -2.41,
    openedAt: "2025-08-22T14:20:00Z",
  },
  {
    id: "t3",
    marketId: "12",
    marketQuestion: "Will Ethereum surpass $8,000 in 2026?",
    position: "Yes",
    shares: 100,
    avgPrice: 0.49,
    currentPrice: 0.52,
    invested: 4900,
    currentValue: 5200,
    profitLoss: 300,
    profitLossPercentage: 6.12,
    openedAt: "2025-09-28T09:15:00Z",
  },
  {
    id: "t4",
    marketId: "9",
    marketQuestion: "Will Max Verstappen win the 2025 F1 Championship?",
    position: "Yes",
    shares: 75,
    avgPrice: 0.72,
    currentPrice: 0.76,
    invested: 5400,
    currentValue: 5700,
    profitLoss: 300,
    profitLossPercentage: 5.56,
    openedAt: "2025-10-01T16:45:00Z",
  },
  {
    id: "t5",
    marketId: "2",
    marketQuestion:
      "Will the Republican Party win the 2026 US Midterm Elections?",
    position: "No",
    shares: 120,
    avgPrice: 0.48,
    currentPrice: 0.46,
    invested: 5760,
    currentValue: 5520,
    profitLoss: -240,
    profitLossPercentage: -4.17,
    openedAt: "2025-09-10T11:00:00Z",
  },
];

export default function WalletPage() {
  const [openTrades] = useState<OpenTrade[]>(dummyOpenTrades);

  // Calculate total portfolio value
  const portfolioStats = useMemo(() => {
    const totalInvested = openTrades.reduce(
      (sum, trade) => sum + trade.invested,
      0
    );
    const totalCurrentValue = openTrades.reduce(
      (sum, trade) => sum + trade.currentValue,
      0
    );
    const totalProfitLoss = openTrades.reduce(
      (sum, trade) => sum + trade.profitLoss,
      0
    );
    const totalProfitLossPercentage =
      totalInvested > 0 ? (totalProfitLoss / totalInvested) * 100 : 0;

    return {
      totalInvested,
      totalCurrentValue,
      totalProfitLoss,
      totalProfitLossPercentage,
    };
  }, [openTrades]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (percentage: number) => {
    return `${percentage >= 0 ? "+" : ""}${percentage.toFixed(2)}%`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-orange-400 to-white">
      <div className="w-full flex flex-col items-center justify-center gap-2 p-8 text-white">
        <span className="font-medium text-xl">Portfolio Value</span>
        <span className="font-extrabold text-6xl">
          {formatCurrency(portfolioStats.totalCurrentValue)}
        </span>
        <div className="flex items-center gap-2 mt-2">
          {portfolioStats.totalProfitLoss >= 0 ? (
            <TrendingUp className="text-green-100" size={20} />
          ) : (
            <TrendingDown className="text-red-100" size={20} />
          )}
          <span
            className={`font-semibold text-lg ${
              portfolioStats.totalProfitLoss >= 0
                ? "text-green-100"
                : "text-red-100"
            }`}
          >
            {formatCurrency(Math.abs(portfolioStats.totalProfitLoss))}(
            {formatPercentage(portfolioStats.totalProfitLossPercentage)})
          </span>
        </div>
        <span className="text-sm text-orange-100 mt-1">
          Total Invested: {formatCurrency(portfolioStats.totalInvested)}
        </span>
      </div>

      <div className="fixed bottom-0 left-0 h-[75%] rounded-t-4xl z-10 w-full bg-white p-4">
        <div className="w-full h-full flex flex-col gap-2">
          <div className="">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-xl p-4 shadow">
                <p className="text-xs text-gray-500 mb-1">Winning</p>
                <p className="text-2xl font-bold text-green-600">
                  {openTrades.filter((t) => t.profitLoss > 0).length}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow">
                <p className="text-xs text-gray-500 mb-1">Losing</p>
                <p className="text-2xl font-bold text-red-600">
                  {openTrades.filter((t) => t.profitLoss < 0).length}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow">
                <p className="text-xs text-gray-500 mb-1">Breakeven</p>
                <p className="text-2xl font-bold text-gray-600">
                  {openTrades.filter((t) => t.profitLoss === 0).length}
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-white rounded-2xl shadow-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  Open Positions
                </h2>
                <span className="text-sm text-gray-500">
                  {openTrades.length} active
                </span>
              </div>

              <div className="h-[54vh] overflow-auto scrollbar-hide">
                <div className="flex flex-col gap-3">
                  {openTrades.map((trade) => (
                    <div
                      key={trade.id}
                      className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer"
                    >
                      {/* Question */}
                      <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">
                        {trade.marketQuestion}
                      </h3>

                      {/* Position Badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            trade.position === "Yes"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {trade.position}
                        </span>
                        <span className="text-xs text-gray-500">
                          {trade.shares} shares @{" "}
                          {(trade.avgPrice * 100).toFixed(0)}¢
                        </span>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div>
                          <p className="text-xs text-gray-500">Invested</p>
                          <p className="text-sm font-semibold text-gray-900">
                            {formatCurrency(trade.invested)}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Current Value</p>
                          <p className="text-sm font-semibold text-gray-900">
                            {formatCurrency(trade.currentValue)}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Profit/Loss</p>
                          <p
                            className={`text-sm font-bold ${
                              trade.profitLoss >= 0
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {formatCurrency(Math.abs(trade.profitLoss))}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Return</p>
                          <p
                            className={`text-sm font-bold ${
                              trade.profitLossPercentage >= 0
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {formatPercentage(trade.profitLossPercentage)}
                          </p>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <span className="text-xs text-gray-500">
                          Opened {formatDate(trade.openedAt)}
                        </span>
                        <button className="text-orange-500 hover:text-orange-600 transition-colors">
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {openTrades.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <p className="text-lg font-medium">No open positions</p>
                  <p className="text-sm">
                    Start trading to see your positions here
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
