import { Page, Locator } from '@playwright/test';

export class MenuComponent {
  private readonly page: Page;
  private readonly menuRow: Locator;
  private readonly loginBtn: Locator;

  private readonly newLink: Locator;
  private readonly pastLink: Locator;
  private readonly commentsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.menuRow = this.page.locator('tr .pagetop').nth(1);
    this.loginBtn = this.page.locator('tr .pagetop').nth(2);

    this.newLink = this.page.getByRole('link', { name: 'new', exact: true });
    this.pastLink = this.page.getByRole('link', { name: 'past', exact: true });
    this.commentsLink = this.page.getByRole('link', { name: 'comments', exact: true });
  }

  async goToNewLink() {
    await this.newLink.click();
  }

  async goToPastLink() {
    await this.pastLink.click();
  }

  async goToCommentsLink() {
    await this.commentsLink.click();
  }
}
