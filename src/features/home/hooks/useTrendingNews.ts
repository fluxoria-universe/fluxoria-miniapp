import { TrendingNews } from "../types/trending.types";

export const dummyTrendingNews: TrendingNews[] = [
  {
    id: "11",
    question: "Will Bitcoin reach $100,000 by end of 2025?",
    category: "Crypto",
    outcomes: [
      { id: "yes", name: "Yes", probability: 0.68, color: "#10b981" },
      { id: "no", name: "No", probability: 0.32, color: "#ef4444" },
    ],
    volume: 523000,
    deadline: "2025-12-31T23:59:59Z",
    changePercentage: 8.5,
    tradeCount24h: 1247,
    volumeChange24h: 23.4,
  },
  {
    id: "8",
    question: "Will Argentina win the 2026 FIFA World Cup?",
    category: "Sports",
    outcomes: [
      { id: "yes", name: "Yes", probability: 0.19, color: "#10b981" },
      { id: "no", name: "No", probability: 0.81, color: "#ef4444" },
    ],
    volume: 445000,
    deadline: "2026-07-19T23:59:59Z",
    changePercentage: -5.2,
    tradeCount24h: 892,
    volumeChange24h: 18.7,
  },
  {
    id: "2",
    question: "Will the Republican Party win the 2026 US Midterm Elections?",
    category: "Politics",
    outcomes: [
      { id: "yes", name: "Yes", probability: 0.54, color: "#10b981" },
      { id: "no", name: "No", probability: 0.46, color: "#ef4444" },
    ],
    volume: 312000,
    deadline: "2026-11-03T23:59:59Z",
    changePercentage: 3.8,
    tradeCount24h: 756,
    volumeChange24h: 15.2,
  },
  {
    id: "16",
    question: "Will total crypto market cap exceed $5 trillion in 2025?",
    category: "Crypto",
    outcomes: [
      { id: "yes", name: "Yes", probability: 0.61, color: "#10b981" },
      { id: "no", name: "No", probability: 0.39, color: "#ef4444" },
    ],
    volume: 412000,
    deadline: "2025-12-31T23:59:59Z",
    changePercentage: 6.7,
    tradeCount24h: 634,
    volumeChange24h: 21.8,
  },
  {
    id: "12",
    question: "Will Ethereum surpass $8,000 in 2026?",
    category: "Crypto",
    outcomes: [
      { id: "yes", name: "Yes", probability: 0.52, color: "#10b981" },
      { id: "no", name: "No", probability: 0.48, color: "#ef4444" },
    ],
    volume: 389000,
    deadline: "2026-12-31T23:59:59Z",
    changePercentage: 4.2,
    tradeCount24h: 581,
    volumeChange24h: 12.9,
  },
  {
    id: "7",
    question:
      "Will Cristiano Ronaldo retire from professional football in 2026?",
    category: "Sports",
    outcomes: [
      { id: "yes", name: "Yes", probability: 0.71, color: "#10b981" },
      { id: "no", name: "No", probability: 0.29, color: "#ef4444" },
    ],
    volume: 198000,
    deadline: "2026-12-31T23:59:59Z",
    changePercentage: 11.3,
    tradeCount24h: 423,
    volumeChange24h: 34.6,
  },
];
