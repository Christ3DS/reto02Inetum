import { setWorldConstructor } from "@cucumber/cucumber";

export class CustomWorld {
    browser: any;
    page: any;
}

setWorldConstructor(CustomWorld);