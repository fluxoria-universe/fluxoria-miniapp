import { Market } from "@/types/market.types";
import { TrendingUp } from "lucide-react";

const MarketCard = ({
  market,
  onClick,
}: {
  market: Market;
  onClick: () => void;
}) => {
  const yesOutcome = market.outcomes.find((o) => o.option === "Yes");
  const yesPercentage = yesOutcome
    ? Math.round(yesOutcome.probability * 100)
    : 50;

  const formatVolume = (vol: number) => {
    if (vol >= 1000000) return `$${(vol / 1000000).toFixed(1)}M`;
    if (vol >= 1000) return `$${(vol / 1000).toFixed(0)}K`;
    return `$${vol}`;
  };

  // const formatDeadline = (deadline: string) => {
  //   const date = new Date(deadline);
  //   const now = new Date();
  //   const diffTime = date.getTime() - now.getTime();
  //   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  //   if (diffDays < 0) return "Ended";
  //   if (diffDays === 0) return "Today";
  //   if (diffDays === 1) return "1 day";
  //   if (diffDays < 30) return `${diffDays} days`;
  //   if (diffDays < 365) return `${Math.round(diffDays / 30)} months`;
  //   return `${Math.round(diffDays / 365)} years`;
  // };

  // Determine color based on probability
  const getColorClass = () => {
    if (yesPercentage >= 60) return "text-green-500";
    if (yesPercentage >= 40) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div
      onClick={onClick}
      className="border border-slate-200 rounded-xl p-5 cursor-pointer transition-all duration-200"
    >
      {/* Category Badge */}
      {/* <div className="flex items-center justify-between mb-3">
        <span className="bg-accent text-accent-foreground text-xs font-medium px-2.5 py-1 rounded-full">
          {market.category}
        </span>
        <span className="text-muted-foreground text-xs flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {formatDeadline(market.deadline)}
        </span>
      </div> */}

      {/* Question */}
      <h3 className="text-lg font-bold text-gray-900 leading-tight">
        {market.question}
      </h3>

      {/* Probability Bar */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 font-semibold text-lg">
              Yes
            </span>
            <span className={`font-bold text-xl ${getColorClass()}`}>
              {yesPercentage}%
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground font-semibold text-lg">
              No
            </span>
            <span className="text-muted-foreground font-bold text-xl">
              {100 - yesPercentage}%
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${yesPercentage}%` }}
          />
        </div>
      </div>

      {/* Volume */}
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <span className="text-muted-foreground text-xs">Volume</span>
        <div className="flex items-center gap-1">
          <TrendingUp className="w-3 h-3 text-primary" />
          <span className="text-gray-400 text-sm font-semibold">
            {formatVolume(market.volume)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
