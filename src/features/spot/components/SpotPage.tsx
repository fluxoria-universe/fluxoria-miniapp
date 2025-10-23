import { SpotData } from "../hooks/useSpotData";
import { formatDeadline, formatVolume } from "../utils/spot.helper";
import PredictionMarketChart from "./Chart";
import PredictionBidForm from "./FormPlaceOrder";

export default function SpotPage({ id }: { id: string }) {
  const data = SpotData({ id });
  console.log(data);

  return (
    <div>
      <div className="w-full h-full pb-20 p-4">
        <span className="text-xl font-bold">{data?.question}</span>
        <div className="w-full flex flex-row justify-between mt-2">
          <span>Total Volume : {formatVolume(data?.volume || 0)}</span>
          <span>Ends on {formatDeadline(data?.deadline || "")}</span>
        </div>
        <PredictionBidForm />
        <PredictionMarketChart />
      </div>
    </div>
  );
}
