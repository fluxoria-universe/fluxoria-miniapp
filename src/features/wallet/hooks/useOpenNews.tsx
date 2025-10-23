import { News } from "../types/wallet.types";

export const dummyOpenNews: News[] = [
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
];
