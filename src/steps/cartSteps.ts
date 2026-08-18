import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CartPage } from "../pages/CartPage";

let loginPage: LoginPage;
let productsPage: ProductsPage;
let cartPage: CartPage;

Given("el usuario inició sesión", async function () {

    loginPage = new LoginPage(this.page);
    productsPage = new ProductsPage(this.page);
    cartPage = new CartPage(this.page);

    await loginPage.navigate();

    await loginPage.login(
        "standard_user",
        "secret_sauce"
    );
});

When("agrega un producto al carrito", async function () {

    await productsPage.addBackpack();
});

Then("el carrito debe contener 1 producto", async function () {

    await productsPage.goToCart();

    const cantidad =
        await cartPage.getItemsCount();

    expect(cantidad).toBe(1);
});
