var homepage = require('../pages/homepage');

describe("calculator test suite", function() {
    it("Addition Test", function() {
        // browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.getURL('http://juliemr.github.io/protractor-demo/');
        // element(by.model('first')).sendKeys(1);
        homepage.firstInput(1);
        // element(by.model('second')).sendKeys(9);
        homepage.changeSelectOption('+');
        homepage.secondInput(9);
        // element(by.id('gobutton')).click();
        homepage.button();
        // let result = element(by.css('.ng-binding'));
        // expect(result.getText()).toEqual('10');
        homepage.checkResult('10');
        // browser.sleep(2000);
        homepage.browserSleep(2000);
    });

    it("Subtraction Test", function() {
        homepage.getURL('http://juliemr.github.io/protractor-demo/');
        homepage.firstInput(10);
        homepage.changeSelectOption('-');
        homepage.secondInput(1);
        homepage.button();
        homepage.checkResult('9');
        homepage.browserSleep(2000);
    });

    it("Multiplication Test", function() {
        homepage.getURL('http://juliemr.github.io/protractor-demo/');
        homepage.firstInput(100);
        homepage.changeSelectOption('*');
        homepage.secondInput(9);
        homepage.button();
        homepage.checkResult('900');
        homepage.browserSleep(2000);
    });

    it("Division Test", function() {
        homepage.getURL('http://juliemr.github.io/protractor-demo/');
        homepage.firstInput(1);
        homepage.changeSelectOption('/');
        homepage.secondInput(9);
        homepage.button();
        homepage.checkResult('10');
        homepage.browserSleep(2000);
    });

    it("Modulus Test", function() {
        homepage.getURL('http://juliemr.github.io/protractor-demo/');
        homepage.firstInput(1);
        homepage.changeSelectOption('%');
        homepage.secondInput(9);
        homepage.button();
        homepage.checkResult('10');
        homepage.browserSleep(2000);
    });
});