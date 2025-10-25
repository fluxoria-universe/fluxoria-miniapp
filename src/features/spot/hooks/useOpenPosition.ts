import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { type Hash } from "viem";
import { BTC100K_ADDRESS } from "@/contract/BTC100K";
import { BTC100KABI } from "@/abis/BTC100KABI";
import { PositionSide } from "../types/spot.types";

export interface OpenPositionParams {
  side: PositionSide;
  leverage: bigint;
  size: bigint;
  marketId: bigint;
  outcome: bigint;
}

export interface UseOpenPositionReturn {
  openPosition: (params: OpenPositionParams) => void;
  isLoading: boolean;
  isConfirming: boolean;
  isConfirmed: boolean;
  error: Error | null;
  txHash: Hash | undefined;
  reset: () => void;
}

export const useOpenPosition = (): UseOpenPositionReturn => {
  const {
    data: hash,
    writeContract,
    error: writeError,
    isPending,
    reset: resetWrite,
  } = useWriteContract();

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    error: confirmError,
  } = useWaitForTransactionReceipt({
    hash,
  });

  const openPosition = (params: OpenPositionParams) => {
    writeContract({
      address: BTC100K_ADDRESS,
      abi: BTC100KABI,
      functionName: "openPosition",
      args: [
        params.side,
        params.leverage,
        params.size,
        params.marketId,
        params.outcome,
      ],
    });
  };

  const reset = () => {
    resetWrite();
  };

  return {
    openPosition,
    isLoading: isPending,
    isConfirming,
    isConfirmed,
    error: writeError || confirmError,
    txHash: hash,
    reset,
  };
};
