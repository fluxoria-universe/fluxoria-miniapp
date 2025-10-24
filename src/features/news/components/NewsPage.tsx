"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import MarketCard from "./MarketCard";
import { handleRedirect } from "../utils/news.helper";
import { useMarket } from "../hooks/useMarkets";
import NewsPageSkeleton from "./NewsSkeleton";
import NewsError from "./NewsError";

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    market,
    isLoading: isLoadingMarket,
    error: marketError,
    refetch: refetchMarket,
  } = useMarket(0);

  const filteredNews = useMemo(() => {
    if (!market) return [];
    let results = [market];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter((news) =>
        news.question.toLowerCase().includes(query)
      );
    }

    return results;
  }, [market, searchQuery]);

  if (isLoadingMarket) {
    return <NewsPageSkeleton />;
  }

  if (marketError) {
    return <NewsError error={marketError} onRetry={refetchMarket} />;
  }

  return (
    <div className="w-full min-h-screen bg-white p-4">
      <div className="flex flex-col gap-4">
        <div className="w-full py-2 px-4 flex flex-row items-center border border-border rounded-xl">
          <Search className="text-gray-800 flex-shrink-0" size={18} />
          <Input
            name="search-option"
            type="text"
            placeholder="Search news by title, description, or source..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="!bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none outline-none placeholder:text-slate-400 text-gray-800 font-medium"
          />
        </div>
        <div className="w-full h-full max-h-[80vh] overflow-auto scrollbar-hide">
          <div className="flex flex-col gap-4">
            {filteredNews.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg font-medium">No news found</p>
                <p className="text-sm">
                  Try adjusting your filters or search query
                </p>
              </div>
            ) : (
              filteredNews.map((news) => (
                <MarketCard
                  market={news}
                  key={news.question}
                  onClick={() => handleRedirect("0")}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
