import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CheckoutPage } from "../pages/CheckoutPage";

let loginPage: LoginPage;
let productsPage: ProductsPage;
let checkoutPage: CheckoutPage;

Given(
    "el usuario tiene productos en el carrito",
    async function () {

        loginPage = new LoginPage(this.page);
        productsPage = new ProductsPage(this.page);
        checkoutPage = new CheckoutPage(this.page);

        await loginPage.navigate();

        await loginPage.login(
            "standard_user",
            "secret_sauce"
        );

        await productsPage.addBackpack();

        await productsPage.goToCart();
    }
);

When("completa el checkout", async function () {

    await checkoutPage.fillCheckout();
});

Then(
    "debe visualizar la confirmación de compra",
    async function () {

        const mensaje =
            await checkoutPage.getSuccessMessage();

        expect(mensaje)
            .toContain("Thank you");
    }
);
