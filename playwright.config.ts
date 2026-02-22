import { defineConfig, devices } from '@playwright/test';
import { BASE_URL } from './config/env';

export default defineConfig({
  globalSetup: require.resolve('./globalSetup'),
  testDir: './run',
  testMatch: '**/*.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  timeout: 60000,
  use: {
    baseURL: BASE_URL,
    headless: true,
    trace: 'on-first-retry',
    // launchOptions: {
    //   slowMo: 3000,          // slow down each action by 100ms
    // },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});


// import { defineConfig, devices } from '@playwright/test';
// import 'dotenv/config';
//
// if (!process.env.BASE_URL) {
//   throw new Error('BASE_URL is not defined in environment file');
// }
//
// export default defineConfig({
//   globalSetup: require.resolve('./globalSetup'),
//   testDir: './run',
//   testMatch: '**/*.ts',
//
//   fullyParallel: true,
//   forbidOnly: !!process.env.CI,
//   retries: process.env.CI ? 2 : 0,
//   workers: process.env.CI ? 1 : undefined,
//
//   reporter: 'html',
//   timeout: 60000,
//
//   use: {
//     baseURL: process.env.BASE_URL as string,
//     headless: false,
//     trace: 'on-first-retry',
//   },
//
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },
//   ],
// });
