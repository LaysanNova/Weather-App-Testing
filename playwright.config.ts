import { defineConfig, devices } from "@playwright/test";
import { BASE_URL } from "./config/env";
import os from "os";

export default defineConfig({
  globalSetup: require.resolve("./globalSetup"),
  testDir: "./src/run",
  testMatch: "**/*.ts",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,
  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-report", open: "never" }],
    [
      "allure-playwright",
      {
        detail: false,
        suiteTitle: false,

        categories: [
          {
            name: "Outdated tests",
            messageRegex: ".*FileNotFound.*",
          },
        ],

        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
        },
      },
    ],
  ],
  timeout: 60000,
  use: {
    baseURL: BASE_URL,
    headless: !!process.env.CI,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    launchOptions: {
      slowMo: process.env.CI ? 0 : 50,
    },
  },
  projects: [
    {
      name: "chromium vv",
      use: { ...devices["Desktop Chrome"] },
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
