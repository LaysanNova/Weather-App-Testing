import { BasePage } from './BasePage';

export class CommentsPage extends BasePage {
  constructor(page: any) {
    super(page, '/newcomments');
  }
}
