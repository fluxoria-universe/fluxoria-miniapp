import TrendingSection from "@/features/home/components/TrendingSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-orange-500 to-orange-400">
      <div className="w-full flex flex-col gap-2 p-8 text-white">
        <Image src={'/logo.png'} alt="Fluxoria" width={256} height={45} />
        <span className="font-semibold">Lets leverage your bets.</span>
      </div>
      <TrendingSection />
    </div>
  )
}