const { Builder, By, until } = require("selenium-webdriver");
var should = require("chai").should();
var addContext = require("mochawesome/addContext");
const driver = new Builder()
            .forBrowser("chrome")
            .build();
        

describe("Delete User", function(){
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

    describe('Delete user admin', function(){
        before(async function(){
            await driver.get("http://localhost:4200/login");
            await driver.findElement(By.id('mat-input-0')).sendKeys('ADMIN@EMAIL.COM');
            await driver.findElement(By.id('mat-input-1')).sendKeys('789012');
            await driver.findElement(By.className('login-button')).click();
            await driver.sleep(3000);
            await driver.get("http://localhost:4200/user");
            await driver.sleep(1000);
        });

        beforeEach(async function(){
            delete_btns = await driver.findElements(By.className("mat-icon notranslate trashcan-btn material-icons mat-ligature-font mat-icon-no-color"));
            await driver.sleep(2000);
        });

        it("USD01 - Admin delete existing user", async function(){
            await delete_btns[2].click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('confirm-main-button')), 2000)
            await driver.findElement(By.className('confirm-main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USD01 - Resultado esperado: User successfully deleted.")
                    console.log("USD01 - Resultado obtenido: " + txt);
                    txt.should.includes("User successfully deleted.");
                });
        });
        it("USD02 - Admin delete already existing user", async function(){
            await delete_btns[2].click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('confirm-main-button')), 2000)
            await driver.findElement(By.className('confirm-main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USD02 - Resultado esperado: User ID not found")
                    console.log("USD02 - Resultado obtenido: " + txt);
                    txt.should.includes("User ID not found");
                });
        });
        it("USD03 - Admin delete user with ID 1", async function(){
            await delete_btns[0].click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('confirm-main-button')), 2000)
            await driver.findElement(By.className('confirm-main-button')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USD03 - Resultado esperado: Cannot delete the user with ID 1 or 2")
                    console.log("USD03 - Resultado obtenido: " + txt);
                    txt.should.includes("Cannot delete the user with ID 1 or 2");
                });
        });
        it("USD04 - Admin delete user from settings", async function(){
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
            await driver.findElement(By.className('setting-change-del')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('mat-mdc-snack-bar-container')), 2000)
                .getText()
                .then(function(txt){
                    console.log("USD04 - Resultado esperado: Admin account cannot be deleted")
                    console.log("USD04 - Resultado obtenido: " + txt);
                    txt.should.includes("Admin account cannot be deleted");
                });
        });   
    });

    describe('Delete user from player settings', function(){

        before(async function(){
            await driver.findElement(By.id('logout')).click();
            await driver.sleep(1000);
            await driver.findElement(By.className('confirm-main-button')).click();
            await driver.sleep(3000);
        });

        before(async function(){
            await driver.get("http://localhost:4200/login");
            await driver.findElement(By.id('mat-input-0')).sendKeys('newemail@email.com');
            await driver.findElement(By.id('mat-input-1')).sendKeys('dummyPassword');
            await driver.findElement(By.className('login-button')).click();
            await driver.sleep(3000);
            await driver.get("http://localhost:4200/settings");
            await driver.sleep(1000);
        });

        it("UDP01 - Player delete user from settings", async function(){
            await driver.findElement(By.className('setting-change-del')).click();
            await driver.sleep(1000);
            await driver.wait(until.elementLocated(By.className('confirm-main-button')), 2000)
            await driver.findElement(By.className('confirm-main-button')).click();
            await driver.sleep(1000);
        })
    });
})