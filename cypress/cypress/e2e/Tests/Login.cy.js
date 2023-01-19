const url = "http://localhost:3000/";

describe('Check Local API', () => {
    //Visit The URL and Check Table if it has Data
    it('Test Login', () => {
        cy.visit(url);
        //Assert Url
        cy.url().should('eq', url);

        cy.get('#EmailInput').type('pamela@mail.com');
        cy.get('#EmailInput').should('have.value', 'pamela@mail.com');
        cy.get('#PasswordInput').type('Password123');
        cy.get('#PasswordInput').should('have.value', 'Password123');

        cy.get("#Login").click();
        cy.url().should('eq', url + 'Dashboard');
    });
});