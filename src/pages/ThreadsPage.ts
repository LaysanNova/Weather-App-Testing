import { BasePage } from './BasePage';

export class ThreadsPage extends BasePage {
  constructor(page: any) {
    super(page, '/threads');
  }

  async openThread(threadName: string) {
    await this.page.click(`text=${threadName}`);
  }
}
