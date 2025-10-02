"use client";

import MarketCard from "@/components/market-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { dummyMarkets } from "@/hooks/use-market-data";
import { cn } from "@/lib/utils";
import { Avatar, Name } from "@coinbase/onchainkit/identity";
import { Bookmark, Filter } from "lucide-react";
import { useState } from "react";
import { useAccount } from "wagmi";

export default function Home() {
  const { address } = useAccount();

  const [activeFilters, setActiveFilters] = useState<string[]>(["All"]);

  const filterOptions = [
    "All",
    "Trump Presidency",
    "Gov Shutdown",
    "Gaza",
    "NY",
  ];

  const toggleFilter = (filter: string) => {
    let newFilters = [...activeFilters];
    if (filter === "All") {
      newFilters = ["All"];
    } else {
      newFilters = newFilters.includes(filter)
        ? newFilters.filter((f) => f !== filter)
        : [...newFilters.filter((f) => f !== "All"), filter];
    }
    setActiveFilters(newFilters);
    // onChange(newFilters);
  };

  return (
    <main className="min-h-screen bg-foreground">
      <div className="fixed top-0 w-full bg-background border-b border-border rounded-b-3xl flex flex-col gap-4">
        <div className="w-full flex justify-center p-2 border-b border-border">
          <span className="text-md text-semibold text-foreground">
            Welcome to Fluxoria
          </span>
        </div>
        <div className="flex flex-row gap-1 px-4">
          <div className="h-16 w-16">
            <Avatar address={address} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-md font-semibold text-foreground inline-flex gap-1">
              Hi, <Name address={address} />{" "}
            </span>
            <span className="text-sm text-muted-foreground">
              Let's Leverage your bets.
            </span>
          </div>
        </div>
        <div className="w-full p-4 pt-0">
          <div className="w-full bg-card rounded-2xl flex flex-col gap-1 p-4">
            <span className="text-sm text-muted-foreground">Balance</span>
            <span className="text-lg font-semibold text-foreground">
              $ 9.999.999.999
            </span>
          </div>
        </div>
      </div>
      <div className="fixed top-[248px] w-full px-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide py-4">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={cn(
                "px-3 py-1 rounded-md text-sm whitespace-nowrap",
                activeFilters.includes(filter)
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="fixed top-[294px] flex items-center gap-2 w-full p-4 rounded-md">
        <Input
          placeholder="Search"
          className="flex-1 border-0 bg-card text-secondary focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button size="icon">
          <Filter className="w-5 h-5" />
        </Button>
        <Button size="icon">
          <Bookmark className="w-5 h-5" />
        </Button>
      </div>
      <div className="fixed top-[364px] bottom-0 w-full overflow-y-auto p-4 pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dummyMarkets.map((market) => (
            <MarketCard
              key={market.id}
              market={market}
              onClick={() => console.log(`Clicked on market: ${market.id}`)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
