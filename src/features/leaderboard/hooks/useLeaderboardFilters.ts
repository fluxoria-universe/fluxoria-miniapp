import { useState, useMemo } from "react";
import {
  Category,
  LeaderboardEntry,
  LeaderboardFilters,
  SortBy,
  TimeFilter,
} from "../types/leaderboard.types";
import { filterAndSortData } from "../utils/leaderboard.helper";

export const useLeaderboardFilters = (data: LeaderboardEntry[]) => {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("Monthly");
  const [category, setCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortBy>("profit");

  const filters: LeaderboardFilters = {
    timeFilter,
    category,
    searchQuery,
    sortBy,
  };

  const filteredData = useMemo(
    () => filterAndSortData(data, filters),
    [data, timeFilter, category, searchQuery, sortBy]
  );

  return {
    filters: {
      timeFilter,
      category,
      searchQuery,
      sortBy,
    },
    setTimeFilter,
    setCategory,
    setSearchQuery,
    setSortBy,
    filteredData,
  };
};
