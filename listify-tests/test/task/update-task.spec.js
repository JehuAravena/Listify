const { Builder, By, until } = require("selenium-webdriver");
var should = require("chai").should();
var addContext = require("mochawesome/addContext");
const driver = new Builder()
    .forBrowser("chrome")
    .build();

describe("Update task", function () {
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
        it("TAU01 - Update task success", async function(){
            await driver.findElement(By.id('edit-task-btn7')).click();
            await driver.sleep(1000)
            await driver.findElement(By.id('mat-input-0')).sendKeys('Task Title Updated');
            await driver.findElement(By.id('mat-input-1')).sendKeys('Updated Description Task');
            await driver.findElement(By.id('mat-radio-2-input')).click();
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000)
            await driver.findElement(By.className('mat-mdc-snack-bar-container')).getText().then(function (text) {
                text.should.include('Task updated successfully');
            });
        });
        it("TAU02 - Update task lack title", async function(){
            await driver.findElement(By.id('edit-task-btn7')).click();
            await driver.sleep(1000)
            await driver.findElement(By.id('mat-input-1')).sendKeys('Updated Description Task');
            await driver.findElement(By.id('mat-radio-2-input')).click();
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000)
            await driver.findElement(By.className('mat-mdc-snack-bar-container')).getText().then(function (text) {
                text.should.include('Task updated successfully');
            });
        });
        it("TAU03 - Update task underpassing the limit of 3 characters in title", async function(){
            await driver.findElement(By.id('edit-task-btn7')).click();
            await driver.sleep(1000)
            await driver.findElement(By.id('mat-input-0')).sendKeys('a');
            await driver.findElement(By.id('mat-input-1')).sendKeys('Updated Description Task');
            await driver.findElement(By.id('mat-radio-2-input')).click();
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000)
            await driver.findElement(By.id('mat-mdc-hint-0')).getText().then(function (text) {
                text.should.include('Field TITLE_IN must have at least 3 characters');
            });
            await driver.findElement(By.className('mat-mdc-snack-bar-container')).getText().then(function (text) {
                text.should.include('Invalid form, please check the required fields');
            });
        });
        it("TAU04 - Update task overpassing the limit of 50 characters in title", async function(){
            await driver.findElement(By.id('edit-task-btn7')).click();
            await driver.sleep(1000)
            await driver.findElement(By.id('mat-input-0')).sendKeys('lorem ipsum dolor sit amet consectetur adipiscing eli');
            await driver.findElement(By.id('mat-input-1')).sendKeys('Updated Description Task');
            await driver.findElement(By.id('mat-radio-2-input')).click();
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000)
            await driver.findElement(By.id('mat-mdc-hint-0')).getText().then(function (text) {
                text.should.include('Field TITLE_IN must have a maximum of 50 characters');
            });
            await driver.findElement(By.className('mat-mdc-snack-bar-container')).getText().then(function (text) {
                console.log(text);
                text.should.include('Invalid form, please check the required fields');
            });
        });
        it("TAU05 - Update task lack priority", async function(){
            await driver.findElement(By.id('edit-task-btn7')).click();
            await driver.sleep(1000)
            await driver.findElement(By.id('mat-input-0')).sendKeys('Task Title Updated');
            await driver.findElement(By.id('mat-input-1')).sendKeys('Updated Description Task');
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000)
            await driver.findElement(By.className('mat-mdc-snack-bar-container')).getText().then(function (text){
                text.should.include('Task updated successfully');
            });
        });
        it("TAU06 - Update task lack description", async function(){
            await driver.findElement(By.id('edit-task-btn7')).click();
            await driver.sleep(1000)
            await driver.findElement(By.id('mat-input-0')).sendKeys('Task Title Updated');
            await driver.findElement(By.id('mat-radio-2-input')).click();
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000)
            await driver.findElement(By.className('mat-mdc-snack-bar-container')).getText().then(function(text){
                text.should.include('Task updated successfully');
            });
        });
        it("TAU07 - Update task overpassing the 255 characters", async function(){
            await driver.findElement(By.id('edit-task-btn7')).click();
            await driver.sleep(1000)
            await driver.findElement(By.id('mat-input-0')).sendKeys('Task Title Updated');
            await driver.findElement(By.id('mat-input-1')).sendKeys(
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium.34operator'
                );
            await driver.findElement(By.id('mat-radio-2-input')).click();
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000)
            await driver.findElement(By.id('mat-mdc-hint-0')).getText().then(function (text) {
                text.should.include('Field DESCRIPTION_IN must have a maximum of 255 characters');
            });
            await driver.findElement(By.className('mat-mdc-snack-bar-container')).getText().then(function(text){
                text.should.include('Invalid form, please check the required fields');
            });
        });
        it("TAU08 - Update task with no change", async function(){
            await driver.findElement(By.id('edit-task-btn7')).click();
            await driver.sleep(1000)
            await driver.findElement(By.className('cancel-button')).click();
            await driver.sleep(1000)
            await driver.findElement(By.id('edit-task-btn7')).click();
            await driver.sleep(1000)
            await driver.findElement(By.className('main-button')).click();
            await driver.sleep(1000)
            await driver.findElement(By.className('mat-mdc-snack-bar-container')).getText().then(function(text){
                text.should.include('Task not updated: no changes detected');
            });
            await driver.findElement(By.className('cancel-button')).click();
        });
    }
);