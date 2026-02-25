import { Page, expect } from "@playwright/test";
// import { logger } from '../utils/logger';

export class LocationPage {
  constructor(private page: Page) {}

  async expectTitle(expected: RegExp) {
    await expect(this.page).toHaveTitle(expected);
  }
}
