export interface Market {
  id: string;
  question: string;
  category: string;
  outcomes: { option: string; probability: number }[];
  volume: number;
  deadline: string;
}
