let homepage = function() {
    let Input1 =  element(by.model('first'));
    let Input2 = element(by.model('second'));
    let btn = element(by.id('gobutton'));
    let result = element(by.css('h2.ng-binding'));

    this.getURL = function(url) {
        browser.get(url);
    };

    this.firstInput = function(input) {
        Input1.sendKeys(input);
    };

    this.changeSelectOption = function(selectOption) {
        element(by.cssContainingText('option', selectOption)).click();
    };

    this.secondInput = function(input) {
        Input2.sendKeys(input);
    };

    this.button = function(){
        btn.click();
    };

    this.checkResult = function(res) {
        expect(result.getText()).toEqual(res);
    };

    this.browserSleep = function(ms) {
        browser.sleep(ms);
    };
};

module.exports = new homepage();