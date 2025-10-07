import CardNews from "@/components/card-news";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-orange-400 to-white">
      <div className="w-full flex flex-col gap-2 p-8 text-white">
        <strong className="text-3xl font-bold">Fluxoria</strong>
        <span className="font-semibold">Welcome to fluxoria, lets leverage your bets.</span>
      </div>
      <CardNews />
    </div>
  )
}