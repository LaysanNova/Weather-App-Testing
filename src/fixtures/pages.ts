import { test as base } from './base';
import { WelcomePage } from '../pages/WelcomePage';
import { NewPage } from '../pages/NewPage';
import { ThreadsPage } from '../pages/ThreadsPage';
import { HackerNewsPage } from '../pages/HackerNewsPage';

type PageFixtures = {
  pages: {
    hackerNews: HackerNewsPage;
    new: NewPage;
    threads: ThreadsPage;
    welcome: WelcomePage;
  };
};

export const test = base.extend<PageFixtures>({
  pages: async ({ page }, use) => {
    const pages = {
      hackerNews: new HackerNewsPage(page),
      welcome: new WelcomePage(page),
      new: new NewPage(page),
      threads: new ThreadsPage(page),
    };
    await use(pages);
  },
});

export const expect = test.expect;
