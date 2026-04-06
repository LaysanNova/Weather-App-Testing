import { Page } from 'playwright-core';
import { LoginPage } from '../pages/LoginPage';
import { config } from '../../config/env';

export async function loginUser(page: Page) {
  const loginPage = new LoginPage(page);
  await loginPage.fillUsernameInput(config.user.username);
  await loginPage.fillPasswordInput(config.user.password);
  await loginPage.clickLoginBtn();
}
