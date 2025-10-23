import { LeaderboardEntry, LeaderboardFilters } from "../types/leaderboard.types";

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace("$", "+$");
};

export const formatVolume = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const filterAndSortData = (
  data: LeaderboardEntry[],
  filters: LeaderboardFilters
): LeaderboardEntry[] => {
  let filtered = [...data];

  // Filter by search query
  if (filters.searchQuery) {
    filtered = filtered.filter((entry) =>
      entry.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
    );
  }

  // Filter by category
  if (filters.category !== "all") {
    filtered = filtered.filter((entry) => entry.category === filters.category);
  }

  // Sort by selected column
  filtered.sort((a, b) => b[filters.sortBy] - a[filters.sortBy]);

  return filtered;
};
