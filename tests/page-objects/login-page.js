export class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }

  async goTo() {
    await this.driver.get("http://localhost:3000/auth/login");
  }
}
