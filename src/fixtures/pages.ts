import { test as base } from '@playwright/test';
import { HackerNewsPage } from '../pages/HackerNewsPage';
import { NewPage } from '../pages/NewPage';
import { PastPage } from '../pages/PastPage';
import { CommentsPage } from '../pages/CommentsPage';
import { WelcomePage } from '../pages/WelcomePage';
import { ThreadsPage } from '../pages/ThreadsPage';

type PageFixtures = {
  pages: {
    hackerNews: HackerNewsPage;
    new: NewPage;
    past: PastPage;
    comments: CommentsPage;
    welcome: WelcomePage;
    threads: ThreadsPage;
  };

  hackerNews: HackerNewsPage;
  newPage: NewPage;
  pastPage: PastPage;
  comments: CommentsPage;
  welcome: WelcomePage;
  threadsPage: ThreadsPage;
};

export const test = base.extend<PageFixtures>({
  pages: async ({ page }, use) => {
    const pages: PageFixtures['pages'] = {
      hackerNews: new HackerNewsPage(page),
      new: new NewPage(page),
      past: new PastPage(page),
      comments: new CommentsPage(page),
      welcome: new WelcomePage(page),
      threads: new ThreadsPage(page),
    };

    await use(pages);
  },

  // Navigate to New page
  newPage: async ({ pages }, use) => {
    await pages.welcome.navigate();
    await pages.new.getMenu().goToNewLink();

    await use(pages.new);
  },

  // // Navigate to Past page
  // pastPage: async ({ pages }, use) => {
  //   await pages.welcome.navigate();
  //   await pages.past.menu.goToPast();
  //
  //   await use(pages.past);
  // },
  //
  // // Navigate to Threads page
  // threadsPage: async ({ pages }, use) => {
  //   await pages.welcome.navigate();
  //   await pages.threads.menu.goToThreads();
  //
  //   await use(pages.threads);
  // },
});

export const expect = test.expect;
