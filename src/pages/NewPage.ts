import { BasePage } from './BasePage';

export class NewPage extends BasePage {
  constructor(page: any) {
    super(page, '/newest');
  }

  async createItem(name: string) {
    await this.page.fill('#itemName', name);
    await this.page.click('#create');
  }
}
