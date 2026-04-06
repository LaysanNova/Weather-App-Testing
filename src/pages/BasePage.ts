import { MenuComponent } from '../components/menu.component';
import { FooterComponent } from '../components/footer.component';

import { Page } from '@playwright/test';
import { TableComponent } from '../components/table.component';

export class BasePage {
  private readonly page: Page;
  private readonly menu: MenuComponent;
  private readonly footer: FooterComponent;
  private readonly tableRows: TableComponent;

  constructor(page: any) {
    this.page = page;
    this.menu = new MenuComponent(page);
    this.footer = new FooterComponent(page);
    this.tableRows = new TableComponent(page);
  }

  getPage(): Page {
    return this.page;
  }

  getMenu(): MenuComponent {
    return this.menu;
  }

  getTable(): TableComponent {
    return this.tableRows;
  }

  getFooter(): FooterComponent {
    return this.footer;
  }

  getTitle() {
    return this.page.title();
  }
}
