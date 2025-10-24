// Enum for market states
export enum MarketState {
  Active = 0,
  Paused = 1,
  Resolved = 2,
  Cancelled = 3,
}

// Raw contract return type
export interface MarketRaw {
  question: string;
  description: string;
  resolutionTime: bigint;
  state: MarketState;
  currentPrice: bigint;
  totalVolume: bigint;
  conditionalTokensContract: `0x${string}`;
  isResolved: boolean;
}

// Formatted market type for application use
export interface Market {
  question: string;
  description: string;
  resolutionTime: bigint;
  resolutionDate: Date;
  state: MarketState;
  stateLabel: string;
  currentPrice: bigint;
  currentPriceFormatted: string; // e.g., "0.65" for 65%
  totalVolume: bigint;
  totalVolumeFormatted: string; // e.g., "1.5 ETH"
  conditionalTokensContract: `0x${string}`;
  isResolved: boolean;
  isActive: boolean;
  isPaused: boolean;
  isCancelled: boolean;
}
