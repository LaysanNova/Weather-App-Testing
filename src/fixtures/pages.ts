import {Page, test as base, TestInfo} from '@playwright/test';

import { NewPage } from '../pages/NewPage';
import { PastPage } from '../pages/PastPage';
import { HomePage } from '../pages/HomePage';
import { loginUser } from '../utils/login-utils';
import { config } from '../../config/env';
import MenuComponent from "../components/menu.component";
import logger from "../utils/logger";
import {Logger} from "pino";

type PageConstructor<T> = new (page: Page) => T;

type NavigationOptions<T> = {
  page: Page;
  PageClass: PageConstructor<T>;
  navigate: (menu: MenuComponent) => Promise<void>;
};

async function setupPage<T>({ page, PageClass, navigate }: NavigationOptions<T>): Promise<T> {
  const menu = new MenuComponent(page);

  await page.goto(config.baseUrl);
  await menu.goToLogin();
  await loginUser(page);
  await navigate(menu);

  return new PageClass(page);
}

const createPageFixture =
  <T>(
      PageClass: PageConstructor<T>,
      navigate: (menu: MenuComponent) => Promise<void>) =>
  async ({ page }: { page: Page }, use: (arg: T) => Promise<void>) => {
    const instance = await setupPage({ page, PageClass, navigate });
    await use(instance);
  };

export const test = base.extend<{
  log: Logger
  newPage: NewPage;
  pastPage: PastPage;
  homePage: HomePage;
}>({
  log: async ({}, use, testInfo: TestInfo) => {
    const start = Date.now();
    await use(logger);
    const durationMs = Date.now() - start;
    const isPassed = testInfo.status === 'passed';

    logger.info({
      result: isPassed ? '✅' : '❌',
      durationSec: +(durationMs / 1000).toFixed(2),
      test: testInfo.title,
      file: testInfo.file,
    });
  },
  newPage: createPageFixture(NewPage, (menu) => menu.goToNew()),
  pastPage: createPageFixture(PastPage, (menu) => menu.goToPast()),
  homePage: createPageFixture(HomePage, (menu) => menu.goToHome()),
});

export const expect = test.expect;
