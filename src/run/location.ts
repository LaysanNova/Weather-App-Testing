import { test } from "../fixtures/pages.fixture";
import { expect } from "@playwright/test";

test("Location page title", async ({ locationPage }) => {
  expect(await locationPage.getTitle()).toMatch(/Weather/);
});
