import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search by name",
}: SearchBarProps) {
  return (
    <div className="relative flex-1 border border-slate-600 rounded-lg sm:max-w-xs">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent pl-10 pr-4 py-2 text-sm text-gray-800 placeholder-slate-500 focus:outline-none"
      />
    </div>
  );
}
