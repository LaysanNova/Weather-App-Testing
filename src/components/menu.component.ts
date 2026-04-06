import { Locator, Page } from '@playwright/test';

export class MenuComponent {
  private readonly page: Page;

  private readonly newLink: Locator;
  private readonly pastLink: Locator;
  private readonly homeLink: Locator;
  private readonly loginLink: Locator;
  private readonly userElement: Locator;

  constructor(page: Page) {
    this.page = page;

    this.newLink = this.page.getByRole('link', { name: 'new', exact: true });
    this.pastLink = this.page.getByRole('link', { name: 'past', exact: true });
    this.homeLink = this.page.locator('.hnname');
    this.loginLink = this.page.getByRole('link', { name: 'login', exact: true });

    this.userElement = this.page.locator('#me');
  }

  async goToNew(): Promise<void> {
    try {
      await Promise.all([this.page.waitForURL('**/newest'), this.newLink.click()]);
    } catch (error: unknown) {
      throw error as Error;
    }
  }

  async goToPast(): Promise<void> {
    try {
      await Promise.all([this.page.waitForURL('**/front'), this.pastLink.click()]);
    } catch (error: unknown) {
      throw error as Error;
    }
  }

  async goToHome(): Promise<void> {
    try {
      await Promise.all([this.page.waitForURL('**/news'), this.homeLink.click()]);
    } catch (error: unknown) {
      throw error as Error;
    }
  }

  async goToLogin(): Promise<void> {
    try {
      await Promise.all([this.page.waitForURL(/\/login/), this.loginLink.click()]);
    } catch (error: unknown) {
      throw error as Error;
    }
  }

  getUserElements(): Locator {
    return this.userElement;
  }
}
