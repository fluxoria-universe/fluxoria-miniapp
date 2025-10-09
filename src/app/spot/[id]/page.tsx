"use client";

import React, { useMemo, useState } from "react";
import { Users, DollarSign, TrendingUp, TrendingDown } from "lucide-react";
import { dummyMarkets } from "@/hooks/use-market-data";
import { Market } from "@/types/market.types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useParams } from "next/navigation";

export default function Spot() {
  const params = useParams<{ id: string }>();
  const id = (params?.id as string) || "";
  const [selectedOutcome, setSelectedOutcome] = useState("yes");
  const [amount, setAmount] = useState("");

  const getMarketById = (markets: Market[], id: string): Market | undefined => {
    return markets.find((market) => market.id === id);
  };

  const market = useMemo(() => {
    return getMarketById(dummyMarkets, id) || null;
  }, [id]);

  const chartData = useMemo(() => {
    const data = [] as { date: string; yes: number; no: number }[];
    const days = 30;
    let yesProb = 0.5 + Math.random() * 0.1;

    for (let i = 0; i < days; i++) {
      const date = new Date();
      date.setDate(date.getDate() - (days - i));

      // Random walk with some volatility
      yesProb += (Math.random() - 0.5) * 0.05;
      yesProb = Math.max(0.2, Math.min(0.8, yesProb));

      data.push({
        date: date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        yes: Math.round(yesProb * 100),
        no: Math.round((1 - yesProb) * 100),
      });
    }

    return data;
  }, []);

  // Add early return if market not found
  if (!market) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">Market not found</p>
      </div>
    );
  }


  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
  };


  const currentYesProb = chartData[chartData.length - 1]?.yes || 65;
  const prevYesProb = chartData[chartData.length - 2]?.yes || 64;
  const change = currentYesProb - prevYesProb;

  return (
    <div className="w-full p-4 bg-white">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-4 p-4 border border-border rounded-xl">
          <h3 className="text-3xl font-bold text-gray-800">
            {market?.question}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {/* <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
            <Clock className="w-5 h-5 text-slate-600" />
            <div>
              <p className="text-sm text-slate-600">Time Left</p>
              <p className="text-lg font-semibold text-slate-900">
                {formatDeadline(market?.deadline || "")}
              </p>
            </div>
          </div> */}

            <div className="flex items-center gap-3 p-4 rounded-lg border border-orange-500">
              <DollarSign className="w-5 h-5 text-slate-600" />
              <div>
                <p className="text-sm text-slate-600">Volume</p>
                <p className="text-lg font-semibold text-slate-900">
                  ${formatNumber(market?.volume || 0)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-lg border border-orange-500">
              <Users className="w-5 h-5 text-slate-600" />
              <div>
                <p className="text-sm text-slate-600">Traders</p>
                <p className="text-lg font-semibold text-slate-900">
                  {formatNumber(Math.floor((market?.volume || 0) / 1000))}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-border">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Probability Over Time
              </h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">Yes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">No</span>
                </div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="date"
                  stroke="#64748b"
                  fontSize={12}
                  tickLine={false}
                />
                <YAxis
                  stroke="#64748b"
                  fontSize={12}
                  tickLine={false}
                  domain={[0, 100]}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    padding: "8px",
                  }}
                  formatter={(value) => `${value}%`}
                />
                <Line
                  type="monotone"
                  dataKey="yes"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="no"
                  stroke="#ef4444"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-border mb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Place Bet</h2>

          {/* Current Odds */}
          <div className="space-y-3 mb-6">
            {market.outcomes.map((outcome) => {
              const prob =
                outcome.id === "yes" ? currentYesProb : 100 - currentYesProb;
              const isPositive = outcome.id === "yes" ? change > 0 : change < 0;

              return (
                <button
                  key={outcome.id}
                  onClick={() => setSelectedOutcome(outcome.id)}
                  className={`w-full p-4 rounded-lg border-2 transition-all ${
                    selectedOutcome === outcome.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900">
                      {outcome.name}
                    </span>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <span
                          className="text-2xl font-bold"
                          style={{ color: outcome.color }}
                        >
                          {prob}%
                        </span>
                        {isPositive ? (
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                      <span
                        className={`text-xs ${
                          isPositive ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {isPositive ? "+" : ""}
                        {Math.abs(change).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Amount Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Amount (USD)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-800"
            />
          </div>

          {/* Potential Return */}
          {amount && (
            <div className="mb-6 p-4 bg-slate-50 rounded-lg">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600">Investment</span>
                <span className="font-semibold text-slate-900">${amount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Potential Return</span>
                <span className="font-semibold text-green-600">
                  ${(parseFloat(amount) / (currentYesProb / 100)).toFixed(2)}
                </span>
              </div>
            </div>
          )}

          {/* Place Bet Button */}
          <button
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed"
            disabled={!amount || parseFloat(amount) <= 0}
          >
            Place Bet
          </button>
        </div>
      </div>
    </div>
  );
}
