export type Type = 'wallet' | 'account';
export type WalletSubTab = 'deposit' | 'open' | 'pool';

export interface News {
  id: string;
  question: string;
  category: string;
  outcomes: { id: string; name: string; probability: number; color: string }[];
  volume: number;
  deadline: string;
}