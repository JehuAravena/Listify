const { Builder, By, until } = require("selenium-webdriver");
var should = require("chai").should();
var addContext = require("mochawesome/addContext");
const driver = new Builder()
            .forBrowser("chrome")
            .build();

describe("Create Role", function () {
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
        await driver.findElement(By.className("create-user")).click();
        await driver.sleep(2000);
    });

    it ("RC01 - Role creation success", async function () {
        await driver.findElement(By.id("mat-input-1")).sendKeys("ROLE_DUMMY_2");
        await driver.sleep(1000);
        await driver.findElement(By.id("mat-input-2")).sendKeys("Dummyrole2");
        await driver.sleep(1000);
        await driver.findElement(By.className("main-button mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base")).click();
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.className("success-snackbar")), 3000).getText()
        .then(function(txt){
            console.log("RC01 - Resultado esperado: Role created successfully")
            console.log("RC01 - Resultado obtenido: " + txt);
            txt.should.includes("Role created successfully");
        });
    }),
    it ("RC02 - Role creation lacks name", async function () {
        await driver.get("http://localhost:4200/role");
        await driver.findElement(By.className("create-user")).click();
        await driver.sleep(1000);
        await driver.findElement(By.id("mat-input-1")).sendKeys("");
        await driver.sleep(1000);
        await driver.findElement(By.id("mat-input-2")).sendKeys("Dummyrole3");
        await driver.sleep(1000);
        await driver.findElement(By.className("main-button mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base")).click();
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.id("mat-mdc-hint-0")), 3000)
        .getText()
        .then(function(txt){
            console.log("RC02 - Resultado esperado: Field ROLE_NAME_IN is required")
            console.log("RC02 - Resultado obtenido: " + txt);
            txt.should.includes("Field ROLE_NAME_IN is required");
        });
    }),

    it ("RC03 - Role creation lacks description", async function () {
        await driver.get("http://localhost:4200/role");
        await driver.sleep(1000);
        await driver.findElement(By.className("create-user")).click();
        await driver.sleep(1000);
        await driver.findElement(By.id("mat-input-1")).sendKeys("ROLE_DUMMY_4");
        await driver.sleep(1000);
        await driver.findElement(By.id("mat-input-2")).sendKeys("");
        await driver.sleep(1000);
        await driver.findElement(By.className("main-button mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base")).click();
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.id("mat-mdc-hint-0")), 3000)
        .getText()
        .then(function(txt){
            console.log("RC03 - Resultado esperado: Field ROLE_DESCRIPTION_IN is required")
            console.log("RC03 - Resultado obtenido: " + txt);
            txt.should.includes("Field ROLE_DESCRIPTION_IN is required");
        });
    });
    it ("RC04 - Role creation lacks parameters", async function () {
        await driver.get("http://localhost:4200/role");
        await driver.sleep(1000);
        await driver.findElement(By.className("create-user")).click();
        await driver.sleep(1000);
        await driver.findElement(By.className("main-button mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base")).click();
        await driver.sleep(2000);

        const nameHint = await driver.findElement(By.id("mat-mdc-hint-0")).getText();
        const descriptionHint = await driver.findElement(By.id("mat-mdc-hint-1")).getText();

        console.log("RC04 - Resultado esperado: Field ROLE_NAME_IN is required")
        console.log("RC04 - Resultado obtenido: " + nameHint);
        nameHint.should.includes("Field ROLE_NAME_IN is required");

        console.log("RC04 - Resultado esperado: Field ROLE_DESCRIPTION_IN is required")
        console.log("RC04 - Resultado obtenido: " + descriptionHint);
        descriptionHint.should.includes("Field ROLE_DESCRIPTION_IN is required");
    }),
    it ("RC05 - Create role only with 2 letters in role name", async function () {
        await driver.get("http://localhost:4200/role");
        await driver.findElement(By.className("create-user")).click();
        await driver.sleep(1000);
        await driver.findElement(By.id("mat-input-1")).sendKeys("RO");
        await driver.sleep(1000);
        await driver.findElement(By.id("mat-input-2")).sendKeys("Dummyrole3");
        await driver.sleep(1000);
        await driver.findElement(By.className("main-button mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base")).click();
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.id("mat-mdc-hint-0")), 3000)
        .getText()
        .then(function(txt){
            console.log("RC05 - Resultado esperado: Field ROLE_NAME_IN must have at least 3 characters")
            console.log("RC05 - Resultado obtenido: " + txt);
            txt.should.includes("Field ROLE_NAME_IN must have at least 3 characters");
        });
    }),
    it ("RC06 - Create role only with 2 letters in role description", async function () {
        await driver.get("http://localhost:4200/role");
        await driver.findElement(By.className("create-user")).click();
        await driver.sleep(1000);
        await driver.findElement(By.id("mat-input-1")).sendKeys("Dummy_role_4");
        await driver.sleep(1000);
        await driver.findElement(By.id("mat-input-2")).sendKeys("ro");
        await driver.sleep(1000);
        await driver.findElement(By.className("main-button mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base")).click();
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.id("mat-mdc-hint-0")), 3000)
        .getText()
        .then(function(txt){
            console.log("RC06 - Resultado esperado: Field ROLE_DESCRIPTION_IN must have at least 3 characters")
            console.log("RC06 - Resultado obtenido: " + txt);
            txt.should.includes("Field ROLE_DESCRIPTION_IN must have at least 3 characters");
        });
    }),
    it ("RC07 - Create role with 51 letters in role name", async function () {
        await driver.get("http://localhost:4200/role");
        await driver.findElement(By.className("create-user")).click();
        await driver.sleep(1000);
        await driver.findElement(By.id("mat-input-1")).sendKeys("ROLE_DUMMY_4ROLE_DUMMY_4ROLE_DUMMY_4ROLE_DUMMY_4ROLE_DUMMY_4");
        await driver.sleep(1000);
        await driver.findElement(By.id("mat-input-2")).sendKeys("Dummyrole3");
        await driver.sleep(1000);
        await driver.findElement(By.className("main-button mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base")).click();
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.id("mat-mdc-hint-0")), 3000)
        .getText()
        .then(function(txt){
            console.log("RC07 - Resultado esperado: Field ROLE_NAME_IN must have a maximum of 50 characters ")
            console.log("RC07 - Resultado obtenido: " + txt);
            txt.should.includes("Field ROLE_NAME_IN must have a maximum of 50 characters");
        });
    }),
    it ("RC08 - Create role with 256 letters in role description", async function () {
        await driver.get("http://localhost:4200/role");
        await driver.findElement(By.className("create-user")).click();
        await driver.sleep(1000);
        await driver.findElement(By.id("mat-input-1")).sendKeys("Dummy_role_4");
        await driver.sleep(1000);
        await driver.findElement(By.id("mat-input-2"))
        .sendKeys("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        await driver.sleep(1000);
        await driver.findElement(By.className("main-button mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base")).click();
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.id("mat-mdc-hint-0")), 3000)
        .getText()
        .then(function(txt){
            console.log("RC08 - Resultado esperado: Field ROLE_DESCRIPTION_IN must have a maximum of 255 characters")
            console.log("RC08 - Resultado obtenido: " + txt);
            txt.should.includes("Field ROLE_DESCRIPTION_IN must have a maximum of 255 characters");
        });
    }),
    it ("RC09 - Create role with an existing role name", async function () {
        await driver.get("http://localhost:4200/role");
        await driver.findElement(By.className("create-user")).click();
        await driver.sleep(1000);
        await driver.findElement(By.id("mat-input-1")).sendKeys("Role_dummy_1");
        await driver.sleep(1000);
        await driver.findElement(By.id("mat-input-2")).sendKeys("Dummyrole3");
        await driver.sleep(1000);
        await driver.findElement(By.className("main-button mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base")).click();
        await driver.sleep(2000);

        await driver.wait(until.elementLocated(By.className("failure-snackbar")), 3000)
        .getText()
        .then(function(txt){
            console.log("RC09 - Resultado esperado: The role name already exists")
            console.log("RC09 - Resultado obtenido: " + txt);
            txt.should.includes("The role name already exists");
        });
    });
});