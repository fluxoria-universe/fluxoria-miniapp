"use client";

import { dummyTrendingMarkets } from "@/hooks/use-market-data";
import MarketCard from "./market-card";

export default function CardNews() {
  const handleRedirect = (id: string) => {
    window.location.href = `/spot/${id}`
  }

  return (
    <div className="absolute bottom-0 h-[75%] rounded-t-4xl z-10 w-full max-w-[480px] bg-white p-4">
      <div className="w-full h-full overflow-auto scrollbar-hide rounded-2xl py-1">
        <div className="grid grid-cols-1 gap-2">
          {dummyTrendingMarkets.map((item) => (
            <MarketCard key={item.id} market={item} onClick={() => handleRedirect(item.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}
