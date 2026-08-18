import { Page } from "@playwright/test";

export class ProductsPage {

    constructor(private page: Page) {}

    async addBackpack() {
        await this.page
            .locator("#add-to-cart-sauce-labs-backpack")
            .click();
    }

    async goToCart() {
        await this.page
            .locator(".shopping_cart_link")
            .click();
    }
}
