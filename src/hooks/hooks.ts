import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";

setDefaultTimeout(60000);

Before(async function () {

    console.log("INICIO BEFORE");
    this.browser = await chromium.launch({
        headless: false
    });

    console.log("BROWSER CREADO");
    this.page = await this.browser.newPage();
    console.log("PAGE CREADA");
});

After(async function () {

    console.log("INICIO AFTER");
    if (this.browser) {
        await this.browser.close();
    }
});
