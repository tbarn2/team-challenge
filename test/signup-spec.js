
// protractor team-challenge/test/protractor-conf.js
describe('Sign Up Form', function() {
    beforeEach(function() {
      //reload the page before each test
      browser.get('http://localhost:8000/team-challenge/');
   });

// email tests
    it('should be invalid on a invalid email syntax', function() {
        var email = element(by.id('email'));
        email.sendKeys('informatics');
        expect(email.getAttribute('class')).toMatch('ng-invalid');
        expect(element(by.name('signUpForm')).getAttribute('class')).toMatch('ng-invalid');
        expect(element(by.model('submit')).getAttribute('disabled')).toBe('true');
    });
    
    it('should be valid on a valid email', function(){
        var email = element(by.id('email'));
        email.sendKeys('informatics@uw.edu');
        expect(email.getAttribute('class')).toMatch('ng-valid');
        expect(element(by.name('signUpForm')).getAttribute('class')).toMatch('ng-valid');
    });
    
// last name tests
    it('should not pass last name input', function() {
        var input = element(by.model('lastName'));
        input.click();
        element(by.model('date')).click();
        expect(element(by.id('lastName')).isDisplayed()).toBe(true);

    });

    it('should pass last name validation', function() {
        var input = element(by.model('lastName'));
        input.sendKeys('Ross');
        expect(input.getAttribute('class')).toMatch('ng-valid');
        expect(element(by.name('signUpForm')).getAttribute('class')).toMatch('ng-valid');
    });

// matching password tests
    it('should be valid on matching passwords', function(){
        var password = element(by.id('password'));
        var passwordConfirm = element(by.id('confirmPassword'));
        password.sendKeys('password1234');
        passwordConfirm.sendKeys('password1234')
        expect(element(by.id('confirmPassword')).getAttribute('class')).toMatch('ng-valid');
    });

    
    // it('should be invalid password when field left blank', function() {
    //     expect(element(by.id('passwordConfirm')).getAttribute('class')).toMatch('ng-invalid');
    // });
    
    // // submit tests
    // it('should submit form successfully', function() {
    //     var email = element(by.id('email'));
    //     email.sendKeys('informatics@uw.com');
    //     var firstName = element(by.id('firstName'));
    //     fname.sendKeys('Joel');
    //     var birth = element(by.id('birth'));
    //     birth.sendKeys('03/30/1995');
    //     expect(birth.getAttribute('class')).toMatch('ng-valid');
    //     var name = element(by.id('lastName'));
    //     name.sendKeys('Ross');
    //     var password1 = element(by.id('password'));
    //     var password2 = element(by.id('confirmPassword'));
    //     password1.sendKeys('password');
    //     password2.sendKeys('password');
    //     // .... 
    //     expect(element(by.id('password')).getAttribute('class')).toMatch('ng-valid');

    // });

});