
/// protractor team-challenge/test/protractor-conf.js
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
    });
    
    it('should be valid on a valid email', function(){
        var email = element(by.id('email'));
        email.sendKeys('informatics@uw.edu');
        expect(email.getAttribute('class')).toMatch('ng-valid');
        expect(element(by.name('signUpForm')).getAttribute('class')).toMatch('ng-valid');
    });
    
// last name tests
    it('should not pass last name input', function() {
        var input = element(by.id('lastName'));
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

    it('should be invalid on passwords that do not match', function(){
        var password = element(by.id('password'));
        var confirmPassword = element(by.id('confirmPassword'));
        password.sendKeys('password');
        confirmPassword.sendKeys('password1234');
        expect(element(by.id('confirmPassword')).isDisplayed()).toBe(true);
    });

    it('should be invalid on passwords that do not match', function(){
        var password = element(by.id('password'));
        var confirmPassword = element(by.id('confirmPassword'));
        password.click();
        element(by.model('date')).click();
        confirmPassword.click();
        element(by.model('date')).click();
        expect(element(by.id('confirmPassword')).isDisplayed()).toBe(true);
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

	// tests if Sign-Up is available if all fields are filled in
	it('should sign-up after input', function() {
		var email = element(by.id('email'));
		var firstName = element(by.id('firstName'));
		var lastName = element(by.id('lastName'));
		var birthDate = element(by.id('birth'));
		var passWord = element(by.id('password'));
		var passConfirm = element(by.id('confirmPassword'));
		var button = element(by.id('submitButton'));

		email.sendKeys('fakeemail@gmail.com');
		firstName.sendKeys('John');
		lastName.sendKeys('Cena');
		birthDate.sendKeys('July 15, 1970');
		passWord.sendKeys('12345');
		passConfirm.sendKeys('12345');

		expect(button.isEnabled()).toEqual(true);

	})

});