// sign up spec
//       protractor team-challenge/test/protractor-conf.js
describe('Sign Up Form', function() {
    beforeEach(function() {
      //reload the page before each test
      browser.get('http://localhost:8000/team-challenge/');
   });

    // initial test
    it('should have a title', function() {

    expect(browser.getTitle()).toEqual('Sign Up Form');
    });

    // last name test
    it('should pass last name input', function() {
        var input = element(by.model('name'));
        input.sendKeys('Pacheco');
        expect(element(by.id('lastNameShow')).isDisplayed()).toBe(false);
    });

    // last name not beng passed
    it('should not pass last name input', function() {
        var input = element(by.model('name'));
        input.click();
        expect(element(by.id('lastNameShow'), 'ng-dirty')).toBe(true);

        //var action = element(by.id('lastName'));

        // if input field is touched, ng-show should be true


        //expect(action.isEnabled()).toBe([true|false]);

    });
});