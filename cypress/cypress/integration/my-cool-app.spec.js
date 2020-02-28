import '@testing-library/cypress/add-commands';

context('My Cool App', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
	});

	it('displays a friendly welcome message', () => {
		cy.get('h1')
			.should($el => {
				expect($el).to.contain('Welcome to My Cool App!');
			});
	});

	it('displays a button that increments the button click count when clicked', () => {
		cy.queryByText('Button click count: 0').should('exist');

		cy.get('#click-count-button').click();
		cy.queryByText('Button click count: 1').should('exist');

		cy.get('#click-count-button').click();
		cy.queryByText('Button click count: 2').should('exist');
	});
});
