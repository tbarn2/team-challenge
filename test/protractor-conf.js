describe('email', function () {
	beforeEach(function() {
		browser.get('http://localhost:8000');
	})

	it ('should check if email is valid', function() {		
		browser.getEmail();

		expect(getEmail).toEqual(email);
		// If(getEmail == email)
		// {
		// 	test passes
		// }
		// Else
		// {
		// 	test fails
		// }

	});

});

