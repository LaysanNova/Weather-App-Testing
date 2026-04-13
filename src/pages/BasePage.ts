
import { Page } from '@playwright/test';
import logger from '../utils/logger';
import TableComponent from "../components/table.component";
import MenuComponent from "../components/menu.component";
import FooterComponent from "../components/footer.component";

export class BasePage {
  private readonly page: Page;
  private readonly menu: MenuComponent;
  private readonly footer: FooterComponent;
  private readonly tableRows: TableComponent;
  protected log;

  constructor(page: any) {
    this.page = page;
    this.menu = new MenuComponent(page);
    this.footer = new FooterComponent(page);
    this.tableRows = new TableComponent(page);
    this.log = logger.child({
      page: this.constructor.name,
    });
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
