import { Page } from "@playwright/test";

export class CheckoutPage {

    constructor(private page: Page) {}

    async fillCheckout() {

        await this.page.click("#checkout");

        await this.page.fill(
            "#first-name",
            "Christian"
        );

        await this.page.fill(
            "#last-name",
            "Delgado"
        );

        await this.page.fill(
            "#postal-code",
            "15001"
        );

        await this.page.click("#continue");

        await this.page.click("#finish");
    }

    async getSuccessMessage() {

        return await this.page
            .locator(".complete-header")
            .textContent();
    }
}
