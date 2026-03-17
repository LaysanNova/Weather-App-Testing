// await page.getByRole('link', { name: 'More' }).click();

import { Page, Locator } from '@playwright/test';

export class FooterComponent {
  private readonly page: Page;
  private readonly moreBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.moreBtn = this.page.getByRole('link', { name: 'More', exact: true });
  }

  async clickMoreBtn() {
    await this.moreBtn.click();
  }
}
