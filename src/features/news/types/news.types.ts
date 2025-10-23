export interface News {
  id: string;
  question: string;
  category: string;
  outcomes: { id: string; name: string; probability: number; color: string }[];
  volume: number;
  deadline: string;
}

export interface Filters {
  id: string;
  label: string;
  count: number;
}
