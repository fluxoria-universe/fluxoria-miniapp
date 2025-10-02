import type { Metadata } from "next";
import { Provider } from "./provider";
import { minikitConfig } from "../../minikit.config";
import "./globals.css";
import TopNavbar from "@/components/top-navbar";
import BottomNavbar from "@/components/bottom-navbar";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: minikitConfig.miniapp.name,
    description: minikitConfig.miniapp.description,
    other: {
      "fc:miniapp": JSON.stringify({
        version: minikitConfig.miniapp.version,
        imageUrl: minikitConfig.miniapp.heroImageUrl,
        button: {
          title: `Launch ${minikitConfig.miniapp.name}`,
          action: {
            name: `Launch ${minikitConfig.miniapp.name}`,
            type: "launch_miniapp",
          },
        },
      }),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          maxWidth: "480px",
          margin: "0 auto",
          boxShadow: "0 0 10px rgba(0,0,0,0.05)",
        }}
      >
        <Provider>
          {/* <TopNavbar /> */}
          {children}
          <BottomNavbar />
        </Provider>
      </body>
    </html>
  );
}
