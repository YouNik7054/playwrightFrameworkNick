import { expect } from '@playwright/test';
import { BasePage } from '../pages/base.page.js';

export class HomePage extends BasePage {

    async verifyUrlContains(text: string){
        await expect(this.page).toHaveURL("https://playwright.dev/");
    }
}