import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HackerNewsPage extends BasePage {
  constructor(page: any) {
    super(page, '/news');
  }

  async getTitle() {
    return this.page.title();
  }
}
