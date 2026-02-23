// pages/CityPage.ts
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
    await this.page.goto(process.env.BASE_URL as string);
  }

  async clickLocation() {
    await this.locationLink.click();
  }

  async clickGetWeatherBtn() {
    await this.getWeatherBtn.click();
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }
}
