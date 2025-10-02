"use client";

import MarketCard from "@/components/market-card";
import { dummyMarkets } from "@/hooks/use-market-data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 my-16 font-normal">
      <h1 className="text-2xl font-bold mb-4">Hello, Miniapp!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyMarkets.map((market) => (
          <MarketCard
            key={market.id}
            market={market}
            onClick={() => console.log(`Clicked on market: ${market.id}`)}
          />
        ))}
      </div>
    </main>
  );
}
