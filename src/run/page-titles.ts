import { test, expect } from '../fixtures/pages';
import { pageTitles } from '../pages/data/pageTitles';

test.describe('Page Titles Validation', () => {
  for (const { label, key, expectedTitle } of pageTitles) {
    test(`${label} should have the correct title`, async ({ pages }) => {
      const pageObj = pages[key as keyof typeof pages];

      await test.step(`Navigate to ${label}`, async () => {
        await pageObj.navigate();
      });

      await test.step(`Check title of ${label}`, async () => {
        const actualTitle = await pageObj.getTitle();
        pageObj.logger.info(`${label} actual title: "${actualTitle}"`);
        expect(actualTitle).toBe(expectedTitle);
      });
    });
  }
});
