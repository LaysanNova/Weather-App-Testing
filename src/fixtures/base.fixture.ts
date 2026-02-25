import { test as base } from "@playwright/test";
import { logger } from "../utils/logger";

declare module "@playwright/test" {
  interface Page {
    logger: typeof logger;
  }
}

export const test = base.extend({
  page: async ({ page }, use) => {
    page.logger = logger;
    await use(page);
  },
});

export { expect } from "@playwright/test";
