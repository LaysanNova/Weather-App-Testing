import { BasePage } from './BasePage';

import { MenuComponent } from '../components/menu.component';
import { TableHeaderComponent } from '../components/table-header.component';
import { TableRowsComponent } from '../components/table-rows.component';

export class HackerNewsPage extends BasePage {
  readonly menu: MenuComponent;
  readonly tableHeader: TableHeaderComponent;
  readonly tableRows: TableRowsComponent;

  constructor(page: any) {
    super(page, '/news');
    this.menu = new MenuComponent(page);
    this.tableHeader = new TableHeaderComponent(page);
    this.tableRows = new TableRowsComponent(page);
  }

  async getTitle() {
    return this.page.title();
  }
}
