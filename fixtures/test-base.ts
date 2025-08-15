import { test as baseTest } from '@playwright/test';
import { HomePage } from '../pages/home.page.js';
import { DocsPage } from '../pages/docs.page.js';

type MyFixtures = {
  homePage: HomePage;
  docsPage: DocsPage;
};

export const test = baseTest.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  docsPage: async ({ page }, use) => {
    await use(new DocsPage(page));
  }
});
