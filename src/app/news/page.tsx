"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

export default function News() {
  const [activeFilters, setActiveFilters] = useState<string[]>(["all"]);

  const filters = [
    { id: "all", label: "All Results", count: 99 },
    { id: "politics", label: "Politics", count: 2 },
    { id: "sports", label: "Sports", count: 2 },
    { id: "crypto", label: "Crypto", count: 6 },
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
            placeholder="Enter your entity name"
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
      </div>
    </div>
  );
}
