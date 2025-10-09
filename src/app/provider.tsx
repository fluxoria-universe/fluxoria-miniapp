"use client";

import { ReactNode } from "react";
// import { base } from "wagmi/chains";
// import { OnchainKitProvider } from "@coinbase/onchainkit";
import { ThemeProvider } from "next-themes";
// import { WagmiConfig } from "wagmi";
// import { wagmiConfig } from "@/lib/wagmi";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function Provider({ children }: { children: ReactNode }) {
  // const queryClient = new QueryClient();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {/* <WagmiConfig config={wagmiConfig}>
        <QueryClientProvider client={queryClient}> */}
      {/* <OnchainKitProvider
            apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
            chain={base}
            config={{
              appearance: {
                mode: "auto",
              },
              wallet: {
                display: "modal",
                preference: "all",
              },
            }}
          >
          </OnchainKitProvider> */}
      {/* </QueryClientProvider>
      </WagmiConfig> */}
      {children}
    </ThemeProvider>
  );
}
