export type TimeFilter = "Today" | "Weekly" | "Monthly" | "All";
export type SortBy = "profit" | "volume";
export type Category = "all" | "politics" | "sports" | "crypto";

export interface LeaderboardEntry {
  id: string;
  name: string;
  profit: number;
  volume: number;
  avatar: string;
  category?: string;
}

export interface LeaderboardFilters {
  timeFilter: TimeFilter;
  category: Category;
  searchQuery: string;
  sortBy: SortBy;
}