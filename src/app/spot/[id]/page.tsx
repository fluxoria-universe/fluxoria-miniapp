import SpotClientWrapper from "./SpotClientWrapper";

interface SpotPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Spot({ params }: SpotPageProps) {
  const { id } = await params;

  return (
    <div>
      <SpotClientWrapper id={id} />
    </div>
  );
}
