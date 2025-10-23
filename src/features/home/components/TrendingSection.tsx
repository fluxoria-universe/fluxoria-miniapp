"use client";

import { dummyTrendingNews } from "../hooks/useTrendingNews";
import { handleRedirect } from "../utils/home.helper";
import MarketCard from "./MarketCard";

export default function TrendingSection() {
  return (
    <div className="absolute bottom-0 h-[75%] rounded-t-4xl z-10 w-full max-w-[480px] bg-white p-4 pb-20">
      <div className="w-full h-full overflow-auto scrollbar-hide rounded-2xl py-1">
        <div className="grid grid-cols-1 gap-2">
          {dummyTrendingNews.map((item) => (
            <MarketCard
              key={item.id}
              market={item}
              onClick={() => handleRedirect(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
