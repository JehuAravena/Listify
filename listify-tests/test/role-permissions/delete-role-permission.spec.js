const { Builder, By, until } = require("selenium-webdriver");
var should = require("chai").should();
var addContext = require("mochawesome/addContext");
const driver = new Builder()
            .forBrowser("chrome")
            .build();

describe("Delete Role Permissions", function () {
    afterEach(function () {
        let imageFileName = this.currentTest.title + ".jpeg";
        driver.takeScreenshot().then(function (image) {
            require("fs").writeFileSync(
            "./mochawesome-report/screenshots/role-permissions/" + imageFileName,
            image,
            "base64");
        });
        addContext(this, "A continuación imagen del resultado de la prueba.");
        addContext(this, "./screenshots/role-permissions/" + imageFileName);
        });
        after(function () {
        driver.quit();
        });
        before(async function () {
            await driver.get("http://localhost:4200/login");
            await driver.findElement(By.id("mat-input-0")).sendKeys("ADMIN@EMAIL.COM");
            await driver.findElement(By.id("mat-input-1")).sendKeys("789012");
            await driver.findElement(By.className("login-button")).click();
            await driver.sleep(1000);
            await driver.get("http://localhost:4200/permission");
            await driver.sleep(1000);
        });

    it("PRD01 - Permission role deletion success", async function () {
        await driver.findElement(By.id('mat-select-value-1')).click();
        await driver.sleep(1000);
        await driver.findElement(By.id('mat-option-4')).click();
        await driver.sleep(1000);
        await driver.findElement(By.className("mat-icon notranslate user-delete-btn material-icons mat-ligature-font mat-icon-no-color")).click();
        await driver.sleep(1000);
        await driver.findElement(By.className("confirm-main-button")).click();
        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 3000)
        .getText()
        .then(function(txt){
            console.log("PRD01 - Resultado esperado: Permission role successfully deleted.")
            console.log("PRD01 - Resultado obtenido: " + txt);
            txt.should.includes("Permission role successfully deleted.");
        });
    });

});