"use client";

import WalletSection from "./WalletSection";
import { useAccount } from "wagmi";
import { useContractBalance } from "../hooks/useBalanceOf";
import { formatUnits } from "viem";
import Image from "next/image";

export default function WalletPage() {
  const { address } = useAccount();
  const { balance } = useContractBalance({
    account: address,
  });

  const formattedBalance = balance ? formatUnits(balance, 6) : "0";

  return (
    <div className="w-full h-screen bg-gradient-to-br from-orange-500 to-orange-400 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full -ml-48 -mb-48"></div>

      <div className="relative z-10 p-6">
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-2">
            <Image
              src={"/icon.png"}
              alt="Icon Fluxoria"
              width={40}
              height={40}
            />
            <span className="text-white font-semibold text-lg">Fluxoria</span>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-white text-sm">Connected</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-white/80 text-sm mb-2">Total balance</p>
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-5xl font-bold text-white">
              $ {formattedBalance}
            </h1>
            <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              +12.5%
            </div>
          </div>
          <p className="text-white/60 text-xs mt-2">Last updated: 2 mins ago</p>
        </div>
      </div>

      <WalletSection />
    </div>
  );
}
