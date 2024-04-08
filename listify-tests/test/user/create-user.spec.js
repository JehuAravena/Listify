const { Builder, By, until } = require("selenium-webdriver");
var should = require("chai").should();
var addContext = require("mochawesome/addContext");
const driver = new Builder()
            .forBrowser("chrome")
            .build();
        

describe("Create User", function(){
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
    describe("Register user", function(){
        beforeEach(async function(){
            await driver.get("http://localhost:4200/register");
        });
        it("UREG01 - Register user success", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('New Name');
            await driver.findElement(By.id('mat-input-1')).sendKeys('New Lastname');
            await driver.findElement(By.id('mat-input-2')).sendKeys('newNick');
            await driver.findElement(By.id('mat-input-3')).sendKeys('newemail@email.com');
            await driver.findElement(By.id('mat-input-4')).sendKeys('newPassword');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG01 - Resultado esperado: User registered successfully.")
                    console.log("UREG01 - Resultado obtenido: " + txt);
                    txt.should.includes("User registered successfully.");
                });
        }),
        it("UREG02 - Register user lacks name", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG02 - Resultado esperado: Field NAME_IN is required")
                    console.log("UREG02 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NAME_IN is required");
                });
        }),
        it("UREG03 - Register user lacks lastname", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-1')).sendKeys('');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG03 - Resultado esperado: Field LASTNAME_IN is required")
                    console.log("UREG03 - Resultado obtenido: " + txt);
                    txt.should.includes("Field LASTNAME_IN is required");
                });
        }),
        it("UREG04 - Register user lacks nickname", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG04 - Resultado esperado: Field NICKNAME_IN is required")
                    console.log("UREG04 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NICKNAME_IN is required");
                });
        }),
        it("UREG05 - Register user lacks email", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG05 - Resultado esperado: Field EMAIL_IN is required")
                    console.log("UREG05 - Resultado obtenido: " + txt);
                    txt.should.includes("Field EMAIL_IN is required");
                });
        }),
        it("UREG06 - Register user lacks password", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-4')).sendKeys('');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG06 - Resultado esperado: Field PASSWORD_IN is required")
                    console.log("UREG06 - Resultado obtenido: " + txt);
                    txt.should.includes("Field PASSWORD_IN is required");
                });
        }),
        it("UREG07 - Register user under min name", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('aa');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG07 - Resultado esperado: Field NAME_IN must have at least 3 characters")
                    console.log("UREG07 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NAME_IN must have at least 3 characters");
                });
        }),
        it("UREG08 - Register user under min lastname", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-1')).sendKeys('aa');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG08 - Resultado esperado: Field LASTNAME_IN must have at least 3 characters")
                    console.log("UREG08 - Resultado obtenido: " + txt);
                    txt.should.includes("Field LASTNAME_IN must have at least 3 characters");
                });
        }),
        it("UREG09 - Register user under min nickname", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('aa');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG09 - Resultado esperado: Field NICKNAME_IN must have at least 3 characters")
                    console.log("UREG09 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NICKNAME_IN must have at least 3 characters");
                });
        }),
        it("UREG10 - Register user under min email", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('aa');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG10 - Resultado esperado: Field EMAIL_IN is not a valid email")
                    console.log("UREG10 - Resultado obtenido: " + txt);
                    txt.should.includes("Field EMAIL_IN is not a valid email");
                });
        }),
        it("UREG11 - Register user under min password", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-4')).sendKeys('aa');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG11 - Resultado esperado: Field PASSWORD_IN must have at least 8 characters")
                    console.log("UREG11 - Resultado obtenido: " + txt);
                    txt.should.includes("Field PASSWORD_IN must have at least 8 characters");
                });
        }),
        it("UREG12 - Register user over max name", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG12 - Resultado esperado: Field NAME_IN must have a maximum of 50 characters")
                    console.log("UREG12 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NAME_IN must have a maximum of 50 characters");
                });
        }),
        it("UREG13 - Register user over max lastname", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG13 - Resultado esperado: Field LASTNAME_IN must have a maximum of 50 characters")
                    console.log("UREG13 - Resultado obtenido: " + txt);
                    txt.should.includes("Field LASTNAME_IN must have a maximum of 50 characters");
                });
        }),
        it("UREG14 - Register user over max nickname", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG14 - Resultado esperado: Field NICKNAME_IN must have a maximum of 50 characters")
                    console.log("UREG14 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NICKNAME_IN must have a maximum of 50 characters");
                });
        }),
        it("UREG15 - Register user over max email", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy@email.com');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG15 - Resultado esperado: Field EMAIL_IN must have a maximum of 100 characters")
                    console.log("UREG15 - Resultado obtenido: " + txt);
                    txt.should.includes("Field EMAIL_IN must have a maximum of 100 characters");
                });
        }),
        it("UREG16 - Register user over max password", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG16 - Resultado esperado: Field PASSWORD_IN must have a maximum of 50 characters")
                    console.log("UREG16 - Resultado obtenido: " + txt);
                    txt.should.includes("Field PASSWORD_IN must have a maximum of 50 characters");
                });
        }),
        it("UREG17 - Register user name invalid", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummy2');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(3000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG17 - Resultado esperado: Field NAME_IN can only contain letters and spaces")
                    console.log("UREG17 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NAME_IN can only contain letters and spaces");
                });
        }),
        it("UREG18 - Register user lastname invalid", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy2');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG18 - Resultado esperado: Field LASTNAME_IN can only contain letters and spaces")
                    console.log("UREG18 - Resultado obtenido: " + txt);
                    txt.should.includes("Field LASTNAME_IN can only contain letters and spaces");
                });
        }),
        it("UREG19 - Register user nickname invalid", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('(dummy)');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG19 - Resultado esperado: Field NICKNAME_IN can only contain letters, numbers, dots, hyphens, and underscores")
                    console.log("UREG19 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NICKNAME_IN can only contain letters, numbers, dots, hyphens, and underscores");
                });
        }),
        it("UREG20 - Register user email invalid", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy@email.dummy');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-form-field-hint mat-mdc-form-field-bottom-align hint ng-star-inserted')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG20 - Resultado esperado: Field EMAIL_IN is not a valid email")
                    console.log("UREG20 - Resultado obtenido: " + txt);
                    txt.should.includes("Field EMAIL_IN is not a valid email");
                });
        }),
        it("UREG21 - Register user existing nickname", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('newNick');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG21 - Resultado esperado: The user's nickname already exists")
                    console.log("UREG21 - Resultado obtenido: " + txt);
                    txt.should.includes("The user's nickname already exists");
                });
        }),
        it("UREG22 - Register user existing email", async function(){
            await driver.findElement(By.id('mat-input-0')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('newemail@email.com');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("UREG22 - Resultado esperado: The user's email already exists")
                    console.log("UREG22 - Resultado obtenido: " + txt);
                    txt.should.includes("The user's email already exists");
                });
        })
    });
    describe('Create user admin', function(){
        before(async function(){
            await driver.get("http://localhost:4200/login");
            await driver.findElement(By.id('mat-input-0')).sendKeys('ADMIN@EMAIL.COM');
            await driver.findElement(By.id('mat-input-1')).sendKeys('789012');
            await driver.findElement(By.className('login-button')).click();
            await driver.sleep(2000);
        });

        beforeEach(async function(){
            await driver.get("http://localhost:4200/user");
            await driver.sleep(2000);
            await driver.findElement(By.className('create-user')).click();
            await driver.sleep(2000);
        });

        it("USC01 - Admin user creation success", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('New Name admin');
            await driver.findElement(By.id('mat-input-2')).sendKeys('New Lastname Admin');
            await driver.findElement(By.id('mat-input-3')).sendKeys('newNickAdmin');
            await driver.findElement(By.id('mat-input-4')).sendKeys('newemailadmin@email.com');
            await driver.findElement(By.id('mat-input-5')).sendKeys('newPassword');
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC01 - Resultado esperado: User registered successfully.")
                    console.log("USC01 - Resultado obtenido: " + txt);
                    txt.should.includes("User registered successfully.");
                });
        }),
        it("USC02 - Admin register user lacks name", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummyPass');
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC02 - Resultado esperado: Field NAME_IN is required")
                    console.log("USC02 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NAME_IN is required");
                });
        }),
        it("USC03 - Admin register user lacks lastname", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummyPass');
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC03 - Resultado esperado:  Field LASTNAME_IN is required")
                    console.log("USC03 - Resultado obtenido: " + txt);
                    txt.should.includes("Field LASTNAME_IN is required");
                });
        }),
        it("USC04 - Admin register user lacks nickname", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummyPass');
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC04 - Resultado esperado: Field NICKNAME_IN is required")
                    console.log("USC04 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NICKNAME_IN is required");
                });
        }),
        it("USC05 - Admin register user lacks email", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-4')).sendKeys('');
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummyPass');
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC05 - Resultado esperado: Field EMAIL_IN is required")
                    console.log("USC05 - Resultado obtenido: " + txt);
                    txt.should.includes("Field EMAIL_IN is required");
                });
        }),
        it("USC06 - Admin register user lacks password", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-5')).sendKeys('');
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC06 - Resultado esperado: Field PASSWORD_IN is required")
                    console.log("USC06 - Resultado obtenido: " + txt);
                    txt.should.includes("Field PASSWORD_IN is required");
                });
        }),
        it("USC07 - Admin register user lacks role", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummmmyy1');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC07 - Resultado esperado:  Field ID_ROLE_IN is required")
                    console.log("USC07 - Resultado obtenido: " + txt);
                    txt.should.includes("Field ID_ROLE_IN is required");
                });
        }),
        it("USC08 - Admin register user under min name", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('du');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummmmyy1');
            await driver.findElement(By.className('main-button')).click();
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC08 - Resultado esperado: Field NAME_IN must have at least 3 characters")
                    console.log("USC08 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NAME_IN must have at least 3 characters");
                });
        }),
        it("USC09 - Admin register user under min lastname", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('du');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummmmyy1');
            await driver.findElement(By.className('main-button')).click();
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC09 - Resultado esperado: Field LASTNAME_IN must have at least 3 characters")
                    console.log("USC09 - Resultado obtenido: " + txt);
                    txt.should.includes("Field LASTNAME_IN must have at least 3 characters");
                });
        }),
        it("USC10 - Admin register user under min nickname", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('du');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummmmyy1');
            await driver.findElement(By.className('main-button')).click();
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC10 - Resultado esperado: Field NICKNAME_IN must have at least 3 characters")
                    console.log("USC10 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NICKNAME_IN must have at least 3 characters");
                });
        }),
        it("USC11 - Admin register user under min email", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-4')).sendKeys('aa');
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummmmyy1');
            await driver.findElement(By.className('main-button')).click();
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC11 - Resultado esperado: Field EMAIL_IN is not a valid email")
                    console.log("USC11 - Resultado obtenido: " + txt);
                    txt.should.includes("Field EMAIL_IN is not a valid email");
                });
        }),
        it("USC12 - Admin register user under min password", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-5')).sendKeys('aa');
            await driver.findElement(By.className('main-button')).click();
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC12 - Resultado esperado: Field PASSWORD_IN must have at least 8 characters")
                    console.log("USC12 - Resultado obtenido: " + txt);
                    txt.should.includes("Field PASSWORD_IN must have at least 8 characters");
                });
        }),
        it("USC13 - Admin register user over max name", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummyPassword');
            await driver.findElement(By.className('main-button')).click();
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC13 - Resultado esperado: Field NAME_IN must have a maximum of 50 characters")
                    console.log("USC13 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NAME_IN must have a maximum of 50 characters");
                });
        }),
        it("USC14 - Admin register user over max lastname", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummyPassword');
            await driver.findElement(By.className('main-button')).click();
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC13 - Resultado esperado: Field LASTNAME_IN must have a maximum of 50 characters")
                    console.log("USC13 - Resultado obtenido: " + txt);
                    txt.should.includes("Field LASTNAME_IN must have a maximum of 50 characters");
                });
        }),
        it("USC15 - Admin register user over max nickname", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummyPassword');
            await driver.findElement(By.className('main-button')).click();
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC15 - Resultado esperado: Field NICKNAME_IN must have a maximum of 50 characters")
                    console.log("USC15 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NICKNAME_IN must have a maximum of 50 characters");
                });
        }),
        it("USC16 - Admin register user over max email", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy@email.com');
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummyPassword');
            await driver.findElement(By.className('main-button')).click();
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC16 - Resultado esperado: Field EMAIL_IN must have a maximum of 100 characters")
                    console.log("USC16 - Resultado obtenido: " + txt);
                    txt.should.includes("Field EMAIL_IN must have a maximum of 100 characters");
                });
        }),
        it("USC17 - Admin register user over max email", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyPass');
            await driver.findElement(By.className('main-button')).click();
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC17 - Resultado esperado: Field PASSWORD_IN must have a maximum of 50 characters")
                    console.log("USC17 - Resultado obtenido: " + txt);
                    txt.should.includes("Field PASSWORD_IN must have a maximum of 50 characters");
                });
        }),
        it("USC18 - Admin register user invalid name", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy2');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummyPassword');
            await driver.findElement(By.className('main-button')).click();
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC18 - Resultado esperado: Field NAME_IN can only contain letters and spaces")
                    console.log("USC18 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NAME_IN can only contain letters and spaces");
                });
        }),
        it("USC19 - Admin register user invalid lastname", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy2');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummyPassword');
            await driver.findElement(By.className('main-button')).click();
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC19 - Resultado esperado: Field LASTNAME_IN can only contain letters and spaces")
                    console.log("USC19 - Resultado obtenido: " + txt);
                    txt.should.includes("Field LASTNAME_IN can only contain letters and spaces");
                });
        }),
        it("USC20 - Admin register user invalid nickname", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('(dummy)');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummyPassword');
            await driver.findElement(By.className('main-button')).click();
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC20 - Resultado esperado: Field NICKNAME_IN can only contain letters, numbers, dots, hyphens, and underscores")
                    console.log("USC20 - Resultado obtenido: " + txt);
                    txt.should.includes("Field NICKNAME_IN can only contain letters, numbers, dots, hyphens, and underscores");
                });
        }),
        it("USC21 - Admin register user invalid email", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummy@email.dummy');
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummyPassword');
            await driver.findElement(By.className('main-button')).click();
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.id('mat-mdc-hint-0')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC21 - Resultado esperado: Field EMAIL_IN is not a valid email")
                    console.log("USC21 - Resultado obtenido: " + txt);
                    txt.should.includes("Field EMAIL_IN is not a valid email");
                });
        }),
        it("USC22 - Admin register user existing nickname", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('newNick');
            await driver.findElement(By.id('mat-input-4')).sendKeys('dummy@email.com');
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummyPassword');
            await driver.findElement(By.className('main-button')).click();
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC22 - Resultado esperado: The user's nickname already exists")
                    console.log("USC22 - Resultado obtenido: " + txt);
                    txt.should.includes("The user's nickname already exists");
                });
        }),
        it("USC23 - Admin register user existing email", async function(){
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-2')).sendKeys('dummy');
            await driver.findElement(By.id('mat-input-3')).sendKeys('dummy9');
            await driver.findElement(By.id('mat-input-4')).sendKeys('newEmail@email.com');
            await driver.findElement(By.id('mat-input-5')).sendKeys('dummyPassword');
            await driver.findElement(By.className('main-button')).click();
            await driver.findElement(By.id('mat-select-value-3')).click();
            await driver.sleep(1000);
            await driver.findElement(By.id('mat-option-4')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USC23 - Resultado esperado: The user's email already exists")
                    console.log("USC23 - Resultado obtenido: " + txt);
                    txt.should.includes("The user's email already exists");
                });
        });
    });
});