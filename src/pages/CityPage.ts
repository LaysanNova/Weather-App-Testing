import { Page, Locator } from "@playwright/test";

export class CityPage {
  readonly page: Page;
  readonly locationLink: Locator;
  readonly getWeatherBtn: Locator;
  readonly cityInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locationLink = page.getByText("Location");
    this.getWeatherBtn = page.getByRole("button", { name: "Get Weather" });
    this.cityInput = page.getByRole("textbox", { name: "Enter city" });
  }

  async navigate() {
    this.page.logger.info('Navigating to City page');
    await this.page.goto(process.env.BASE_URL as string);
  }

  async clickLocation() {
    this.page.logger.debug('Clicking on Location link');
    await this.locationLink.click();
  }

  async clickGetWeatherBtn() {
    this.page.logger.debug('Clicking Get Weather button');
    await this.getWeatherBtn.click();
  }

  async getTitle(): Promise<string> {
    const title = await this.page.title();
    this.page.logger.info(`Page title: ${title}`);
    return title;
  }
}
