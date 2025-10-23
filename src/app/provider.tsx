"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

const ClientProvider = dynamic(() => import("./client-provider"), {
  ssr: false,
});

export default function Provider({ children }: { children: ReactNode }) {
  return <ClientProvider>{children}</ClientProvider>;
}
