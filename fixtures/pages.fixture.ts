import { test as base } from "@playwright/test";
import { CityPage } from "../pages/CityPage";
import { LocationPage } from "../pages/LocationPage";

type PageFixtures = {
  cityPage: CityPage;
  locationPage: LocationPage;
};

export const test = base.extend<PageFixtures>({
  // ✅ Opens City page automatically
  cityPage: async ({ page }, use) => {
    const city = new CityPage(page);
    await city.navigate();
    await use(city);
  },

  // ✅ Opens City page + clicks Location automatically
  locationPage: async ({ page }, use) => {
    const city = new CityPage(page);
    await city.navigate();
    await city.clickLocation();

    const location = new LocationPage(page);
    await use(location);
  },
});

export const expect = test.expect;
