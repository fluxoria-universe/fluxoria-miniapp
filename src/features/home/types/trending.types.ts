export interface News {
  id: string;
  question: string;
  category: string;
  outcomes: { id: string; name: string; probability: number; color: string }[];
  volume: number;
  deadline: string;
}

export interface TrendingNews extends News {
  changePercentage: number;
  tradeCount24h: number;
  volumeChange24h: number;
}
