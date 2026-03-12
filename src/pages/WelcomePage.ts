import { BasePage } from './BasePage';

export class WelcomePage extends BasePage {
  constructor(page: any) {
    super(page, '/news');
  }

  async clickStart() {
    await this.page.click('button#start');
  }
}
