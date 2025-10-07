"use client";

import { Input } from "@/components/ui/input";
import { Clock, Search, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";

interface NewsItem {
  id: string;
  title: string;
  description: string;
  category: "politics" | "sports" | "crypto";
  date: string;
  source: string;
  impact: "high" | "medium" | "low";
  imageUrl?: string;
}

// Dummy news data
const dummyNews: NewsItem[] = [
  {
    id: "1",
    title: "Republican Party Gains Momentum in Pre-Election Polls",
    description:
      "Latest surveys show significant shift in voter sentiment ahead of 2026 midterm elections, with GOP leading in key battleground states.",
    category: "politics",
    date: "2025-10-06T14:30:00Z",
    source: "Political Wire",
    impact: "high",
  },
  {
    id: "2",
    title: "Biden Administration Announces New Infrastructure Plan",
    description:
      "White House unveils comprehensive infrastructure package aimed at modernizing transportation and energy systems across the nation.",
    category: "politics",
    date: "2025-10-05T09:15:00Z",
    source: "Capitol News",
    impact: "medium",
  },
  {
    id: "3",
    title: "Argentina's World Cup Squad Announcement Expected Soon",
    description:
      "Coach to reveal preliminary roster for 2026 FIFA World Cup, with several key players rumored to be included in the lineup.",
    category: "sports",
    date: "2025-10-06T16:45:00Z",
    source: "Sports Daily",
    impact: "high",
  },
  {
    id: "4",
    title: "Max Verstappen Sets New Lap Record in Practice",
    description:
      "Red Bull driver dominates practice sessions ahead of crucial championship race, extending his lead in the 2025 F1 season.",
    category: "sports",
    date: "2025-10-06T11:20:00Z",
    source: "F1 Insider",
    impact: "medium",
  },
  {
    id: "5",
    title: "Bitcoin Surges Past $95,000 Amid ETF Inflows",
    description:
      "Cryptocurrency reaches new yearly high as institutional investors pour billions into Bitcoin spot ETFs, fueling bullish sentiment.",
    category: "crypto",
    date: "2025-10-07T08:00:00Z",
    source: "Crypto Times",
    impact: "high",
  },
  {
    id: "6",
    title: "Ethereum Network Upgrade Successfully Implemented",
    description:
      "Latest protocol upgrade reduces gas fees by 40% and improves transaction speeds, marking major milestone for the blockchain.",
    category: "crypto",
    date: "2025-10-06T19:30:00Z",
    source: "Blockchain News",
    impact: "high",
  },
  {
    id: "7",
    title: "Major Bank Announces Bitcoin Custody Service",
    description:
      "Leading financial institution becomes first major US bank to offer Bitcoin custody for institutional clients.",
    category: "crypto",
    date: "2025-10-05T13:45:00Z",
    source: "Finance Today",
    impact: "medium",
  },
  {
    id: "8",
    title: "Solana Reaches Record Transaction Volume",
    description:
      "Network processes over 5 million transactions in single day, demonstrating scalability improvements and growing adoption.",
    category: "crypto",
    date: "2025-10-04T10:15:00Z",
    source: "DeFi Report",
    impact: "medium",
  },
  {
    id: "9",
    title: "Crypto Market Cap Approaches $4 Trillion Milestone",
    description:
      "Total cryptocurrency market valuation nears historic levels as altcoins rally alongside Bitcoin's impressive gains.",
    category: "crypto",
    date: "2025-10-06T07:00:00Z",
    source: "Market Watch",
    impact: "high",
  },
  {
    id: "10",
    title: "Indonesia Football Federation Announces AFF Strategy",
    description:
      "National team unveils preparation plans for upcoming AFF Championship with focus on youth development and tactical innovation.",
    category: "sports",
    date: "2025-10-03T15:30:00Z",
    source: "Asian Sports",
    impact: "low",
  },
  {
    id: "11",
    title: "SEC Approves Additional Ethereum ETF Applications",
    description:
      "Securities regulator greenlight three new Ethereum exchange-traded funds, expanding crypto investment options for retail investors.",
    category: "crypto",
    date: "2025-10-02T12:00:00Z",
    source: "Regulatory News",
    impact: "high",
  },
];

export default function News() {
  const [activeFilters, setActiveFilters] = useState<string[]>(["all"]);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter and search logic
  const filteredNews = useMemo(() => {
    let results = dummyNews;

    // Apply category filters
    if (!activeFilters.includes("all")) {
      results = results.filter((news) => activeFilters.includes(news.category));
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (news) =>
          news.title.toLowerCase().includes(query) ||
          news.description.toLowerCase().includes(query) ||
          news.source.toLowerCase().includes(query)
      );
    }

    return results;
  }, [activeFilters, searchQuery]);

  // Calculate counts for filters
  const filterCounts = useMemo(() => {
    return {
      all: dummyNews.length,
      politics: dummyNews.filter((n) => n.category === "politics").length,
      sports: dummyNews.filter((n) => n.category === "sports").length,
      crypto: dummyNews.filter((n) => n.category === "crypto").length,
    };
  }, []);

  const filters = [
    { id: "all", label: "All Results", count: filterCounts.all },
    { id: "politics", label: "Politics", count: filterCounts.politics },
    { id: "sports", label: "Sports", count: filterCounts.sports },
    { id: "crypto", label: "Crypto", count: filterCounts.crypto },
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) return "Just now";
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "text-red-600 bg-red-50";
      case "medium":
        return "text-orange-600 bg-orange-50";
      case "low":
        return "text-blue-600 bg-blue-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "politics":
        return "bg-purple-100 text-purple-700";
      case "sports":
        return "bg-green-100 text-green-700";
      case "crypto":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
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
                  ? "bg-orange-500 text-white shadow-lg shadow-slate-800/30"
                  : "bg-white text-slate-700 border border-slate-300"
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
        <div className="w-full h-full max-h-[80vh] overflow-auto">
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
                <div
                  key={news.id}
                  className="border border-slate-200 rounded-xl p-5 transition-shadow duration-200 cursor-pointer"
                >
                  <div className="flex flex-col gap-3">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex gap-2 items-center flex-wrap">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                            news.category
                          )}`}
                        >
                          {news.category.charAt(0).toUpperCase() +
                            news.category.slice(1)}
                        </span>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium flex items-center gap-1 ${getImpactColor(
                            news.impact
                          )}`}
                        >
                          <TrendingUp size={12} />
                          {news.impact.charAt(0).toUpperCase() +
                            news.impact.slice(1)}{" "}
                          Impact
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 flex-shrink-0">
                        <Clock size={12} />
                        {formatDate(news.date)}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      {news.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {news.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <span className="text-xs text-gray-500 font-medium">
                        Source: {news.source}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
