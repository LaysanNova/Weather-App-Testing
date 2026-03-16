import { test, expect } from '../fixtures/pages';
import { ROW_COUNT } from '../pages/data/testData';

test.describe('New Page Table', () => {
  test('table should be visible', async ({ newPage }) => {
    const rowCount = await newPage.tableRows.getRowCount();

    newPage.logger.info(`Row count: ${rowCount}`);

    expect(rowCount).toEqual(ROW_COUNT);
  });
});
