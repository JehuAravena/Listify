const { Builder, By, until } = require("selenium-webdriver");
var should = require("chai").should();
var addContext = require("mochawesome/addContext");
const driver = new Builder()
            .forBrowser("chrome")
            .build();
        
describe("Login", function(){
    afterEach(function(){
        let imageFileName = this.currentTest.title + '.jpeg';
        driver.takeScreenshot().then(
            function(image){
                require('fs').writeFileSync('./mochawesome-report/screenshots/login/' + imageFileName, image, 'base64');
            }
        )
        addContext(this, 'A continuación imagen del resultado de la prueba.');
        addContext(this, './screenshots/login/' + imageFileName);
    });
    after(function(){
        driver.quit();
    });
    it("LOG01 - Login user success", async function(){
        await driver.get("http://localhost:4200/login");
        await driver.findElement(By.id('mat-input-0')).sendKeys('PLAYER@EMAIL.COM');
        await driver.findElement(By.id('mat-input-1')).sendKeys('345678')
        await driver.findElement(By.className('login-button')).click();
        await driver.sleep(1000)
        await driver.findElement(By.id('logout')).click();
        await driver.sleep(1000)
        await driver.findElement(By.className('confirm-main-button mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base')).click();
    });
    it("LOG02 - Login user unsuccessfully", async function(){
        await driver.get("http://localhost:4200/login");
        await driver.findElement(By.id('mat-input-0')).sendKeys('dummy@email.com');
        await driver.findElement(By.id('mat-input-1')).sendKeys('dummyPass');
        await driver.findElement(By.className('login-button')).click();
        await driver.sleep(1000)
        await driver.findElement(By.className('mat-mdc-snack-bar-container')).getText().then(function (text) {
            text.should.include("Can't login, please check the credentials");
        });
    });
    it("LOG03 - Email field empty", async function(){
        await driver.get("http://localhost:4200/login");
        await driver.findElement(By.id('mat-input-1')).sendKeys('789012');
        await driver.findElement(By.className('login-button')).click();
        await driver.sleep(1000)
        await driver.findElement(By.id('mat-mdc-hint-0')).getText().then(function (text) {
            text.should.include('Field EMAIL_IN is required');
        });
        await driver.findElement(By.className('mat-mdc-snack-bar-container')).getText().then(function (text) {
            text.should.include("Can't login, please check the fields");
        });
    });
    it("LOG04 - Email overpasing max length", async function(){
        await driver.get("http://localhost:4200/login");
        await driver.findElement(By.id('mat-input-0')).sendKeys('thisisanemailfortestingpurposesonly1234567890asdfgf');
        await driver.findElement(By.id('mat-input-1')).sendKeys('789012');
        await driver.findElement(By.className('login-button')).click();
        await driver.sleep(1000)
        await driver.findElement(By.id('mat-mdc-hint-0')).getText().then(function (text) {
            text.should.include('Field EMAIL_IN must have a maximum of 50 characters');
        });
        await driver.findElement(By.className('mat-mdc-snack-bar-container')).getText().then(function (text) {
            text.should.include("Can't login, please check the fields");
        });
    });
    it("LOG05 - Sql email injection", async function(){
        await driver.get("http://localhost:4200/login");
        await driver.findElement(By.id('mat-input-0')).sendKeys("' or'1'='1");
        await driver.findElement(By.id('mat-input-1')).sendKeys('789012');
        await driver.findElement(By.className('login-button')).click();
        await driver.sleep(1000)
        await driver.findElement(By.id('mat-mdc-hint-0')).getText().then(function (text) {
            text.should.include('Field EMAIL_IN is not a valid email');
        });
        await driver.findElement(By.className('mat-mdc-snack-bar-container')).getText().then(function (text) {
            text.should.include("Can't login, please check the fields");
        });
    });
    it("LOG06 - Login with an invalid email", async function(){
        await driver.get("http://localhost:4200/login");
        await driver.findElement(By.id('mat-input-0')).sendKeys('adm@email.co');
        await driver.findElement(By.id('mat-input-1')).sendKeys('789012');
        await driver.findElement(By.className('login-button')).click();
        await driver.sleep(1000)
        await driver.findElement(By.id('mat-mdc-hint-0')).getText().then(function (text) {
            text.should.include('Field EMAIL_IN is not a valid email');
        });
        await driver.findElement(By.className('mat-mdc-snack-bar-container')).getText().then(function (text) {
            text.should.include("Can't login, please check the fields");
        });
    });
    it("LOG07 - Login with an invalid email with special characters", async function(){
        await driver.get("http://localhost:4200/login");
        await driver.findElement(By.id('mat-input-0')).sendKeys('!"·$%&/()=?¿@email.com');
        await driver.findElement(By.id('mat-input-1')).sendKeys('1234567890');
        await driver.findElement(By.className('login-button')).click();
        await driver.sleep(1000)
        await driver.findElement(By.id('mat-mdc-hint-0')).getText().then(function (text) {
            text.should.include('Field EMAIL_IN is not a valid email');
        });
        await driver.findElement(By.className('mat-mdc-snack-bar-container')).getText().then(function (text) {
            text.should.include("Can't login, please check the fields");
        });
    });
    it("LOG08 - Password field empty", async function(){
        await driver.get("http://localhost:4200/login");
        await driver.findElement(By.id('mat-input-0')).sendKeys('admin@email.com');
        await driver.findElement(By.className('login-button')).click();
        await driver.sleep(1000)
        await driver.findElement(By.id('mat-mdc-hint-0')).getText().then(function (text) {
            text.should.include('Field PASSWORD_IN is required');
        });
        await driver.findElement(By.className('mat-mdc-snack-bar-container')).getText().then(function (text) {
            text.should.include("Can't login, please check the fields");
        });
    });
    it("LOG09 - Password underpassing the limit", async function(){
        await driver.get("http://localhost:4200/login");
        await driver.findElement(By.id('mat-input-0')).sendKeys('admin@email.com');
        await driver.findElement(By.id('mat-input-1')).sendKeys('1');
        await driver.findElement(By.className('login-button')).click();
        await driver.sleep(1000)
        await driver.findElement(By.id('mat-mdc-hint-0')).getText().then(function (text) {
            text.should.include('Field PASSWORD_IN must have at least 6 characters');
        });
        await driver.findElement(By.className('mat-mdc-snack-bar-container')).getText().then(function (text) {
            text.should.include("Can't login, please check the fields");
        });
    });
    it("LOG10 - Password overpassing the limit", async function(){
        await driver.get("http://localhost:4200/login");
        await driver.findElement(By.id('mat-input-0')).sendKeys('admin@email.com');
        await driver.findElement(By.id('mat-input-1')).sendKeys('yHI436,?H!?iv3pQw:*PO');
        await driver.findElement(By.className('login-button')).click();
        await driver.sleep(1000)
        await driver.findElement(By.id('mat-mdc-hint-0')).getText().then(function (text) {
            text.should.include('Field PASSWORD_IN must have a maximum of 20 characters');
        });
        await driver.findElement(By.className('mat-mdc-snack-bar-container')).getText().then(function (text) {
            text.should.include("Can't login, please check the fields");
        });
    });
});