import { test, expect } from '../fixtures/pages';
import { ROW_COUNT, ROWS_100 } from '../pages/data/testData';
import { getUnixTimestamp } from '../utils/dateUtils';

test.describe('New Page Table', () => {
  test('Table should be visible', async ({ newPage }) => {
    const rowCount = await newPage.getTable().getRowCount();

    newPage.logger.info(`Row count: ${rowCount}`);

    expect(rowCount).toEqual(ROW_COUNT);
  });

  test('Validate that EXACTLY the first 100 articles are sorted from newest to oldest', async ({
    newPage,
  }) => {
    let rank;
    let reachedLimit = false;
    let previousTime: number | null = null;

    while (!reachedLimit) {
      let rowCount = await newPage.getTable().getRowCount();
      for (let i = 0; i < rowCount; i++) {
        rank = Number(await newPage.getTable().getRank(i).textContent());

        if (rank > ROWS_100) {
          reachedLimit = true;
          break;
        }

        const age = newPage.getTable().getAge(i);
        await test.step(`Row ${rank}`, async () => {
          newPage.logger.info(
            `Row ${i + 1}: Rank = ${await newPage.getTable().getRank(i).textContent()} | Age = ${await age.textContent()}`,
          );
        });

        const currentTime = getUnixTimestamp(await newPage.getTable().gettimestamps(age));

        await test.step(`Check if ${currentTime} <= ${previousTime} `, async () => {
          if (previousTime !== null) {
            expect(currentTime).toBeLessThanOrEqual(previousTime);
          }
        });
        previousTime = currentTime;
      }

      if (!reachedLimit) {
        await test.step(`Click 'More' Button`, async () => {
          await newPage.getFooter().clickMoreBtn();
        });
      }

      newPage.logger.info(`After clicking more: row count = ${rowCount}`);
    }
  });
});
