import { TimeFilter } from "../types/leaderboard.types";

interface TimeFilterButtonsProps {
  selected: TimeFilter;
  onSelect: (filter: TimeFilter) => void;
}

export default function TimeFilterButtons({
  selected,
  onSelect,
}: TimeFilterButtonsProps) {
  const filters: TimeFilter[] = ["Today", "Weekly", "Monthly", "All"];

  return (
    <div className="inline-flex rounded-lg border border-slate-600 overflow-hidden">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onSelect(filter)}
          className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium transition-colors ${
            selected === filter
              ? "bg-orange-500 text-white"
              : "bg-transparent text-gray-800"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
