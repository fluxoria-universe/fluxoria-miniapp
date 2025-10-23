import { Clock, TrendingUp } from "lucide-react";
import { formatDeadline, formatVolume } from "../utils/wallet.helper";
import { News } from "../types/wallet.types";

interface MarketCardProps {
  market: News;
  onClick: () => void;
}

export default function MarketCard({ market, onClick }: MarketCardProps) {
  return (
    <div
      onClick={onClick}
      className="border border-slate-200 rounded-xl p-5 cursor-pointer transition-all duration-200"
    >
      <h3 className="text-lg font-bold text-gray-900 leading-tight">
        {market.question}
      </h3>

      {/* Probability Bar */}
      <div className="mb-3 mt-3">
        <div className="flex flex-row gap-2 w-full">
          <button className="w-full py-2 bg-green-500/40 rounded-xl font-bold text-green-500">
            Yes
          </button>
          <button className="w-full py-2 bg-red-500/40 rounded-xl font-bold text-red-500">
            No
          </button>
        </div>
      </div>

      {/* Volume */}
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div className="flex flex-row gap-2">
          <span className="text-muted-foreground text-xs">Ends on </span>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-primary" />
            <span className="text-gray-400 text-sm font-semibold">
              {formatDeadline(market.deadline)}
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <span className="text-muted-foreground text-xs">Volume</span>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-primary" />
            <span className="text-gray-400 text-sm font-semibold">
              {formatVolume(market.volume)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
