import { BasePage } from './BasePage';
import { MenuComponent } from '../components/menu.component';
import { TableHeaderComponent } from '../components/table-header.component';
import { TableRowsComponent } from '../components/table-rows.component';
import { HackerNewsPage } from './HackerNewsPage';

export class NewPage extends BasePage {
  readonly menu: MenuComponent;
  readonly tableHeader: TableHeaderComponent;
  readonly tableRows: TableRowsComponent;

  constructor(page: any) {
    super(page, '/newest');
    this.menu = new MenuComponent(page);
    this.tableHeader = new TableHeaderComponent(page);
    this.tableRows = new TableRowsComponent(page);
  }

  async goTo() {
    const homePage = new HackerNewsPage(this.page);
    await homePage.navigate();
    await this.menu.goToNewLink();
  }
}
