const { Builder, By, until } = require("selenium-webdriver");
var should = require("chai").should();
var addContext = require("mochawesome/addContext");
const driver = new Builder()
    .forBrowser("chrome")
    .build();

describe("Delete task", function () {
        afterEach(function () {
            let imageFileName = this.currentTest.title + '.jpeg';
            driver.takeScreenshot().then(
                function (image) {
                    require('fs').writeFileSync('./mochawesome-report/screenshots/task/' + imageFileName, image, 'base64');
                }
            )
            addContext(this, 'A continuación imagen del resultado de la prueba.');
            addContext(this, './screenshots/task/' + imageFileName);
        });
        after(function () {
            driver.quit();
        });
        before(async function(){
            await driver.get("http://localhost:4200/login");
            await driver.findElement(By.id('mat-input-0')).sendKeys('PLAYER@EMAIL.COM');
            await driver.findElement(By.id('mat-input-1')).sendKeys('345678');
            await driver.findElement(By.className('login-button')).click();
            await driver.sleep(1000);
        });
        this.beforeEach(async function () {
            await driver.get("http://localhost:4200/task/list");
            await driver.sleep(1000);
        });
        it("TAD01 - Delete task", async function(){
            await driver.findElement(By.id('delete-task-btn')).click();
            await driver.sleep(1000)
            await driver.findElement(By.className('confirm-main-button mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base')).click();
            await driver.sleep(1000)
            await driver.findElement(By.className('mat-mdc-snack-bar-container')).getText().then(function(text){
                text.should.include('Task successfully deleted.');
            });
        });
        it("TAD02 - Delete done task", async function(){
            await driver.findElement(By.className('mdc-checkbox__native-control')).click();
            await driver.sleep(1000)
            await driver.findElement(By.id('delete-task-btn')).click();
            await driver.sleep(1000)
            await driver.findElement(By.className('confirm-main-button mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base')).click();
            await driver.sleep(1000)
            await driver.findElement(By.className('mat-mdc-snack-bar-container')).getText().then(function(text){
                text.should.include('Task successfully deleted.');
            });
        });
    }
);