import { Page, Locator } from '@playwright/test';
import { expect } from 'playwright/test';
import TableComponent from "./table.component";


export default class FooterComponent {
  private readonly page: Page;
  private readonly moreBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.moreBtn = this.page.getByRole('link', { name: 'More', exact: true });
  }

  async clickMoreBtn() {
    await this.moreBtn.click();
  }

  async loadNextRows(table: TableComponent) {
    await this.moreBtn.waitFor({ state: 'visible' });

    const lastRank = await table.getRank((await table.rowCount()) - 1);
    await this.clickMoreBtn();
    const nextRank = await table.getRank(0);
    expect(nextRank).toBe(lastRank + 1);
  }
}
