const { Builder, By, until } = require("selenium-webdriver");
var should = require("chai").should();
var addContext = require("mochawesome/addContext");
const driver = new Builder()
            .forBrowser("chrome")
            .build();

describe("Create Role Permissions", function () {
  afterEach(function () {
    let imageFileName = this.currentTest.title + ".jpeg";
    driver.takeScreenshot().then(function (image) {
        require("fs").writeFileSync(
        "./mochawesome-report/screenshots/role-permissions/" + imageFileName,
        image,
        "base64"
        );
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
        await driver.findElement(By.className("create-user")).click();
        await driver.sleep(1000);
    });

    it("PRC01 - Permission role creation success", async function () {
        await driver.findElement(By.id("mat-select-value-5")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id('mat-option-29')).click();
        await driver.findElement(By.id("mat-select-value-7")).click();
        await driver.sleep(2000);
        await driver.findElement(By.id('mat-option-26')).click();
        await driver.sleep(2000);
        await driver.findElement(By.className("main-button mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base")).click();
        await driver.sleep(2000);
        await driver.wait(until.elementLocated(By.className('success-snackbar')), 3000)
        .getText()
        .then(function(txt){
            console.log("PRC01 - Resultado esperado: PermissionRole created successfully")
            console.log("PRC01 - Resultado obtenido: " + txt);
            txt.should.includes("PermissionRole created successfully");
        });        
    });
    
    it ("PRC02 - Create permission role lacks role", async function () {
        await driver.get("http://localhost:4200/permission");
        await driver.findElement(By.className("create-user")).click();
        await driver.sleep(1000);
        await driver.findElement(By.className("main-button mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base")).click();
        await driver.sleep(1000);
        await driver.findElement(By.id('mat-mdc-hint-0'))
        .getText()
        .then(function(txt){
            console.log("PRC02 - Resultado esperado: Field ROLE_ID_IN is required")
            console.log("PRC02 - Resultado obtenido: " + txt);
            txt.should.includes("Field ROLE_ID_IN is required");   
        });
    }),

    it ("PRC03 - Create permission role lacks permission", async function () {
        await driver.get("http://localhost:4200/permission");
        await driver.findElement(By.className("create-user")).click();
        await driver.sleep(1000);
        await driver.findElement(By.className("main-button mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base")).click();
        await driver.sleep(1000);
        await driver.findElement(By.id('mat-mdc-hint-1'))
        .getText()
        .then(function(txt){
            console.log("PRC03 - Resultado esperado: Field PERMISSION_ID_IN is required")
            console.log("PRC03 - Resultado obtenido: " + txt);
            txt.should.includes("Field PERMISSION_ID_IN is required");   
        });
    }),
    it("PRC04 - Create permission role lacks parameters", async function () {
        await driver.get("http://localhost:4200/permission");
        await driver.findElement(By.className("create-user")).click();
        await driver.sleep(1000);
        await driver.findElement(By.className("main-button mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base")).click();
        await driver.sleep(1000);

        const roleHint = await driver.findElement(By.className("mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted")).getText();
        const permissionHint = await driver.findElement(By.id('mat-mdc-hint-1')).getText();

        console.log("PRC04 - Resultado esperado para PERMISSION_ID_IN: Field PERMISSION_ID_IN is required");
        console.log("PRC04 - Resultado obtenido para PERMISSION_ID_IN: " + permissionHint);
        permissionHint.should.includes("Field PERMISSION_ID_IN is required");
        
        console.log("PRC04 - Resultado esperado para ROLE_ID_IN: Field ROLE_ID_IN is required");
        console.log("PRC04 - Resultado obtenido para ROLE_ID_IN: " + roleHint);
        roleHint.should.includes("Field ROLE_ID_IN is required");
    }),

    it ("PRC05 - Create an existing permission role", async function () {
        await driver.get("http://localhost:4200/permission");
        await driver.findElement(By.className("create-user")).click();
        await driver.sleep(1000);
        await driver.findElement(By.id("mat-select-value-5")).click();
        await driver.sleep(3000);
        await driver.findElement(By.id('mat-option-29')).click();
        await driver.findElement(By.id("mat-select-value-7")).click();
        await driver.sleep(2000);
        await driver.findElement(By.id('mat-option-26')).click();
        await driver.sleep(1000);
        await driver.findElement(By.className("main-button mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base")).click();
        await driver.sleep(1000);
        await driver.wait(until.elementLocated(By.className('failure-snackbar')), 3000)
        .getText()
        .then(function(txt){
            console.log("PRC05 - Resultado esperado: This role already has the entered permission")
            console.log("PRC05 - Resultado obtenido: " + txt);
            txt.should.includes('This role already has the entered permission');
        });        
    });
});



