const { Builder, By, until } = require("selenium-webdriver");
var should = require("chai").should();
var addContext = require("mochawesome/addContext");
const driver = new Builder()
            .forBrowser("chrome")
            .build();

describe("Delete Role", function () {
  afterEach(function () {
    let imageFileName = this.currentTest.title + ".jpeg";
    driver.takeScreenshot().then(function (image) {
        require("fs").writeFileSync(
        "./mochawesome-report/screenshots/role/" + imageFileName,
        image,
        "base64"
        );
    });
    addContext(this, "A continuación imagen del resultado de la prueba.");
    addContext(this, "./screenshots/role/" + imageFileName);
    });
    after(function () {
    driver.quit();
    });
    before(async function () {
        await driver.get("http://localhost:4200/login");
        await driver.findElement(By.id("mat-input-0")).sendKeys("ADMIN@EMAIL.COM");
        await driver.findElement(By.id("mat-input-1")).sendKeys("789012");
        await driver.findElement(By.className("login-button")).click();
        await driver.sleep(4000);
        await driver.get("http://localhost:4200/role");
        await driver.sleep(2000);
    });
    it ("RD01 - Delete a role sucess", async function () {
        const roleId = 3;
        const deleteButtonSelector = `#delete-column-td${roleId} .trashcan-btn`;
        await driver.wait(until.elementLocated(By.css(deleteButtonSelector)), 5000);
        const deleteButton = await driver.findElement(By.css(deleteButtonSelector));
        await deleteButton.click();
        await driver.sleep(2000);
        await driver.findElement(By.className("confirm-main-button")).click();
        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.className('success-snackbar')), 3000)
        .getText()
        .then(function(txt){
            console.log("RD01 - Resultado esperado: Role successfully deleted.")
            console.log("RD01 - Resultado obtenido: " + txt);
            txt.should.includes("Role successfully deleted.");
        });
    }),
    it ("RD02 - Delete role Admin", async function () {
        await driver.get("http://localhost:4200/role");
        await driver.sleep(1000);
        await driver.findElement(By.css('#delete-column-td1 .trashcan-btn')).click();
        await driver.sleep(2000);
        await driver.findElement(By.className("confirm-main-button")).click();
        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.className('failure-snackbar')), 3000)
        .getText()
        .then(function(txt){
            console.log("RD02 - Resultado esperado: Roles with ID 1 and 2 cannot be deleted")
            console.log("RD02 - Resultado obtenido: " + txt);
            txt.should.includes("Roles with ID 1 and 2 cannot be deleted");
        });
    }),
    it ("RD03 Delete role Player", async function () {
        await driver.get("http://localhost:4200/role");
        await driver.sleep(1000);
        await driver.findElement(By.css('#delete-column-td2 .trashcan-btn')).click();
        await driver.sleep(2000);
        await driver.findElement(By.className("confirm-main-button")).click();
        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.className('failure-snackbar')), 3000)
        .getText()
        .then(function(txt){
            console.log("RD03 - Resultado esperado: Roles with ID 1 and 2 cannot be deleted")
            console.log("RD03 - Resultado obtenido: " + txt);
            txt.should.includes("Roles with ID 1 and 2 cannot be deleted");
        });
    });
});