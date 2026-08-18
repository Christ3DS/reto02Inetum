import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

let loginPage: LoginPage;

Given("el usuario está en login", async function () {

    console.log("EJECUTANDO LOGIN REAL");
    loginPage = new LoginPage(this.page);
    await loginPage.navigate();
});

When("ingresa credenciales válidas", async function () {

    await loginPage.login(
        "standard_user",
        "secret_sauce"
    );
    console.log("LOGIN EJECUTADO, INGRESÓ AL LOGIN");
});

Then("visualiza el inventario", async function () {

    await expect(this.page)
        .toHaveURL(/inventory/);
});

When("ingresa usuario bloqueado", async function () {

    await loginPage.login(
        "locked_out_user",
        "secret_sauce"
    );
    console.log("LOGIN EJECUTADO, USUARIO BLOQUEADO");
});

Then("visualiza mensaje de usuario bloqueado", async function () {

    const mensaje = await loginPage.getErrorMessage();

    expect(mensaje)
        .toContain("locked out");
});