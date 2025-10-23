import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { base, sepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Fluxoria",
  projectId:
    process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
  chains: [
    base,
    sepolia,
  ],
  transports: {
    [base.id]: http(),
    [sepolia.id]: http(),
  },
  ssr: true,
});
