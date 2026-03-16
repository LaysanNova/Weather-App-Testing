import { Page, Locator } from '@playwright/test';

export class TableHeaderComponent {
  readonly page: Page;
  readonly headers: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headers = page.locator('table thead th');
  }

  async getHeaderText(columnIndex: number) {
    return this.headers.nth(columnIndex).innerText();
  }

  async getAllHeaders() {
    const count = await this.headers.count();
    const texts = [];
    for (let i = 0; i < count; i++) {
      texts.push(await this.headers.nth(i).innerText());
    }
    return texts;
  }
}
