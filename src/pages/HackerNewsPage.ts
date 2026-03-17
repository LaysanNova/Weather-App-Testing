import { BasePage } from './BasePage';

import { MenuComponent } from '../components/menu.component';
import { TableHeaderComponent } from '../components/table/table-header.component';
import { TableRowsComponent } from '../components/table/table-rows.component';

export class HackerNewsPage extends BasePage {
  private readonly menu: MenuComponent;
  private readonly tableHeader: TableHeaderComponent;
  private readonly tableRows: TableRowsComponent;

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
