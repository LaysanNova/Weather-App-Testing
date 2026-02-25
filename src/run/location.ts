import { test } from "../fixtures/pages.fixture";
import {expect} from "@playwright/test";

test("Location page title", async ({ locationPage }) => {
  await expect(locationPage.page).toHaveTitle(/Weather/);
});

// import { test, expect } from '@playwright/test';
// import { CityPage } from '../pages/CityPage';
// import { LocationPage } from '../pages/LocationPage';
//
// test.describe('Title validation tests', () => {
//
//     test('Check City page title', async ({ page }) => {
//         const cityPage = new CityPage(page);
//         await cityPage.navigate();
//
//         const title = await cityPage.getTitle();
//         expect(title).toEqual('Weather'); // change expected value
//     });
//
//     test('Check Location page title', async ({ page }) => {
//         const locationPage = new LocationPage(page);
//         await locationPage.navigate();
//
//         const title = await locationPage.getTitle();
//         expect(title).toContain('Weather'); // change expected value
//     });
//
//     test('Navigate from City to Location and check title', async ({ page }) => {
//         const cityPage = new CityPage(page);
//         const locationPage = new LocationPage(page);
//
//         await cityPage.navigate();
//         await cityPage.clickLocation();
//
//         await locationPage.verifyLoaded();
//
//         await expect(page).toHaveTitle(/Location/);
//     });
// });
