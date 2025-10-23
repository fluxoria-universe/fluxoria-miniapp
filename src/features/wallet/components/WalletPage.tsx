"use client";

import { useState } from "react";
import { Type } from "../types/wallet.types";
import WalletSection from "./WalletSection";

export default function WalletPage() {
  const [type, setType] = useState<Type>("wallet");

  return (
    <div className="w-full h-screen bg-gradient-to-r from-orange-500 to-orange-400">
      <div className="w-full flex flex-col items-center justify-center gap-8 p-8 text-white">
        <div className="text-center">
          <p className="text-slate-200/80 text-sm mb-2">Total balance</p>
          <h1 className="text-5xl font-bold">
            {type == "wallet" ? "$117,664.9" : "$17,534"}
          </h1>
        </div>
        <div className="flex gap-2 w-fit bg-white rounded-full p-0.5 shadow-sm">
          <button
            onClick={() => setType("wallet")}
            className={`flex w-24 justify-center py-2 rounded-full text-sm font-medium transition-colors ${
              type === "wallet" ? "bg-orange-400 text-white" : "text-gray-600"
            }`}
          >
            Wallet
          </button>
          <button
            onClick={() => setType("account")}
            className={`flex w-24 justify-center py-2 rounded-full text-sm font-medium transition-colors ${
              type === "account" ? "bg-orange-400 text-white" : "text-gray-600"
            }`}
          >
            Account
          </button>
        </div>
      </div>
      <WalletSection />
    </div>
  );
}
