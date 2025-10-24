"use client";

import { leaderboardData } from "../hooks/useLeaderboardData";
import { useLeaderboardFilters } from "../hooks/useLeaderboardFilters";
import CategoryDropdown from "./CategoryDropdown";
import LeaderboardTable from "./LeaderboardTable";
import SearchBar from "./SearchBar";
import SortControls from "./SortControls";
import TimeFilterButtons from "./TimeFilterButton";

export default function LeaderboardPage() {
  const {
    filters,
    setTimeFilter,
    setCategory,
    setSearchQuery,
    setSortBy,
    filteredData,
  } = useLeaderboardFilters(leaderboardData);

  return (
    <div className="bg-white text-gray-800 p-4 pb-20 sm:p-6 lg:p-8">
      <div className="fixed inset-0 bg-slate-100/10 backdrop-blur-sm z-50 flex items-center justify-center p-2">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md text-center border-2 border-orange-500 backdrop-blur-xs">
          <div className="mb-4">
            <svg
              className="w-16 h-16 mx-auto text-orange-500 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Feature in Development
          </h2>
          <p className="text-gray-600 mb-4">
            The Leaderboard feature is currently under development.
          </p>
          <p className="text-gray-600 mb-6">
            We are working hard to bring you an amazing experience! Check back
            soon.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div
              className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-6">
            This feature will be available in the next update
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-orange-500 font-bold mb-6 sm:mb-8">
          Leaderboard
        </h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6 sm:mb-4">
          <TimeFilterButtons
            selected={filters.timeFilter}
            onSelect={setTimeFilter}
          />
          <CategoryDropdown
            selected={filters.category}
            onSelect={setCategory}
          />
          <SearchBar value={filters.searchQuery} onChange={setSearchQuery} />
          <SortControls sortBy={filters.sortBy} onSort={setSortBy} />
        </div>

        {/* Search and Sort Controls */}
        <div className="mb-4 border-b border-slate-700"></div>

        {/* Leaderboard Table */}
        <LeaderboardTable data={filteredData} />
      </div>
    </div>
  );
}
