import { useReadContract } from "wagmi";
import { formatEther } from "viem";
import { Market, MarketRaw, MarketState } from "../types/news.types";
import { BTC100K_ADDRESS } from "@/contract/BTC100K";
import { BTC100KABI } from "@/abis/BTC100KABI";

const MARKET_STATE_LABELS: Record<MarketState, string> = {
  [MarketState.Active]: "Active",
  [MarketState.Paused]: "Paused",
  [MarketState.Resolved]: "Resolved",
  [MarketState.Cancelled]: "Cancelled",
};

function transformSingleMarketData(data: MarketRaw): Market {
  const priceInEther = Number(formatEther(data.currentPrice));
  const pricePercentage = (priceInEther * 100).toFixed(2);

  return {
    question: data.question,
    description: data.description,
    resolutionTime: data.resolutionTime,
    resolutionDate: new Date(Number(data.resolutionTime) * 1000),
    state: data.state,
    stateLabel: MARKET_STATE_LABELS[data.state],
    currentPrice: data.currentPrice,
    currentPriceFormatted: pricePercentage,
    totalVolume: data.totalVolume,
    totalVolumeFormatted: formatEther(data.totalVolume),
    conditionalTokensContract: data.conditionalTokensContract,
    isResolved: data.isResolved,
    isActive: data.state === 0,
    isPaused: data.state === 1,
    isCancelled: data.state === 3,
  };
}

export function useMarket(marketId: number) {
  const { data, isLoading, isError, error, refetch, isRefetching } =
    useReadContract({
      address: BTC100K_ADDRESS,
      abi: BTC100KABI,
      functionName: "getMarket",
      args: [BigInt(marketId)],
      query: {
        staleTime: 30_000,
        gcTime: 5 * 60_000,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        retry: 3,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      },
    });

  const market: Market | undefined = data
    ? transformSingleMarketData(data as MarketRaw)
    : undefined;

  return {
    market,
    isLoading,
    isError,
    error,
    refetch,
    isRefetching,
  };
}
