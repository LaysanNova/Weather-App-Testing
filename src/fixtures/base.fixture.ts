import { test as base } from '@playwright/test';
import { logger } from '../utils/logger';

declare module '@playwright/test' {
    interface Page {
        logger: typeof logger;
    }
}

export const test = base.extend({
    page: async ({ page }, use) => {
        page.logger = logger;
        page.logger.info('=== Test started ===');
        await use(page);
        page.logger.info('=== Test finished ===');
    },
});

export { expect } from '@playwright/test';