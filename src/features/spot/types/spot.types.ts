export interface News {
  id: string;
  question: string;
  category: string;
  outcomes: { id: string; name: string; probability: number; color: string }[];
  volume: number;
  deadline: string;
}

export interface PredictionDataPoint {
  timestamp: string;
  date: Date;
  yesPrice: number;
  noPrice: number;
  volume?: number;
}

export interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
    dataKey: string;
  }>;
  label?: string;
}