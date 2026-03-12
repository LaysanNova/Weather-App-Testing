import { BasePage } from './BasePage';

export class Comments extends BasePage {
  constructor(page: any) {
    super(page, '/newcomments');
  }
}
