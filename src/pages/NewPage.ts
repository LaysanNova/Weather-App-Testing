import { BasePage } from './BasePage';
import { MenuComponent } from '../components/menu.component';
import { TableHeaderComponent } from '../components/table/table-header.component';
import { TableRowsComponent } from '../components/table/table-rows.component';
import { HackerNewsPage } from './HackerNewsPage';
import { FooterComponent } from '../components/footer.component';

export class NewPage extends BasePage {
  private readonly menu: MenuComponent;
  private readonly footer: FooterComponent;
  private readonly tableHeader: TableHeaderComponent;
  private readonly table: TableRowsComponent;

  constructor(page: any) {
    super(page, '/newest');
    this.menu = new MenuComponent(page);
    this.footer = new FooterComponent(page);
    this.tableHeader = new TableHeaderComponent(page);
    this.table = new TableRowsComponent(page);
  }

  async goTo() {
    const homePage = new HackerNewsPage(this.page);
    await homePage.navigate();
    await this.menu.goToNewLink();
  }

  getMenu(): MenuComponent {
    return this.menu;
  }

  getTable(): TableRowsComponent {
    return this.table;
  }

  getFooter(): FooterComponent {
    return this.footer;
  }
}
