import { test, expect } from '../fixtures/pages';
import { ROW_COUNT, ROWS_100 } from '../pages/data/testData';

test.describe('New Page Table', () => {
  test('Table should be visible', async ({ newPage }) => {
    const rowCount = await newPage.getTable().rowCount();

    expect(rowCount).toEqual(ROW_COUNT);
  });

  test('Validate that EXACTLY the first 100 articles are sorted from newest to oldest', async ({
    newPage, log
  }) => {
    const table = newPage.getTable();
    const footer = newPage.getFooter();

    let reachedLimit = false;
    let previousTime = null;

    while (!reachedLimit) {
      const rowCount = await table.rowCount();

      for (let i = 0; i < rowCount; i++) {
        const rank = await table.getRank(i);

        if (rank > ROWS_100) {
          reachedLimit = true;
          break;
        }

        const currentTime = await table.getTimestamp(i);

        if (previousTime !== null) {
          expect(currentTime).toBeLessThanOrEqual(previousTime);
        }

        previousTime = currentTime;
      }

      if (!reachedLimit) {
        await footer.loadNextRows(table);
      }
    }
  });
});
