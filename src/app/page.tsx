"use client";

import { sdk } from "@farcaster/miniapp-sdk";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import TrendingSection from "@/features/home/components/TrendingSection";
import Image from "next/image";
import WalletModal from "@/components/modal-connect";

export default function Home() {
  const { isConnected } = useAccount();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    sdk.actions.ready();
  }, []);

  useEffect(() => {
    if (!isConnected) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [isConnected]);

  return (
    <div className="w-full h-screen bg-gradient-to-r from-orange-500 to-orange-400">
      <div className="w-full flex flex-col gap-2 p-8 text-white">
        <Image src={"/logo.png"} alt="Fluxoria" width={256} height={45} />
        <span className="font-semibold">Lets leverage your bets.</span>
      </div>
      <TrendingSection />
      <WalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
