import { Page, test } from '@playwright/test';
import { logger } from '../utils/logger';

export class BasePage {
  constructor(
    protected page: Page,
    protected url?: string,
  ) {}

  async navigate(path?: string) {
    const target = path ?? this.url;
    if (!target) throw new Error('URL is not defined for this page');
    logger.info(`Navigating to ${target}`);
    await this.page.goto(target);
    await this.page.waitForLoadState('networkidle');
  }

  async takeScreenshot(name: string) {
    const screenshot = await this.page.screenshot();

    await test.info().attach(name, {
      body: screenshot,
      contentType: 'image/png',
    });

    logger.info(`Screenshot attached: ${name}`);
  }

  async getTitle() {
    return this.page.title();
  }

  get logger() {
    return logger;
  }
}
