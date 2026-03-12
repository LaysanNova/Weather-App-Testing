import { request } from "@playwright/test";
import { logger } from "./src/utils/logger";

export default async function globalSetup() {
  const url = process.env.BASE_URL as string;
  const requestContext = await request.newContext();

  const retries = 3;
  const timeoutPerRequest = 5000;
  const pauseMs = 1000;

  let ok = false;

  for (let i = 0; i < retries; i++) {
    try {
      const response = await requestContext.get(url, {timeout: timeoutPerRequest});
      if (response.ok()) {
        ok = true;
        logger.info(`✅ Site is reachable! Status: ${response.status()} (attempt ${i + 1})`);
        break;
      } else {
        logger.warn(`⚠ Attempt ${i + 1}: Site responded with status ${response.status()}`);
      }
    } catch (error) {
      logger.warn(`⚠ Attempt ${i + 1}: Request failed (${error})`);
    }

    // Ждём перед следующей попыткой
    await new Promise(r => setTimeout(r, pauseMs));
  }

  if (!ok) {
    await requestContext.dispose();
    throw new Error(`❌ Site is not reachable after ${retries} attempts`);
  }
}
