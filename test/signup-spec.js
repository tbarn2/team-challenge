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
    
    it('should pass last name validation', function() {
        var input = element(by.model('lastName'));
        input.sendKeys('Ross');
        expect((input, 'ng-invalid')).toEqual(true);
    });

    it('should not pass last name validation', function() {
        var input = element(by.model('lastName'));
        input.sendKeys('Ross')
        input.clear();
        expect((input, 'ng-invalid').toEqual(false));
    });
    
    it('should be valid on matching passwords', function(){
        var password = element(by.id('password'));
        var passwordConfirm = element(by.id('passwordConfirm'));
        password.sendKeys('password1234');
        passwordConfirm.sendKeys('password1234')
        expect(element(by.id('passwordConfirm')).getAttribute('class')).toMatch('ng-valid');
    });
});