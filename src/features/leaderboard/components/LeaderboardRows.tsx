import { LeaderboardEntry } from "../types/leaderboard.types";
import { formatCurrency, formatVolume } from "../utils/leaderboard.helper";
import LeaderboardAvatar from "./LeaderboardAvatar";

interface LeaderboardRowProps {
  entry: LeaderboardEntry;
  rank: number;
}

export default function LeaderboardRow({ entry, rank }: LeaderboardRowProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 sm:py-6 px-3 sm:px-4 hover:bg-slate-700/30 rounded-lg transition-colors group gap-3 sm:gap-0">
      <div className="flex items-center gap-3 sm:gap-6 flex-1 min-w-0">
        <span className="text-xl sm:text-2xl font-medium text-slate-400 w-6 sm:w-8 flex-shrink-0">
          {rank}
        </span>

        <LeaderboardAvatar avatar={entry.avatar} rank={rank} />

        <span className="text-sm sm:text-lg font-medium truncate">
          {entry.name}
        </span>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-8 lg:gap-16 pl-12 sm:pl-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <span className="text-xs sm:hidden text-slate-400">Profit/Loss</span>
          <span className="text-base sm:text-lg font-semibold text-green-400 sm:w-28 lg:w-32 sm:text-right">
            {formatCurrency(entry.profit)}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <span className="text-xs sm:hidden text-slate-400">Volume</span>
          <span className="text-base sm:text-lg text-slate-400 sm:w-28 lg:w-32 sm:text-right">
            {formatVolume(entry.volume)}
          </span>
        </div>
      </div>
    </div>
  );
}
