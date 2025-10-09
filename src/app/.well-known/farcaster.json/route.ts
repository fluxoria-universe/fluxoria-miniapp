// import { withValidManifest } from "@coinbase/onchainkit";
import { minikitConfig } from "../../../../minikit.config";

export async function GET() {
  return Response.json(minikitConfig);
}
