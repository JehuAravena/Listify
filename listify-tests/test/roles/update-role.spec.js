const { Builder, By, until } = require("selenium-webdriver");
var should = require("chai").should();
var addContext = require("mochawesome/addContext");
const driver = new Builder()
            .forBrowser("chrome")
            .build();

describe("Update Role", function () {
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
    addContext(this, "./screenshots/role" + imageFileName);
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
    it ("RU01 - Update a role sucess", async function () {
        await driver.findElement(By.css('#edit-column-td4 .pen-edit-btn')).click();
        await driver.sleep(2000);
        await driver.findElement(By.id("mat-input-1")).sendKeys("ROLE_CHANGED");
        await driver.findElement(By.id("mat-input-2")).sendKeys("DESCRIPTION_CHANGED");
        await driver.sleep(2000);
        await driver.findElement(By.className("main-button")).click();
        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.className('success-snackbar')), 3000)
        .getText()
        .then(function(txt){
            console.log("RU01 - Resultado esperado: Role updated")
            console.log("RU01 - Resultado obtenido: " + txt);
            txt.should.includes("Role updated");
        });
    }),
    it ("RU02 - Update a role with lacks role name", async function () {
        await driver.get("http://localhost:4200/role");
        await driver.sleep(1000);
        await driver.findElement(By.css('#edit-column-td4 .pen-edit-btn')).click();
        await driver.sleep(2000);
        await driver.findElement(By.id("mat-input-1")).sendKeys("");
        await driver.findElement(By.id("mat-input-2")).sendKeys("DESCRIPTION_CHANGED_1");
        await driver.sleep(2000);
        await driver.findElement(By.className("main-button")).click();
        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.className('success-snackbar')), 3000)
        .getText()
        .then(function(txt){
            console.log("RU02 - Resultado esperado: Role updated")
            console.log("RU02 - Resultado obtenido: " + txt);
            txt.should.includes("Role updated");
        });
    });
    it ("RU03 - Update a role with lacks role description", async function () {
        await driver.get("http://localhost:4200/role");
        await driver.sleep(1000);
        await driver.findElement(By.css('#edit-column-td4 .pen-edit-btn')).click();
        await driver.sleep(2000);
        await driver.findElement(By.id("mat-input-1")).sendKeys("ROLE_CHANGED_1");
        await driver.findElement(By.id("mat-input-2")).sendKeys("");
        await driver.sleep(2000);
        await driver.findElement(By.className("main-button")).click();
        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.className('success-snackbar')), 3000)
        .getText()
        .then(function(txt){
            console.log("RU03 - Resultado esperado: Role updated")
            console.log("RU03 - Resultado obtenido: " + txt);
            txt.should.includes("Role updated");
        });
    }),
    it ("RU04 - Update role Admin", async function () { 
        await driver.get("http://localhost:4200/role");
        await driver.sleep(1000);
        await driver.findElement(By.css('#edit-column-td1 .pen-edit-btn')).click();
        await driver.sleep(2000);
        await driver.findElement(By.id("mat-input-1")).sendKeys("ROLE_CHANGED_2");
        await driver.findElement(By.id("mat-input-2")).sendKeys("DESCRIPTION_CHANGED_2");
        await driver.sleep(2000);
        await driver.findElement(By.className("main-button")).click();
        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.className('failure-snackbar')), 3000)
        .getText()
        .then(function(txt){
            console.log("RU04 - Resultado esperado: Roles with ID 1 and 2 cannot be edited")
            console.log("RU04 - Resultado obtenido: " + txt);
            txt.should.includes("Roles with ID 1 and 2 cannot be edited");
        });
    }),
    it ("RU05 - Update role Player", async function () {
        await driver.get("http://localhost:4200/role");
        await driver.sleep(1000);
        await driver.findElement(By.css('#edit-column-td2 .pen-edit-btn')).click();
        await driver.sleep(2000);
        await driver.findElement(By.id("mat-input-1")).sendKeys("ROLE_CHANGED_3");
        await driver.findElement(By.id("mat-input-2")).sendKeys("DESCRIPTION_CHANGED_3");
        await driver.sleep(2000);
        await driver.findElement(By.className("main-button")).click();
        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.className('failure-snackbar')), 3000)
        .getText()
        .then(function(txt){
            console.log("RU05 - Resultado esperado: Roles with ID 1 and 2 cannot be edited")
            console.log("RU05 - Resultado obtenido: " + txt);
            txt.should.includes("Roles with ID 1 and 2 cannot be edited");
        });
    }),
    it ("RU06 - update role only with 2 letters on role name", async function () {
        await driver.get("http://localhost:4200/role");
        await driver.sleep(1000);
        await driver.findElement(By.css('#edit-column-td4 .pen-edit-btn')).click();
        await driver.sleep(2000);
        await driver.findElement(By.id("mat-input-1")).sendKeys("RO");
        await driver.findElement(By.id("mat-input-2")).sendKeys("DESCRIPTION_CHANGED_4");
        await driver.sleep(2000);
        await driver.findElement(By.className("main-button")).click();
        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.id("mat-mdc-hint-0")), 3000)
        .getText()
        .then(function(txt){
            console.log("RU06 - Resultado esperado: Field ROLE_NAME_IN must have at least 3 characters")
            console.log("RU06 - Resultado obtenido: " + txt);
            txt.should.includes("Field ROLE_NAME_IN must have at least 3 characters");
        });
    }
    ),
    it ("RU07 - update role only with 2 letters on role description", async function () {
        await driver.get("http://localhost:4200/role");
        await driver.sleep(1000);
        await driver.findElement(By.css('#edit-column-td4 .pen-edit-btn')).click();
        await driver.sleep(2000);
        await driver.findElement(By.id("mat-input-1")).sendKeys("ROLE_CHANGED_4");
        await driver.findElement(By.id("mat-input-2")).sendKeys("RO");
        await driver.sleep(2000);
        await driver.findElement(By.className("main-button")).click();
        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.id("mat-mdc-hint-0")), 3000)
        .getText()
        .then(function(txt){
            console.log("RU07 - Resultado esperado: Field ROLE_DESCRIPTION_IN must have at least 3 characters")
            console.log("RU07 - Resultado obtenido: " + txt);
            txt.should.includes("Field ROLE_DESCRIPTION_IN must have at least 3 characters");
        });
    }),
    it ("RU08 - update role with 50 letters on role name", async function () {
        await driver.get("http://localhost:4200/role");
        await driver.sleep(1000);
        await driver.findElement(By.css('#edit-column-td4 .pen-edit-btn')).click();
        await driver.sleep(2000);
        await driver.findElement(By.id("mat-input-1")).sendKeys("ROLE_CHANGED_5ROLE_CHANGED_5ROLE_CHANGED_5ROLE_CHANGED_5ROLE_CHANGED_5");
        await driver.findElement(By.id("mat-input-2")).sendKeys("DESCRIPTION_CHANGED_5");
        await driver.sleep(2000);
        await driver.findElement(By.className("main-button")).click();
        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.id("mat-mdc-hint-0")), 3000)
        .getText()
        .then(function(txt){
            console.log("RU08 - Resultado esperado: Field ROLE_NAME_IN must have a maximum of 50 characters")
            console.log("RU08 - Resultado obtenido: " + txt);
            txt.should.includes("Field ROLE_NAME_IN must have a maximum of 50 characters");
        });
    }),
    it ("RU09 - update role with 256 letters on role description", async function () {
        await driver.get("http://localhost:4200/role");
        await driver.sleep(1000);
        await driver.findElement(By.css('#edit-column-td4 .pen-edit-btn')).click();
        await driver.sleep(2000);
        await driver.findElement(By.id("mat-input-1")).sendKeys("ROLE_CHANGED_6");
        await driver.findElement(By.id("mat-input-2")).sendKeys("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        await driver.sleep(2000);
        await driver.findElement(By.className("main-button")).click();
        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.id("mat-mdc-hint-0")), 3000)
        .getText()
        .then(function(txt){
            console.log("RU09 - Resultado esperado: Field ROLE_DESCRIPTION_IN must have a maximum of 255 characters")
            console.log("RU09 - Resultado obtenido: " + txt);
            txt.should.includes("Field ROLE_DESCRIPTION_IN must have a maximum of 255 characters");
        });
    });
});