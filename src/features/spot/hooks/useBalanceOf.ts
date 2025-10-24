import { useReadContract } from "wagmi";
import { Address } from "viem";
import { USDC_ADDRESS } from "@/contract/USDC";
import { ERC20ABI } from "@/abis/ERC20ABI";

interface UseContractBalanceProps {
  account: Address | undefined;
  enabled?: boolean;
}

interface UseContractBalanceReturn {
  balance: bigint | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
}

export function useContractBalance({
  account,
  enabled = true,
}: UseContractBalanceProps): UseContractBalanceReturn {
  const { data, isError, isLoading, error, refetch } = useReadContract({
    address: USDC_ADDRESS,
    abi: ERC20ABI,
    functionName: "balanceOf",
    args: [account],
    query: {
      enabled: enabled && !!account,
    },
  });

  return {
    balance: data as bigint,
    isLoading,
    isError,
    error,
    refetch,
  };
}
