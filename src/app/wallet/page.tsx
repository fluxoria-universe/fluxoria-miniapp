import CardBalance from "@/components/wallet/card-balance";
import WalletTabs from "@/components/wallet/wallet-tab";

export default function WalletPage() {
  return (
    <div className="flex flex-col">
      <CardBalance />
      <WalletTabs />
    </div>
  );
}