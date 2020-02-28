import '@testing-library/cypress/add-commands';
import superSecretCredentials from '../env/credentials';

context('Manage', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
	});

	it('displays a login page', () => {
		cy.visit('http://dev-pg-cflow-demo4-manage.revolutionparts.vpc:21280/');
		cy.get('#login_wrapper')
			.should($el => {
				expect($el).to.contain('Account Login');
			});
	});

	it('can login', () => {
		cy.visit('http://dev-pg-cflow-demo4-manage.revolutionparts.vpc:21280/');
		cy.get('#login_username').type(superSecretCredentials.username, { delay: 50 });
		cy.get('#login_password').type(superSecretCredentials.password, { delay: 50, log: false });
		cy.get('#submit_button').click();
		cy.get('h1').should('contain.text', 'Welcome, Christopher!');
	});

	it('can go to Local Delivery', () => {
		cy.request('POST', 'http://dev-pg-cflow-demo4-manage.revolutionparts.vpc:21280/login', {
			username: superSecretCredentials.username,
			password: superSecretCredentials.password,
		});

		cy.visit('http://dev-pg-cflow-demo4-manage.revolutionparts.vpc:21280/?cid=1708');

		cy.contains('HONDA ADDENDUM')
			.then(() => {
				cy.contains('CANCEL').click();
			});

		cy.get('.local-delivery-link').click();
		cy.url().should('include', '/customers/1708/deliveries');
	});

});
