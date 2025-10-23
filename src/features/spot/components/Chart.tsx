"use client";

import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { CustomTooltipProps, PredictionDataPoint } from "../types/spot.types";

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
        <p className="text-sm font-semibold text-gray-700 mb-2">{label}</p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-gray-600">{entry.name}:</span>
            <span className="font-semibold">{entry.value}%</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const generateDummyData = (): PredictionDataPoint[] => {
  const data: PredictionDataPoint[] = [];
  const now = new Date();
  let yesPrice = 45;

  for (let i = 30; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);

    // Random walk with mean reversion
    yesPrice += (Math.random() - 0.5) * 5;
    yesPrice = Math.max(20, Math.min(80, yesPrice));

    data.push({
      timestamp: date.toISOString(),
      date: date,
      yesPrice: parseFloat(yesPrice.toFixed(2)),
      noPrice: parseFloat((100 - yesPrice).toFixed(2)),
      volume: Math.floor(Math.random() * 10000) + 5000,
    });
  }

  return data;
};

const PredictionMarketChart: React.FC = () => {
  const [timeRange, setTimeRange] = useState<"24h" | "7d" | "1m" | "all">("1m");

  const chartData = generateDummyData();

  // Format data for display
  const formattedData = chartData.map((point) => ({
    date: point.date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    Yes: point.yesPrice,
    No: point.noPrice,
  }));

  const currentYesPrice = chartData[chartData.length - 1].yesPrice;
  const priceChange = currentYesPrice - chartData[0].yesPrice;
  const priceChangePercent = (
    (priceChange / chartData[0].yesPrice) *
    100
  ).toFixed(2);

  return (
    <div className="w-full mt-4 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
          <div className="text-sm text-green-700 font-medium mb-1">YES</div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-green-900">
              {currentYesPrice.toFixed(1)}%
            </span>
            <span
              className={`text-sm font-semibold ${
                priceChange >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {priceChange >= 0 ? "↑" : "↓"}{" "}
              {Math.abs(parseFloat(priceChangePercent))}%
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-4 border border-red-200">
          <div className="text-sm text-red-700 font-medium mb-1">NO</div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-red-900">
              {(100 - currentYesPrice).toFixed(1)}%
            </span>
            <span
              className={`text-sm font-semibold ${
                priceChange <= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {priceChange <= 0 ? "↑" : "↓"}{" "}
              {Math.abs(parseFloat(priceChangePercent))}%
            </span>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Price History</h3>

          {/* Time Range Selector */}
          <div className="flex gap-2">
            {(["24h", "7d", "1m", "all"] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  timeRange === range
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {range.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={formattedData}>
            <defs>
              <linearGradient id="colorYes" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorNo" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="date"
              stroke="#9ca3af"
              style={{ fontSize: "12px" }}
            />
            <YAxis
              stroke="#9ca3af"
              style={{ fontSize: "12px" }}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="circle" />
            <Area
              type="monotone"
              dataKey="Yes"
              stroke="#10b981"
              strokeWidth={3}
              fill="url(#colorYes)"
              dot={false}
            />
            <Area
              type="monotone"
              dataKey="No"
              stroke="#ef4444"
              strokeWidth={3}
              fill="url(#colorNo)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PredictionMarketChart;
