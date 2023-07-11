import { By, Builder, Browser } from "selenium-webdriver";

export class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }

  async goTo() {
    await this.driver.get("http://localhost:4200/auth/login");
  }

  async login() {
    let emailInput = await this.driver.findElement(By.id("email"));
    let passwordInput = await this.driver.findElement(By.id("password"));
    let loginButton = await this.driver.findElement(By.id("submit"));
    await emailInput.sendKeys("john@email");
    await passwordInput.sendKeys("stuff");
    await loginButton.click();
  }
}
