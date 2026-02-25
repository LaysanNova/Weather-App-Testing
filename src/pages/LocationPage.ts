import { Page } from "@playwright/test";

export class LocationPage {
  constructor(public page: Page) {}

  async getTitle() {
    return this.page.title();
  }
}
