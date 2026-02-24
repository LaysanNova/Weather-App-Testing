import { request } from "@playwright/test";

export default async function globalSetup() {
  const url = process.env.BASE_URL as string;

  const requestContext = await request.newContext();

  const response = await requestContext.get(url);

  if (!response.ok()) {
    throw new Error(`Site is not reachable. Status: ${response.status()}`);
  }

  console.log("✅ Site is awake!");

  await requestContext.dispose();
}
