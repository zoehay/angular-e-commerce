import { By, Builder, Browser } from "selenium-webdriver";
import assert from "assert";
import { LoginPage } from "/Users/zoehay/Projects/angular-e-commerce/tests/page-objects/login-page.js";

describe("Login page", async function () {
  this.timeout(30000);
  let driver;
  let loginPage;

  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async () => await driver.quit());

  it("Gets the login page", async () => {
    loginPage = new LoginPage(driver);
    await loginPage.goTo();

    let loginTitle = await loginPage.driver.getTitle();
    assert.equal("Login", loginTitle);
  });

  it("Logs in the user", async () => {
    await loginPage.login();
  });
});
