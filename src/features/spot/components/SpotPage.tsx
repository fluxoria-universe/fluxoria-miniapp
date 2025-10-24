import { useMarket } from "../hooks/useMarketData";
import { formatDeadline } from "../utils/spot.helper";
import PredictionMarketChart from "./Chart";
import PredictionBidForm from "./FormPlaceOrder";

export default function SpotPage({ id }: { id: string }) {
  const { market } = useMarket(0);

  return (
    <div>
      <div className="w-full h-full pb-20 p-4">
        <span className="text-2xl font-bold">{market?.question}</span>
        <div className="w-full flex flex-row text-sm justify-between mt-2">
          <span>Total Volume : {market?.totalVolumeFormatted}</span>
          <span>Ends on {formatDeadline(market?.resolutionDate || "")}</span>
        </div>
        <PredictionBidForm />
        <PredictionMarketChart />
      </div>
    </div>
  );
}
