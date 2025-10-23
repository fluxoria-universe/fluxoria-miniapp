import { Category } from "../types/leaderboard.types";

interface CategoryDropdownProps {
  selected: Category;
  onSelect: (category: Category) => void;
}

export default function CategoryDropdown({
  selected,
  onSelect,
}: CategoryDropdownProps) {
  return (
    <div className="relative">
      <select
        value={selected}
        onChange={(e) => onSelect(e.target.value as Category)}
        className="w-full sm:w-auto appearance-none bg-transparent border border-slate-600 rounded-lg px-4 py-2 sm:py-3 pr-10 text-sm font-medium text-gray-800 cursor-pointer hover:bg-slate-700/50 transition-colors"
      >
        <option value="all" className="bg-slate-800">
          All Categories
        </option>
        <option value="politics" className="bg-slate-800">
          Politics
        </option>
        <option value="sports" className="bg-slate-800">
          Sports
        </option>
        <option value="crypto" className="bg-slate-800">
          Crypto
        </option>
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
  );
}
