import { expect } from "@playwright/test";
import { BasePage } from "../pages/base.page.js";

export class DocsPage extends BasePage {
    async verifyDocsHeading(heading: string){
        await expect(this.page.locator('h1')).toContainText(heading);
    }
}