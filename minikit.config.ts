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
    header: "eyJmaWQiOjEzNTQ1MDYsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHhkRDg2NjhCZTRCQjUwOTI5NzhmMTEyMDNkNUJlRmU2NGU4YjRkNzMyIn0",
    payload: "eyJkb21haW4iOiJmbHV4b3JpYS1taW5pYXBwLm5ldGxpZnkuYXBwIn0",
    signature: "kgbi0NVzf91H+nKRBpBq1z0EJrZKtqZ4Hqeuy7XGCh5SmjNQZbhQYndeKAsozeLHs1JysL6+0WlnRIf9nQfC0Bw=",
  },
  baseBuilder: {
    ownerAddress: "0x147199200F05F56C18f30e68AcaA422466976f07",
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
    noIndex: false,
    subtitle: "Leverage bets",
    description: "Prediction market with option to leverage bets.",
    tagline: "Fluxoria: Leverage your bets!",
    heroImageUrl: `${ROOT_URL}/hero.png`,
    screenshotUrls: [`${ROOT_URL}/screenshot.png`],
    webhookUrl: `${ROOT_URL}/api/webhook`,
    ogTitle: "Fluxoria",
    ogDescription: "Prediction market with option to leverage bets.",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;
