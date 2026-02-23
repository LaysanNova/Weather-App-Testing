import { test, expect } from "../fixtures/pages.fixture";

test("City page title", async ({ cityPage }) => {
  await cityPage.page.waitForLoadState();

  const title = await cityPage.getTitle();
  expect(title).toEqual("Weather"); // change expected value
});

test.describe("City page content", () => {
  test("City input should be empty by default", async ({ cityPage }) => {
    await expect(cityPage.cityInput).toHaveValue("");
  });

  test("Get Weather button should be disabled by default", async ({
    cityPage,
  }) => {
    await expect(cityPage.getWeatherBtn).not.toBeEnabled();
  });
});
