const ROOT_URL = process.env.NEXT_PUBLIC_URL
  ? `https://${process.env.NEXT_PUBLIC_URL}`
  : "http://localhost:3000";

/**
 * MiniApp configuration object. Must follow the mini app manifest specification.
 *
 * @see {@link https://docs.base.org/mini-apps/features/manifest}
 */
export const minikitConfig = {
  accountAssociation: {
    header: "",
    payload: "",
    signature: "",
  },
  baseBuilder: {
    allowedAddresses: [],
  },
  miniapp: {
    version: "1",
    name: "Fluxoria",
    homeUrl: ROOT_URL,
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/logo.png`,
    splashBackgroundColor: "#000000",
    primaryCategory: "finance",
    tags: ["prediction", "market", "finance", "gambling", "games"],
    noIndex: true,
    subtitle: "Leverage bets",
    description: "Prediction market with option to leverage bets.",
    tagline: "Fluxoria: Leverage your bets!",
    heroImageUrl: `${ROOT_URL}/hero.png`,
    screenshotUrls: [],
    webhookUrl: `${ROOT_URL}/api/webhook`,
    ogTitle: "Fluxoria",
    ogDescription: "Prediction market with option to leverage bets.",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;
