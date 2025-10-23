"use client";

import { useState } from "react";
import { WalletSubTab } from "../types/wallet.types";
import DepositForm from "./DepositForm";
import OpenList from "./OpenList";
import PoolForm from "./PoolForm";

export default function WalletSection() {
  const [subTab, setSubTab] = useState<WalletSubTab>("open");
  return (
    <div className="absolute bottom-0 h-[78%] rounded-t-4xl z-10 w-full max-w-[480px] bg-white p-4 pb-20">
      <div className="w-full h-full overflow-auto scrollbar-hide rounded-2xl py-1">
        <div className="space-y-6">
          <div className="flex gap-2 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setSubTab("deposit")}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition-colors ${
                subTab === "deposit"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600"
              }`}
            >
              Deposit
            </button>
            <button
              onClick={() => setSubTab("open")}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition-colors ${
                subTab === "open"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600"
              }`}
            >
              Open
            </button>
            <button
              onClick={() => setSubTab("pool")}
              className={`flex-1 py-2 rounded-full text-sm font-medium transition-colors ${
                subTab === "pool"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600"
              }`}
            >
              Pool
            </button>
          </div>

          <div>
            {subTab === "deposit" && <DepositForm />}
            {subTab === "open" && <OpenList />}
            {subTab === "pool" && <PoolForm />}
          </div>
        </div>
      </div>
    </div>
  );
}
