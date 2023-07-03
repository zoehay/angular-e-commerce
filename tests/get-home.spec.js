const { By, Builder, Browser } = require("selenium-webdriver");
const { suite } = require("selenium-webdriver/testing");
const assert = require("assert");

suite(
  function (env) {
    describe("First script", function () {
      this.timeout(30000);
      let driver;
      let url = "http://localhost:4200";

      before(async function () {
        driver = await new Builder().forBrowser("chrome").build();
      });

      after(async () => await driver.quit());

      it("First Selenium script", async function () {
        await driver.get(url);

        let title = await driver.getTitle();
        assert.equal("Home", title);
      });
    });
  },
  { browsers: [Browser.CHROME, Browser.FIREFOX] }
);
