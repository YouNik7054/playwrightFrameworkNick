import { test } from '../fixtures/test-base.js';

test('Verify Playwright website title', async ({ homePage, docsPage}) => {
  await homePage.navigateTo('/');
  await homePage.verifyUrlContains('https://playwright.dev/');
  await docsPage.verifyDocsHeading('Playwright');
});
