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
