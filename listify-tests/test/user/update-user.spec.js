const { Builder, By, until } = require("selenium-webdriver");
var should = require("chai").should();
var addContext = require("mochawesome/addContext");
const driver = new Builder()
            .forBrowser("chrome")
            .build();
        

describe("Update User", function(){
    afterEach(function(){
        let imageFileName = this.currentTest.title + '.jpeg';
        driver.takeScreenshot().then(
            function(image){
                require('fs').writeFileSync('./mochawesome-report/screenshots/user/' + imageFileName, image, 'base64');
            }
        )
        addContext(this, 'A continuación imagen del resultado de la prueba.');
        addContext(this, './screenshots/user/' + imageFileName);
    });
    after(function(){
        driver.quit();
    });
    describe("Update user from admin view", function(){
        before(async function(){
            await driver.get("http://localhost:4200/login");
            await driver.findElement(By.id('mat-input-0')).sendKeys('ADMIN@EMAIL.COM');
            await driver.findElement(By.id('mat-input-1')).sendKeys('789012');
            await driver.findElement(By.className('login-button')).click();
            await driver.sleep(3000);
            await driver.get("http://localhost:4200/user");
            await driver.sleep(1000);
            await driver.findElement(By.id('edit-column-td-3')).click();
        });
        it("USU01 - Update user name success", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('New Name Admin');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU01 - Resultado esperado: User updated successfully")
                    console.log("USU01 - Resultado obtenido: " + txt);
                    txt.should.includes("User updated successfully");
                });
        });
        it("USU02 - Update user lastname success", async function(){
            await driver.findElement(By.id('mat-input-2')).sendKeys('New Lastname Admin');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU02 - Resultado esperado: User updated successfully")
                    console.log("USU02 - Resultado obtenido: " + txt);
                    txt.should.includes("User updated successfully");
                });
        });
        it("USU03 - Update user nickname success", async function(){
            await driver.findElement(By.id('mat-input-3')).sendKeys('USERDUMMYTWOUPDATE');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU03 - Resultado esperado: User updated successfully")
                    console.log("USU03 - Resultado obtenido: " + txt);
                    txt.should.includes("User updated successfully");
                });
        });
        it("USU04 - Update user email success", async function(){
            await driver.findElement(By.id('mat-input-4')).sendKeys('USERDUMMYTWOUPDATE@email.com');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU04 - Resultado esperado: User updated successfully")
                    console.log("USU04 - Resultado obtenido: " + txt);
                    txt.should.includes("User updated successfully");
                });
        });
        it("USU05 - Update user password success", async function(){
            await driver.findElement(By.id('mat-input-5')).sendKeys('newPasswordAdmin');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU05 - Resultado esperado: User updated successfully")
                    console.log("USU05 - Resultado obtenido: " + txt);
                    txt.should.includes("User updated successfully");
                });
        });
        it("USU06 - Update user role success", async function(){
            await driver.findElement(By.className('mat-mdc-text-field-wrapper mdc-text-field ng-tns-c1205077789-9 mdc-text-field--filled')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-3')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU06 - Resultado esperado: User updated successfully")
                    console.log("USU06 - Resultado obtenido: " + txt);
                    txt.should.includes("User updated successfully");
                });
        });
        it("USU07 - Update user under min name", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('aa');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU07 - Resultado esperado: Field NAME_IN must have at least 3 characters")
                    console.log("USU07 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NAME_IN must have at least 3 characters");
                });
        });
        it("USU08 - Update user under min lastname", async function(){
            await driver.findElement(By.id('mat-input-2')).sendKeys('aa');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-1')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU08 - Resultado esperado: Field LASTNAME_IN must have at least 3 characters")
                    console.log("USU08 - Resultado obtenido: " + txt);
                    txt.should.includes("Field LASTNAME_IN must have at least 3 characters");
                });
        });
        it("USU09 - Update user under min nickname", async function(){
            await driver.findElement(By.id('mat-input-3')).sendKeys('aa');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-2')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU09 - Resultado esperado: Field NICKNAME_IN must have at least 3 characters")
                    console.log("USU09 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NICKNAME_IN must have at least 3 characters");
                });
        });
        it("USU10 - Update user under min email", async function(){
            await driver.findElement(By.id('mat-input-4')).sendKeys('aa');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-3')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU10 - Resultado esperado: Field EMAIL_IN must have at least 5 characters")
                    console.log("USU10 - Resultado obtenido: " + txt);
                    txt.should.includes("Field EMAIL_IN must have at least 5 characters");
                });
        });
        it("USU11 - Update user under min password", async function(){
            await driver.findElement(By.id('mat-input-5')).sendKeys('aa');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-4')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU11 - Resultado esperado: Field PASSWORD_IN must have at least 8 characters")
                    console.log("USU11 - Resultado obtenido: " + txt);
                    txt.should.includes("Field PASSWORD_IN must have at least 8 characters");
                });
        });
        it("USU12 - Update user over max name", async function(){
            await driver.sleep(3000);
            await driver.get("http://localhost:4200/user");
            await driver.sleep(1000);
            await driver.findElement(By.id('edit-column-td-3')).click();
            await driver.wait(until.elementLocated(By.id('mat-input-1')), 3000).sendKeys('dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU12 - Resultado esperado: Field NAME_IN must have a maximum of 50 characters")
                    console.log("USU12 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NAME_IN must have a maximum of 50 characters");
                });
        });
        it("USU13 - Update user over max lastname", async function(){
            await driver.sleep(3000);
            await driver.get("http://localhost:4200/user");
            await driver.sleep(1000);
            await driver.findElement(By.id('edit-column-td-3')).click();
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU13 - Resultado esperado: Field LASTNAME_IN must have a maximum of 50 characters")
                    console.log("USU13 - Resultado obtenido: " + txt);
                    txt.should.includes("Field LASTNAME_IN must have a maximum of 50 characters");
                });
        });
        it("USU14 - Update user over max nickname", async function(){
            await driver.sleep(3000);
            await driver.get("http://localhost:4200/user");
            await driver.sleep(1000);
            await driver.findElement(By.id('edit-column-td-3')).click();
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU14 - Resultado esperado: Field NICKNAME_IN must have a maximum of 50 characters")
                    console.log("USU14 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NICKNAME_IN must have a maximum of 50 characters");
                });
        });
        it("USU15 - Update user over max nickname", async function(){
            await driver.sleep(3000);
            await driver.get("http://localhost:4200/user");
            await driver.sleep(1000);
            await driver.findElement(By.id('edit-column-td-3')).click();
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy@email.com');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU15 - Resultado esperado: Field EMAIL_IN must have a maximum of 100 characters")
                    console.log("USU15 - Resultado obtenido: " + txt);
                    txt.should.includes("Field EMAIL_IN must have a maximum of 100 characters");
                });
        });
        it("USU16 - Update user over max nickname", async function(){
            await driver.sleep(3000);
            await driver.get("http://localhost:4200/user");
            await driver.sleep(1000);
            await driver.findElement(By.id('edit-column-td-3')).click();
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU16 - Resultado esperado: Field PASSWORD_IN must have a maximum of 50 characters")
                    console.log("USU16 - Resultado obtenido: " + txt);
                    txt.should.includes("Field PASSWORD_IN must have a maximum of 50 characters");
                });
        });
        it("USU17 - Update user name invalid", async function(){
            await driver.sleep(3000);
            await driver.get("http://localhost:4200/user");
            await driver.sleep(1000);
            await driver.findElement(By.id('edit-column-td-3')).click();
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy2');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU17 - Resultado esperado: Field NAME_IN can only contain letters and spaces")
                    console.log("USU17 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NAME_IN can only contain letters and spaces");
                });
        });
        it("USU18 - Update user lastname invalid", async function(){
            await driver.sleep(3000);
            await driver.get("http://localhost:4200/user");
            await driver.sleep(1000);
            await driver.findElement(By.id('edit-column-td-3')).click();
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy2');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU18 - Resultado esperado: Field LASTNAME_IN can only contain letters and spaces")
                    console.log("USU18 - Resultado obtenido: " + txt);
                    txt.should.includes("Field LASTNAME_IN can only contain letters and spaces");
                });
        });
        it("USU19 - Update user nickname invalid", async function(){
            await driver.sleep(3000);
            await driver.get("http://localhost:4200/user");
            await driver.sleep(1000);
            await driver.findElement(By.id('edit-column-td-3')).click();
            await driver.findElement(By.id('mat-input-3')).sendKeys('(dummy)');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU19 - Resultado esperado: Field NICKNAME_IN can only contain letters, numbers, dots, hyphens, and underscores")
                    console.log("USU19 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NICKNAME_IN can only contain letters, numbers, dots, hyphens, and underscores");
                });
        });
        it("USU20 - Update user email invalid", async function(){
            await driver.sleep(3000);
            await driver.get("http://localhost:4200/user");
            await driver.sleep(1000);
            await driver.findElement(By.id('edit-column-td-3')).click();
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummy@email.dummy');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU20 - Resultado esperado: Field EMAIL_IN is not a valid email")
                    console.log("USU20 - Resultado obtenido: " + txt);
                    txt.should.includes("Field EMAIL_IN is not a valid email");
                });
        });
        it("USU21 - Update user existing nickname", async function(){
            await driver.sleep(3000);
            await driver.get("http://localhost:4200/user");
            await driver.sleep(1000);
            await driver.findElement(By.id('edit-column-td-3')).click();
            await driver.sleep(2000);
            await driver.findElement(By.id('mat-input-3')).sendKeys('ADMINNICKNAME');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU21 - Resultado esperado: The user's nickname already exists")
                    console.log("USU21 - Resultado obtenido: " + txt);
                    txt.should.includes("The user's nickname already exists");
                });
        });
        it("USU22 - Update user existing email", async function(){
            await driver.sleep(3000);
            await driver.get("http://localhost:4200/user");
            await driver.sleep(1000);
            await driver.findElement(By.id('edit-column-td-3')).click();
            await driver.sleep(2000);
            await driver.findElement(By.id('mat-input-4')).sendKeys('ADMIN@EMAIL.COM');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU22 - Resultado esperado: The user's email already exists")
                    console.log("USU22 - Resultado obtenido: " + txt);
                    txt.should.includes("The user's email already exists");
                });
        });
        it("USU23 - Update user can not modify user", async function(){
            await driver.sleep(3000);
            await driver.get("http://localhost:4200/user");
            await driver.sleep(1000);
            await driver.findElement(By.id('edit-column-td-2')).click();
            await driver.sleep(2000);
            await driver.findElement(By.id('mat-input-3')).sendKeys('newDummyNick');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU23 - Resultado esperado: Cannot modify the user with ID 1 and/or 2")
                    console.log("USU23 - Resultado obtenido: " + txt);
                    txt.should.includes("Cannot modify the user with ID 1 and/or 2");
                });
        });
    });
    describe("Update user from user view", function(){
        before(async function(){
            await driver.sleep(3000);
            await driver.get("http://localhost:4200/user");
            await driver.sleep(1000);
            await driver.findElement(By.id('logout')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('confirm-main-button mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-0')).sendKeys('USERDUMMYTWO@email.com');
            await driver.findElement(By.id('mat-input-1')).sendKeys('USERDUMMYTWO');
            await driver.findElement(By.className('login-button')).click();
            await driver.sleep(3000);
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
        });
        it("USU24 - Update user nickname as user success", async function(){
            await driver.findElement(By.id('nick')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-0')).sendKeys('USERDUMMYTWO');
            await driver.findElement(By.id('mat-input-1')).sendKeys('USERDUMMYTWONICKNAME');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('confirm-main-button')).click();
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU24 - Resultado esperado: Nick updated successfully")
                    console.log("USU24 - Resultado obtenido: " + txt);
                    txt.should.includes("Nick updated successfully");
                });
        });
        it("USU25 - Update user nickname as user lacks old nickname field", async function(){
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
            await driver.findElement(By.id('nick')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-1')).sendKeys('settingsUpdatedNick');
            await driver.findElement(By.className('main-button')).click();
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU25 - Resultado esperado: Field OLD_NICKNAME_IN is required")
                    console.log("USU25 - Resultado obtenido: " + txt);
                    txt.should.includes("Field OLD_NICKNAME_IN is required");
                });
        });
        it("USU26 - Update user nickname as user lacks new nickname field", async function(){
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
            await driver.findElement(By.id('nick')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-0')).sendKeys('newNicknameAdmin');
            await driver.findElement(By.className('main-button')).click();
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU26 - Resultado esperado: Field NEW_NICKNAME_IN is required")
                    console.log("USU26 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NEW_NICKNAME_IN is required");
                });
        });
        it("USU27 - Update user nickname as user invalid old nickname", async function(){
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
            await driver.findElement(By.id('nick')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-0')).sendKeys('newNicknameAdmin!');
            await driver.findElement(By.id('mat-input-1')).sendKeys('settingsUpdateNickname');
            await driver.findElement(By.className('main-button')).click();
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU27 - Resultado esperado: Field OLD_NICKNAME_IN can only contain letters, numbers, dots, hyphens, and underscores")
                    console.log("USU27 - Resultado obtenido: " + txt);
                    txt.should.includes("Field OLD_NICKNAME_IN can only contain letters, numbers, dots, hyphens, and underscores");
                });
        });
        it("USU28 - Update user nickname as user invalid new nickname", async function(){
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
            await driver.findElement(By.id('nick')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-0')).sendKeys('newNicknameAdmin');
            await driver.findElement(By.id('mat-input-1')).sendKeys('settingsUpdateNickname!');
            await driver.findElement(By.className('main-button')).click();
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU28 - Resultado esperado: Field NEW_NICKNAME_IN can only contain letters, numbers, dots, hyphens, and underscores")
                    console.log("USU28 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NEW_NICKNAME_IN can only contain letters, numbers, dots, hyphens, and underscores");
                });
        });
        it("USU29 - Update user nickname as user under min oldNickname", async function(){
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
            await driver.findElement(By.id('nick')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-0')).sendKeys('aa');
            await driver.findElement(By.id('mat-input-1')).sendKeys('settingsUpdateNickname');
            await driver.findElement(By.className('main-button')).click();
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU29 - Resultado esperado: Field OLD_NICKNAME_IN must have at least 3 characters")
                    console.log("USU29 - Resultado obtenido: " + txt);
                    txt.should.includes("Field OLD_NICKNAME_IN must have at least 3 characters");
                });
        });
        it("USU30 - Update user nickname as user under min newNickname", async function(){
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
            await driver.findElement(By.id('nick')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-0')).sendKeys('newNicknameAdmin');
            await driver.findElement(By.id('mat-input-1')).sendKeys('aa');
            await driver.findElement(By.className('main-button')).click();
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU30 - Resultado esperado: Field NEW_NICKNAME_IN must have at least 3 characters")
                    console.log("USU30 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NEW_NICKNAME_IN must have at least 3 characters");
                });
        });
        it("USU31 - Update user nickname as user over max oldNickname", async function(){
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
            await driver.findElement(By.id('nick')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
            await driver.findElement(By.id('mat-input-1')).sendKeys('settingsUpdateNickname');
            await driver.findElement(By.className('main-button')).click();
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU31 - Resultado esperado: Field OLD_NICKNAME_IN must have a maximum of 50 characters")
                    console.log("USU31 - Resultado obtenido: " + txt);
                    txt.should.includes("Field OLD_NICKNAME_IN must have a maximum of 50 characters");
                });
        });
        it("USU32 - Update user nickname as user over max newNickname", async function(){
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
            await driver.findElement(By.id('nick')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-0')).sendKeys('newNicknameAdmin');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
            await driver.findElement(By.className('main-button')).click();
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU32 - Resultado esperado: Field NEW_NICKNAME_IN must have a maximum of 50 characters")
                    console.log("USU32 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NEW_NICKNAME_IN must have a maximum of 50 characters");
                });
        });
        it("USU33 - Update user nickname as user nickname already exists", async function(){
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
            await driver.findElement(By.id('nick')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-0')).sendKeys('USERDUMMYTWONICKNAME');
            await driver.findElement(By.id('mat-input-1')).sendKeys('ADMINNICKNAME');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('confirm-main-button')).click();
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU33 - Resultado esperado: Nick not updated: The user's nickname already exists")
                    console.log("USU33 - Resultado obtenido: " + txt);
                    txt.should.includes("Nick not updated: The user's nickname already exists");
                });
        });
        it("USU34 - Update user password as user success", async function(){
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
            await driver.findElement(By.id('pass')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-0')).sendKeys('USERDUMMYTWO');
            await driver.findElement(By.id('mat-input-1')).sendKeys('newPasswordSettings');
            await driver.findElement(By.id('mat-input-2')).sendKeys('newPasswordSettings');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('confirm-main-button')).click();
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU34 - Resultado esperado: Password updated successfully")
                    console.log("USU34 - Resultado obtenido: " + txt);
                    txt.should.includes("Password updated successfully");
                });
        });
        it("USU35 - Update user password as user lacks old password field", async function(){
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
            await driver.findElement(By.id('pass')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-1')).sendKeys('newPasswordSettingsDummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('newPasswordSettingsDummy');
            await driver.findElement(By.className('main-button')).click();
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU35 - Resultado esperado: Field OLD_PASSWORD_IN is required")
                    console.log("USU35 - Resultado obtenido: " + txt);
                    txt.should.includes("Field OLD_PASSWORD_IN is required");
                });
        });
        it("USU36 - Update user password as user lacks new password field", async function(){
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
            await driver.findElement(By.id('pass')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-0')).sendKeys('newPasswordSettings');
            await driver.findElement(By.id('mat-input-2')).sendKeys('newPasswordSettingsDummy');
            await driver.findElement(By.className('main-button')).click();
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU36 - Resultado esperado: Field NEW_PASSWORD_IN is required")
                    console.log("USU36 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NEW_PASSWORD_IN is required");
                });
        });
        it("USU37 - Update user password as user lacks confirm password field", async function(){
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
            await driver.findElement(By.id('pass')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-0')).sendKeys('newPasswordSettings');
            await driver.findElement(By.id('mat-input-1')).sendKeys('newPasswordSettingsDummy');
            await driver.findElement(By.className('main-button')).click();
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU37 - Resultado esperado: Field CONFIRM_PASSWORD_IN is required")
                    console.log("USU37 - Resultado obtenido: " + txt);
                    txt.should.includes("Field CONFIRM_PASSWORD_IN is required");
                });
        });
        it("USU38 - Update user password as user under min old password", async function(){
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
            await driver.findElement(By.id('pass')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-0')).sendKeys('aa');
            await driver.findElement(By.id('mat-input-1')).sendKeys('newPasswordSettingsDummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('newPasswordSettingsDummy');
            await driver.findElement(By.className('main-button')).click();
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU38 - Resultado esperado: Field OLD_PASSWORD_IN must have at least 8 characters")
                    console.log("USU38 - Resultado obtenido: " + txt);
                    txt.should.includes("Field OLD_PASSWORD_IN must have at least 8 characters");
                });
        });
        it("USU39 - Update user password as user over max old password", async function(){
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
            await driver.findElement(By.id('pass')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
            await driver.findElement(By.id('mat-input-1')).sendKeys('newPasswordSettingsDummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('newPasswordSettingsDummy');
            await driver.findElement(By.className('main-button')).click();
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU39 - Resultado esperado: Field OLD_PASSWORD_IN must have a maximum of 50 characters")
                    console.log("USU39 - Resultado obtenido: " + txt);
                    txt.should.includes("Field OLD_PASSWORD_IN must have a maximum of 50 characters");
                });
        });
        it("USU40 - Update user password as user under min new password", async function(){
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
            await driver.findElement(By.id('pass')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-0')).sendKeys('newPasswordSettings');
            await driver.findElement(By.id('mat-input-1')).sendKeys('aa');
            await driver.findElement(By.id('mat-input-2')).sendKeys('newPasswordSettingsDummy');
            await driver.findElement(By.className('main-button')).click();
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU40 - Resultado esperado: Field NEW_PASSWORD_IN must have at least 8 characters")
                    console.log("USU40 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NEW_PASSWORD_IN must have at least 8 characters");
                });
        });
        it("USU41 - Update user password as user over max new password", async function(){
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
            await driver.findElement(By.id('pass')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-0')).sendKeys('newPasswordSettings');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('newPasswordSettingsDummy');
            await driver.findElement(By.className('main-button')).click();
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU41 - Resultado esperado: Field NEW_PASSWORD_IN must have a maximum of 50 characters")
                    console.log("USU41 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NEW_PASSWORD_IN must have a maximum of 50 characters");
                });
        });
        it("USU42 - Update user password as user under min confirm password", async function(){
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
            await driver.findElement(By.id('pass')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-0')).sendKeys('newPasswordSettings');
            await driver.findElement(By.id('mat-input-1')).sendKeys('newPasswordSettingsDummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('aa');
            await driver.findElement(By.className('main-button')).click();
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU42 - Resultado esperado: Field CONFIRM_PASSWORD_IN must have at least 8 characters")
                    console.log("USU42 - Resultado obtenido: " + txt);
                    txt.should.includes("Field CONFIRM_PASSWORD_IN must have at least 8 characters");
                });
        });
        it("USU43 - Update user password as user over max confirm password", async function(){
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
            await driver.findElement(By.id('pass')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-input-0')).sendKeys('newPasswordSettings');
            await driver.findElement(By.id('mat-input-1')).sendKeys('newPasswordSettingsDummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
            await driver.findElement(By.className('main-button')).click();
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USU43 - Resultado esperado: Field CONFIRM_PASSWORD_IN must have a maximum of 50 characters")
                    console.log("USU43 - Resultado obtenido: " + txt);
                    txt.should.includes("Field CONFIRM_PASSWORD_IN must have a maximum of 50 characters");
                });
        });
    });
});
