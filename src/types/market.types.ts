export interface Market {
  id: string;
  question: string;
  category: string;
  outcomes: { id: string, name: string; probability: number, color: string }[];
  volume: number;
  deadline: string;
}

export interface OpenTrade {
  id: string;
  marketId: string;
  marketQuestion: string;
  position: "Yes" | "No";
  shares: number;
  avgPrice: number;
  currentPrice: number;
  invested: number;
  currentValue: number;
  profitLoss: number;
  profitLossPercentage: number;
  openedAt: string;
}

export interface TrendingMarket extends Market {
  changePercentage: number; // Probability change in last 24h
  tradeCount24h: number; // Number of trades in last 24h
  volumeChange24h: number; // Volume change percentage
}