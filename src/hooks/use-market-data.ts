import { Market } from "../types/market.types";

export const dummyMarkets: Market[] = [
  {
    id: "1",
    question: "Will Bitcoin price exceed $70,000 by Dec 31, 2025?",
    category: "Crypto",
    outcomes: [
      { option: "Yes", probability: 0.62 },
      { option: "No", probability: 0.38 },
    ],
    volume: 125000,
    deadline: "2025-12-31T23:59:59Z",
  },
  {
    id: "2",
    question: "Will Donald Trump win the 2024 US Election?",
    category: "Politics",
    outcomes: [
      { option: "Yes", probability: 0.48 },
      { option: "No", probability: 0.52 },
    ],
    volume: 210000,
    deadline: "2024-11-05T23:59:59Z",
  },
  {
    id: "3",
    question: "Will Ethereum switch to proof-of-stake before 2026?",
    category: "Crypto",
    outcomes: [
      { option: "Yes", probability: 0.85 },
      { option: "No", probability: 0.15 },
    ],
    volume: 98000,
    deadline: "2026-01-01T00:00:00Z",
  },
  {
    id: "4",
    question: "Will Indonesia win the AFF Championship 2025?",
    category: "Sports",
    outcomes: [
      { option: "Yes", probability: 0.41 },
      { option: "No", probability: 0.59 },
    ],
    volume: 53000,
    deadline: "2025-12-15T23:59:59Z",
  },
  {
    id: "5",
    question: "Will SpaceX land humans on Mars before 2030?",
    category: "Science",
    outcomes: [
      { option: "Yes", probability: 0.25 },
      { option: "No", probability: 0.75 },
    ],
    volume: 152000,
    deadline: "2030-01-01T00:00:00Z",
  },
  {
    id: "6",
    question: "Will Taylor Swift release a new album in 2025?",
    category: "Entertainment",
    outcomes: [
      { option: "Yes", probability: 0.72 },
      { option: "No", probability: 0.28 },
    ],
    volume: 87000,
    deadline: "2025-12-31T23:59:59Z",
  },
  {
    id: "7",
    question: "Will AI surpass human doctors in diagnostics by 2027?",
    category: "Tech",
    outcomes: [
      { option: "Yes", probability: 0.44 },
      { option: "No", probability: 0.56 },
    ],
    volume: 120000,
    deadline: "2027-01-01T00:00:00Z",
  },
  {
    id: "8",
    question: "Will Ethereum price hit $10,000 by 2026?",
    category: "Crypto",
    outcomes: [
      { option: "Yes", probability: 0.39 },
      { option: "No", probability: 0.61 },
    ],
    volume: 110000,
    deadline: "2026-12-31T23:59:59Z",
  },
  {
    id: "9",
    question: "Will Apple release AR Glasses in 2025?",
    category: "Tech",
    outcomes: [
      { option: "Yes", probability: 0.68 },
      { option: "No", probability: 0.32 },
    ],
    volume: 99000,
    deadline: "2025-12-31T23:59:59Z",
  },
  {
    id: "10",
    question: "Will Manchester United win the Premier League 2026?",
    category: "Sports",
    outcomes: [
      { option: "Yes", probability: 0.31 },
      { option: "No", probability: 0.69 },
    ],
    volume: 45000,
    deadline: "2026-05-30T23:59:59Z",
  },
  {
    id: "11",
    question: "Will the global average temperature exceed 1.5°C by 2030?",
    category: "Climate",
    outcomes: [
      { option: "Yes", probability: 0.64 },
      { option: "No", probability: 0.36 },
    ],
    volume: 140000,
    deadline: "2030-01-01T00:00:00Z",
  },
  {
    id: "12",
    question: "Will a new Star Wars movie be announced in 2025?",
    category: "Entertainment",
    outcomes: [
      { option: "Yes", probability: 0.58 },
      { option: "No", probability: 0.42 },
    ],
    volume: 67000,
    deadline: "2025-12-31T23:59:59Z",
  },
  {
    id: "13",
    question: "Will a major bank adopt blockchain settlement in 2026?",
    category: "Finance",
    outcomes: [
      { option: "Yes", probability: 0.73 },
      { option: "No", probability: 0.27 },
    ],
    volume: 88000,
    deadline: "2026-12-31T23:59:59Z",
  },
  {
    id: "14",
    question:
      "Will the Indonesian Rupiah strengthen below 14,000 per USD in 2025?",
    category: "Finance",
    outcomes: [
      { option: "Yes", probability: 0.34 },
      { option: "No", probability: 0.66 },
    ],
    volume: 52000,
    deadline: "2025-12-31T23:59:59Z",
  },
  {
    id: "15",
    question: "Will a human live to 130 years old before 2040?",
    category: "Science",
    outcomes: [
      { option: "Yes", probability: 0.12 },
      { option: "No", probability: 0.88 },
    ],
    volume: 43000,
    deadline: "2040-01-01T00:00:00Z",
  },
  {
    id: "16",
    question: "Will Binance remain the #1 crypto exchange by 2026?",
    category: "Crypto",
    outcomes: [
      { option: "Yes", probability: 0.55 },
      { option: "No", probability: 0.45 },
    ],
    volume: 102000,
    deadline: "2026-12-31T23:59:59Z",
  },
  {
    id: "17",
    question: "Will Tesla release a flying car before 2030?",
    category: "Tech",
    outcomes: [
      { option: "Yes", probability: 0.29 },
      { option: "No", probability: 0.71 },
    ],
    volume: 75000,
    deadline: "2030-01-01T00:00:00Z",
  },
  {
    id: "18",
    question: "Will Indonesia host a Formula 1 race by 2028?",
    category: "Sports",
    outcomes: [
      { option: "Yes", probability: 0.46 },
      { option: "No", probability: 0.54 },
    ],
    volume: 69000,
    deadline: "2028-01-01T00:00:00Z",
  },
  {
    id: "19",
    question: "Will a global pandemic be declared again before 2035?",
    category: "Health",
    outcomes: [
      { option: "Yes", probability: 0.37 },
      { option: "No", probability: 0.63 },
    ],
    volume: 83000,
    deadline: "2035-01-01T00:00:00Z",
  },
  {
    id: "20",
    question: "Will Solana flip Ethereum in market cap by 2030?",
    category: "Crypto",
    outcomes: [
      { option: "Yes", probability: 0.18 },
      { option: "No", probability: 0.82 },
    ],
    volume: 94000,
    deadline: "2030-01-01T00:00:00Z",
  },
];
