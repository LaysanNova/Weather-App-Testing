import { test as base } from "./base.fixture";
import { CityPage } from "../pages/CityPage";
import { LocationPage } from "../pages/LocationPage";

type PageFixtures = {
  cityPage: CityPage;
  locationPage: LocationPage;
};

export const test = base.extend<PageFixtures>({
  cityPage: async ({ page }, use) => {
    const city = new CityPage(page);
    await city.navigate();
    await use(city);
  },

  locationPage: async ({ page }, use) => {
    const city = new CityPage(page);
    page.logger.info("Opening CityPage and navigating to Location");
    await city.navigate();
    await city.clickLocation();

    const location = new LocationPage(page);
    await use(location);
  },
});

export const expect = test.expect;
