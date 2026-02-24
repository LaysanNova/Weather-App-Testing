// pages/LocationPage.ts
import { Page, expect } from "@playwright/test";

export class LocationPage {
  constructor(private page: Page) {}

  async expectTitle(expected: RegExp) {
    await expect(this.page).toHaveTitle(expected);
  }
}
