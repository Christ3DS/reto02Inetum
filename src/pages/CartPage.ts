import { Page } from "@playwright/test";

export class CartPage {

    constructor(private page: Page) {}

    async getItemsCount() {

        return await this.page
            .locator(".cart_item")
            .count();
    }
}
