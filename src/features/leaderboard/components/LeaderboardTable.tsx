import { LeaderboardEntry } from "../types/leaderboard.types";
import LeaderboardRow from "./LeaderboardRows";

interface LeaderboardTableProps {
  data: LeaderboardEntry[];
  emptyMessage?: string;
}

export default function LeaderboardTable({
  data,
  emptyMessage = "No results found",
}: LeaderboardTableProps) {
  if (data.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400 text-sm sm:text-base">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {data.map((entry, index) => (
        <LeaderboardRow key={entry.id} entry={entry} rank={index + 1} />
      ))}
    </div>
  );
}
