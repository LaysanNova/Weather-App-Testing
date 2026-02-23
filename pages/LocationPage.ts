// pages/LocationPage.ts
import { Page, expect } from "@playwright/test";

export class LocationPage {
  constructor(private page: Page) {}

  // async verifyLoaded() {
  //     await expect(this.page).toHaveURL(/location/);
  // }

  async expectTitle(expected: RegExp) {
    await expect(this.page).toHaveTitle(expected);
  }
}
