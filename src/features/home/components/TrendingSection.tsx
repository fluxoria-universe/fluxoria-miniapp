"use client";

import { useMarket } from "../hooks/useMarkets";
import { handleRedirect } from "../utils/home.helper";
import MarketCard from "./MarketCard";
import MarketCardSkeleton from "./MarketCardSkeleton";
import MarketError from "./MarketError";

export default function TrendingSection() {
  const {
    market,
    isLoading: isLoadingMarket,
    error: marketError,
    refetch: refetchMarket,
  } = useMarket(0);

  if (isLoadingMarket) {
    return (
      <div className="absolute bottom-0 h-[75%] rounded-t-4xl z-10 w-full max-w-[480px] bg-white p-4 pb-20">
        <div className="w-full h-full overflow-auto scrollbar-hide rounded-2xl py-1">
          <div className="grid grid-cols-1 gap-2">
            <MarketCardSkeleton />
            <MarketCardSkeleton />
            <MarketCardSkeleton />
          </div>
        </div>
      </div>
    );
  }

  if (marketError) {
    return (
      <div className="absolute bottom-0 h-[75%] rounded-t-4xl z-10 w-full max-w-[480px] bg-white p-4 pb-20">
        <div className="w-full h-full overflow-auto scrollbar-hide rounded-2xl py-1">
          <div className="grid grid-cols-1 gap-2">
            <MarketError error={marketError} onRetry={refetchMarket} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="absolute bottom-0 h-[75%] rounded-t-4xl z-10 w-full max-w-[480px] bg-white p-4 pb-20">
      <div className="w-full h-full overflow-auto scrollbar-hide rounded-2xl py-1">
        <div className="grid grid-cols-1 gap-2">
          {market ? (
            <MarketCard
              key={market.question}
              market={market}
              onClick={() => handleRedirect("0")}
            />
          ) : (
            <div>No market data available</div>
          )}
        </div>
      </div>
    </div>
  );
}
