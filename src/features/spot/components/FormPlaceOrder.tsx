"use client";

import { Wallet } from "lucide-react";
import React, { useState } from "react";

interface Market {
  id: string;
  question: string;
  yesPrice: number;
  noPrice: number;
}

const PredictionBidForm: React.FC = () => {
  const [tradeType, setTradeType] = useState<"buy" | "sell">("buy");
  const [position, setPosition] = useState<"yes" | "no">("yes");
  const [amount, setAmount] = useState<string>("0");
  const [useLeverage, setUseLeverage] = useState(false);
  const [leverage, setLeverage] = useState(1);

  // Sample market data - replace with your API
  const market: Market = {
    id: "market-001",
    question: "Will Bitcoin reach $100,000 by end of 2025?",
    yesPrice: 88.1,
    noPrice: 12,
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setAmount(value);
  };

  const addAmount = (value: number) => {
    const currentAmount = parseFloat(amount) || 0;
    setAmount((currentAmount + value).toString());
  };

  const setMaxAmount = () => {
    // Replace with actual wallet balance
    const maxBalance = 1000;
    setAmount(maxBalance.toString());
  };

  // Calculate trade details
  const baseAmount = parseFloat(amount) || 0;
  const effectiveAmount = useLeverage ? baseAmount * leverage : baseAmount;
  const selectedPrice = position === "yes" ? market.yesPrice : market.noPrice;
  const shares = effectiveAmount / (selectedPrice / 100);
  const potentialReturn =
    shares * (position === "yes" ? 1 : 1) - effectiveAmount;
  const potentialReturnPercent =
    baseAmount > 0 ? (potentialReturn / baseAmount) * 100 : 0;

  // Calculate liquidation price for leverage
  const liquidationPrice =
    useLeverage && baseAmount > 0
      ? tradeType === "buy"
        ? selectedPrice - (baseAmount / effectiveAmount) * 100
        : selectedPrice + (baseAmount / effectiveAmount) * 100
      : null;

  return (
    <div className="w-full mt-4">
      <div className="rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4">
          {/* Buy/Sell Tabs */}
          <div className="w-full flex items-center justify-center py-2">
            <div className="flex gap-2 w-fit bg-gray-200 rounded-full p-0.5 shadow-sm">
              <button
                onClick={() => setTradeType("buy")}
                className={`flex w-28 justify-center py-2 rounded-full text-sm font-medium transition-colors ${
                  tradeType === "buy"
                    ? "bg-green-500 text-white"
                    : "text-gray-600"
                }`}
              >
                Buy / Long
              </button>
              <button
                onClick={() => setTradeType("sell")}
                className={`flex w-28 justify-center py-2 rounded-full text-sm font-medium transition-colors ${
                  tradeType === "sell"
                    ? "bg-red-500 text-white"
                    : "text-gray-600"
                }`}
              >
                Sell / Short
              </button>
            </div>
          </div>

          {/* Position Selection */}
          <div className="grid grid-cols-2 gap-4 mb-4 mt-4">
            <button
              onClick={() => setPosition("yes")}
              className={`p-4 rounded-xl border-2 transition-all ${
                position === "yes"
                  ? "bg-green-400/30 border-green-600"
                  : "bg-green-400/10 border-green-400/30"
              }`}
            >
              <div className="text-green-500 text-xs font-medium mb-1">Yes</div>
              <div className="text-2xl font-bold text-green-400">
                {market.yesPrice.toFixed(1)}¢
              </div>
            </button>

            <button
              onClick={() => setPosition("no")}
              className={`p-4 rounded-xl border-2 transition-all ${
                position === "no"
                  ? "bg-red-400/30 border-red-600"
                  : "bg-red-400/10 border-red-900/30"
              }`}
            >
              <div className="text-red-500 text-xs font-medium mb-1">No</div>
              <div className="text-2xl font-bold text-red-400">
                {market.noPrice.toFixed(1)}¢
              </div>
            </button>
          </div>

          {/* Leverage Checkbox */}
          <div className="mb-4">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2 text-gray-700">
                <Wallet />
                <span>45</span>
              </div>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={useLeverage}
                    onChange={(e) => {
                      setUseLeverage(e.target.checked);
                      if (!e.target.checked) setLeverage(1);
                    }}
                    className="w-5 h-5 rounded border-2 checked:bg-blue-600 transition-all cursor-pointer"
                  />
                </div>
                <span className="text-gray-700 font-medium transition-colors">
                  Use Leverage
                </span>
              </label>
            </div>
          </div>

          {/* Amount Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700 text-2xl font-bold">
                $
              </span>
              <input
                type="text"
                value={amount}
                onChange={handleAmountChange}
                placeholder="0"
                className="w-full border border-gray-400 rounded-xl py-3 pl-12 pr-4 text-gray-700 text-2xl font-bold focus:border-blue-500 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Quick Amount Buttons */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            <button
              onClick={() => addAmount(1)}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold transition-all"
            >
              +$1
            </button>
            <button
              onClick={() => addAmount(20)}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold transition-all"
            >
              +$20
            </button>
            <button
              onClick={() => addAmount(100)}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold transition-all"
            >
              +$100
            </button>
            <button
              onClick={setMaxAmount}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold transition-all"
            >
              Max
            </button>
          </div>

          {/* Leverage Slider */}
          {useLeverage && (
            <div className="mb-4 p-4 rounded-xl border border-gray-400">
              <div className="flex items-center justify-between mb-3">
                <label className="text-gray-600 text-sm font-medium">
                  Leverage Amount
                </label>
                <span className="text-blue-400 font-bold text-lg">
                  {leverage.toFixed(1)}x
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="0.5"
                value={leverage}
                onChange={(e) => setLeverage(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${
                    ((leverage - 1) / 19) * 100
                  }%, #d1d5dc ${((leverage - 1) / 19) * 100}%, #d1d5dc 100%)`,
                }}
              />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-500">1x</span>
                <span className="text-xs text-gray-500">10x</span>
                <span className="text-xs text-gray-500">20x</span>
              </div>
            </div>
          )}

          {/* Trade Summary */}
          {baseAmount > 0 && (
            <div className="mb-4 p-4 rounded-xl border border-gray-400 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Position Value</span>
                <span className="text-gray-600 font-semibold">
                  ${effectiveAmount.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Est. Shares</span>
                <span className="text-gray-600 font-semibold">
                  {shares.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Avg. Price</span>
                <span className="text-gray-600 font-semibold">
                  {selectedPrice.toFixed(1)}¢
                </span>
              </div>
              {useLeverage && liquidationPrice !== null && (
                <div className="flex justify-between text-sm pt-2 border-t border-gray-700">
                  <span className="text-red-400">Liquidation Price</span>
                  <span className="text-red-400 font-semibold">
                    {Math.max(0, liquidationPrice).toFixed(1)}¢
                  </span>
                </div>
              )}
              <div className="flex justify-between text-sm pt-2 border-t border-gray-700">
                <span className="text-gray-600">Potential Return</span>
                <span
                  className={`font-bold ${
                    potentialReturn >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  ${potentialReturn.toFixed(2)} (
                  {potentialReturnPercent >= 0 ? "+" : ""}
                  {potentialReturnPercent.toFixed(1)}%)
                </span>
              </div>
            </div>
          )}

          {/* Trade Button */}
          <button
            disabled={baseAmount <= 0}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all text-white ${
              baseAmount > 0
                ? `${
                    tradeType === "buy" ? "bg-green-500" : "bg-red-500"
                  } shadow-lg shadow-blue-500/30`
                : `${
                    tradeType === "buy" ? "bg-green-500/40" : "bg-red-500/40"
                  } cursor-not-allowed`
            }`}
          >
            {tradeType === "buy"
              ? "Place Buy / Long Order"
              : "Place Sell / Short Order"}
          </button>

          {/* Warning for leverage */}
          {useLeverage && (
            <div className="mt-4 p-3 bg-yellow-600/10 border border-yellow-800/50 rounded-lg">
              <p className="text-yellow-500 text-xs leading-relaxed">
                ⚠️ <strong>Warning:</strong> Leverage trading increases both
                potential profits and losses. You can lose more than your
                initial investment. Trade responsibly.
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.5);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </div>
  );
};

export default PredictionBidForm;
