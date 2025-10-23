"use client";

import { useMemo, useState } from "react";
import { dummyNews } from "../hooks/useNews";
import { Filters } from "../types/news.types";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import MarketCard from "./MarketCard";
import { handleRedirect } from "../utils/news.helper";

export default function NewsPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>(["all"]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = useMemo(() => {
    let results = dummyNews;

    // Apply category filters
    if (!activeFilters.includes("all")) {
      results = results.filter((news) => activeFilters.includes(news.category));
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter((news) =>
        news.question.toLowerCase().includes(query)
      );
    }

    return results;
  }, [activeFilters, searchQuery]);

  const filterCounts = useMemo(() => {
    return {
      all: dummyNews.length,
      politics: dummyNews.filter((n) => n.category === "Politics").length,
      sports: dummyNews.filter((n) => n.category === "Sports").length,
      crypto: dummyNews.filter((n) => n.category === "Crypto").length,
    };
  }, []);

  const filters: Filters[] = [
    { id: "all", label: "All Results", count: filterCounts.all },
    { id: "Politics", label: "Politics", count: filterCounts.politics },
    { id: "Sports", label: "Sports", count: filterCounts.sports },
    { id: "Crypto", label: "Crypto", count: filterCounts.crypto },
  ];

  const toggleFilter = (filterId: string) => {
    setActiveFilters((prev) => {
      if (filterId === "all") {
        return ["all"];
      }

      const withoutAll = prev.filter((id) => id !== "all");

      if (withoutAll.includes(filterId)) {
        const newFilters = withoutAll.filter((id) => id !== filterId);
        return newFilters.length === 0 ? ["all"] : newFilters;
      } else {
        return [...withoutAll, filterId];
      }
    });
  };

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
        <div className="flex flex-nowrap gap-3 w-full overflow-x-auto scrollbar-hide pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => toggleFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                activeFilters.includes(filter.id)
                  ? "bg-orange-500 text-white shadow-md shadow-slate-800/30"
                  : "bg-white text-slate-700 border border-slate-300"
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
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
                  key={news.id}
                  onClick={() => handleRedirect(news.id)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
