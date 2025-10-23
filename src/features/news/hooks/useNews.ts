import { News } from "../types/news.types";

export const dummyNews: News[] = [
  {
    id: "1",
    question: "Will Joe Biden run for re-election in 2028?",
    category: "Politics",
    outcomes: [
      { id: "yes", name: "Yes", probability: 0.65, color: "#10b981" },
      { id: "no", name: "No", probability: 0.35, color: "#ef4444" },
    ],
    volume: 285000,
    deadline: "2028-01-01T00:00:00Z",
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
  },
  {
    id: "3",
    question: "Will Indonesia hold early presidential elections before 2027?",
    category: "Politics",
    outcomes: [
      { id: "yes", name: "Yes", probability: 0.12, color: "#10b981" },
      { id: "no", name: "No", probability: 0.88, color: "#ef4444" },
    ],
    volume: 89000,
    deadline: "2027-01-01T00:00:00Z",
  },
  {
    id: "4",
    question: "Will the UK rejoin the EU by 2030?",
    category: "Politics",
    outcomes: [
      { id: "yes", name: "Yes", probability: 0.31, color: "#10b981" },
      { id: "no", name: "No", probability: 0.69, color: "#ef4444" },
    ],
    volume: 156000,
    deadline: "2030-12-31T23:59:59Z",
  },
  {
    id: "5",
    question: "Will Joko Widodo enter politics again by 2029?",
    category: "Politics",
    outcomes: [
      { id: "yes", name: "Yes", probability: 0.42, color: "#10b981" },
      { id: "no", name: "No", probability: 0.58, color: "#ef4444" },
    ],
    volume: 67000,
    deadline: "2029-12-31T23:59:59Z",
  },
  {
    id: "6",
    question: "Will Indonesia win the AFF Championship 2025?",
    category: "Sports",
    outcomes: [
      { id: "yes", name: "Yes", probability: 0.38, color: "#10b981" },
      { id: "no", name: "No", probability: 0.62, color: "#ef4444" },
    ],
    volume: 124000,
    deadline: "2025-12-15T23:59:59Z",
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
  },
  {
    id: "9",
    question: "Will Max Verstappen win the 2025 F1 Championship?",
    category: "Sports",
    outcomes: [
      { id: "yes", name: "Yes", probability: 0.76, color: "#10b981" },
      { id: "no", name: "No", probability: 0.24, color: "#ef4444" },
    ],
    volume: 167000,
    deadline: "2025-12-08T23:59:59Z",
  },
  {
    id: "10",
    question: "Will an Indonesian athlete win Olympic gold in 2028?",
    category: "Sports",
    outcomes: [
      { id: "yes", name: "Yes", probability: 0.34, color: "#10b981" },
      { id: "no", name: "No", probability: 0.66, color: "#ef4444" },
    ],
    volume: 78000,
    deadline: "2028-08-12T23:59:59Z",
  },
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
  },
  {
    id: "13",
    question: "Will a Bitcoin ETF become the top 10 largest ETF by 2027?",
    category: "Crypto",
    outcomes: [
      { id: "yes", name: "Yes", probability: 0.41, color: "#10b981" },
      { id: "no", name: "No", probability: 0.59, color: "#ef4444" },
    ],
    volume: 278000,
    deadline: "2027-12-31T23:59:59Z",
  },
  {
    id: "14",
    question: "Will Solana flip BNB in market cap by 2026?",
    category: "Crypto",
    outcomes: [
      { id: "yes", name: "Yes", probability: 0.57, color: "#10b981" },
      { id: "no", name: "No", probability: 0.43, color: "#ef4444" },
    ],
    volume: 192000,
    deadline: "2026-06-30T23:59:59Z",
  },
  {
    id: "15",
    question: "Will a major government adopt Bitcoin as legal tender in 2025?",
    category: "Crypto",
    outcomes: [
      { id: "yes", name: "Yes", probability: 0.29, color: "#10b981" },
      { id: "no", name: "No", probability: 0.71, color: "#ef4444" },
    ],
    volume: 234000,
    deadline: "2025-12-31T23:59:59Z",
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
  },
];
