import { SortBy } from "../types/leaderboard.types";

interface SortControlsProps {
  sortBy: SortBy;
  onSort: (sort: SortBy) => void;
}

export default function SortControls({ sortBy, onSort }: SortControlsProps) {
  return (
    <>
      {/* Desktop Sort Buttons */}
      <div className="hidden sm:flex items-center gap-8 lg:gap-16">
        <button
          onClick={() => onSort("profit")}
          className={`text-sm font-medium transition-colors ${
            sortBy === "profit"
              ? "text-white border-b-2 border-white pb-1"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Profit/Loss
        </button>
        <button
          onClick={() => onSort("volume")}
          className={`text-sm font-medium transition-colors ${
            sortBy === "volume"
              ? "text-white border-b-2 border-white pb-1"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Volume
        </button>
      </div>

      {/* Mobile Sort Dropdown */}
      <div className="relative sm:hidden">
        <select
          value={sortBy}
          onChange={(e) => onSort(e.target.value as SortBy)}
          className="w-full appearance-none bg-transparent border border-slate-600 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 cursor-pointer"
        >
          <option value="profit">Sort by Profit/Loss</option>
          <option value="volume">Sort by Volume</option>
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M1 1L6 6L11 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
