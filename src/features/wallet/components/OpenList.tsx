import { handleRedirect } from "../utils/wallet.helper";
import { dummyOpenNews } from "../hooks/useOpenNews";
import MarketCard from "./MarketCard";

export default function OpenList() {
  return (
    <div className="space-y-4">
      {dummyOpenNews.map((news) => (
        <MarketCard
          market={news}
          key={news.id}
          onClick={() => handleRedirect(news.id)}
        />
      ))}
    </div>
  );
}
