import { Page, Locator } from '@playwright/test';
import { getUnixTimestamp } from '../utils/dateUtils';

export class TableComponent {
  private readonly page: Page;
  private readonly table: Locator;

  constructor(page: Page) {
    this.page = page;
    this.table = page.locator('#bigbox table');
  }

  async getRows(): Promise<Locator> {
    return this.table.locator('tr').filter({
      has: this.page.locator('.titleline'),
    });
  }

  async rowCount(): Promise<number> {
    const rows = await this.getRows();
    return await rows.count();
  }

  async getRank(index: number): Promise<number> {
    const rows = await this.getRows();
    const text = await rows.nth(index).locator('.rank').textContent();

    const rank = Number(text);

    if (isNaN(rank)) {
      //log.warn({ index, text }, 'Could not parse rank to a number');
    }

    return rank;
  }

  async getTitle(index: number): Promise<Locator> {
    const rows = await this.getRows();
    return rows.nth(index).locator('.titleline');
  }

  async clickTitleLink(index: number): Promise<void> {
    const title = await this.getTitle(index);
    await title.locator('a').first().click();
  }

  async getSubtext(index: number): Promise<Locator> {
    const rows = await this.getRows();
    const titleRow = rows.nth(index);
    const subtextRow = titleRow.locator('xpath=following-sibling::tr[1]');

    return subtextRow.locator('.subtext');
  }

  async getAge(rowIndex: number): Promise<Locator> {
    const subtextRow = await this.getSubtext(rowIndex);
    return subtextRow.locator('.age');
  }

  async getTimestamp(index: number): Promise<number> {
    const age = await this.getAge(index);
    const titleAttr = await age.getAttribute('title');

    if (!titleAttr) {
      //log.error({ rowIndex }, 'Missing title attribute');
      throw new Error(`Row ${index} age has no title attribute`);
    }

    const timestamp = getUnixTimestamp(titleAttr);

    if (!Number.isFinite(timestamp)) {
      // log.error(
      //      { index, titleAttr, timestamp },
      //      'Failed to convert title attribute to Unix timestamp'
      //  );

      throw new Error(`Row ${index} age title cannot be parsed: "${titleAttr}"`);
    }

    //log.info({ rowIndex, timestamp }, 'Timestamp parsed successfully');

    return timestamp;
  }
}
