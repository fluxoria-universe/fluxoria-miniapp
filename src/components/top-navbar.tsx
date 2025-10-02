"use client";

import { ThemeToggle } from "./theme-toggle";
import { Avatar } from "@coinbase/onchainkit/identity";
import { useAccount } from "wagmi";

export default function TopNavbar() {
  const { address } = useAccount();

  return (
    <header className="fixed top-0 w-full bg-card border-b border-border flex items-center justify-between px-4 py-2">
      <strong className="text-foreground text-xl">Fluxoria</strong>
      <div className="flex gap-2">
        <ThemeToggle />
        {/* <Avatar address={address} /> */}
      </div>
    </header>
  );
}
