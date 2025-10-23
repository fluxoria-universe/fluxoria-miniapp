"use client";

import dynamic from "next/dynamic";

const SpotPage = dynamic(() => import("@/features/spot/components/SpotPage"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  ),
});

interface SpotClientWrapperProps {
  id: string;
}

export default function SpotClientWrapper({ id }: SpotClientWrapperProps) {
  return <SpotPage id={id} />;
}
