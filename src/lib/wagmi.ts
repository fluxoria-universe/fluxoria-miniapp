import { defineChain } from "viem";
import { createConfig, configureChains } from "wagmi";
import { base } from "wagmi/chains";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { publicProvider } from "wagmi/providers/public";

export const baseSepolia = defineChain({
  id: 84532,
  name: "Base Sepolia",
  testnet: true,
  nativeCurrency: {
    name: "ETH",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.base.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "Base Sepolia Explorer",
      url: "https://base-sepolia.blockscout.com",
    },
  },
  iconUrl: "https://avatars.githubusercontent.com/u/108554348?s=200&v=4",
});

const { chains, publicClient } = configureChains(
  [baseSepolia, base],
  [publicProvider()]
);

export const wagmiConfig = createConfig({
  connectors: [
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "Coba OnchainKit",
      },
    }),
  ],
  publicClient,
});
