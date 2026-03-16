import { Page, Locator } from '@playwright/test';

export class TableRowsComponent {
    readonly page: Page;
    private readonly storyRows: Locator;

    constructor(page: Page) {
        this.page = page;
        this.storyRows = page
            .locator('#bigbox tr')
            .filter({ has: page.locator('.titleline') });
    }

    getRowCount() {
        return this.storyRows.count();
    }

    getTitle(index: number): Locator {
        return this.storyRows
            .nth(index)
            .locator('.titleline');
    }

    async clickTitleLink(index: number) {
        await this.storyRows
            .nth(index)
            .locator('.titleline a').first().click();
    }

    getSubline(rowIndex: number): Locator {
        const titleRow = this.storyRows.nth(rowIndex);
        const sublineRow = titleRow.locator('xpath=following-sibling::tr[1]');
        return sublineRow.locator('.subline');
    }

    async getRow(rowIndex: number): Promise<{ title: Locator | null; subline: Locator | null }> {
        return {
            title: this.getTitle(rowIndex),
            subline: this.getSubline(rowIndex),
        };
    }
}
