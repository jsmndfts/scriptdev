const url = "http://localhost:3000/Users";

describe('Check Local API', () => {
    //Visit The URL and Check Table if it has Data
    it('Test Data Insert', () => {
        cy.visit(url);
        //Assert Url
        cy.url().should('eq', url);

        cy.get('#UserTable').should('length', 1);

        cy.get('#FirstName').type('Kimberly');
        cy.get('#FirstName').should('have.value', 'Kimberly');
        cy.get('#LastName').type('Baga');
        cy.get('#LastName').should('have.value', 'Baga');

        cy.get('#AddUser').click();
        
        cy.wait(2000);

        cy.get('#FirstName').should('be.empty');
        cy.get('#LastName').should('be.empty');

        cy.get('#UserTable > tr').last().find('td').first().find('span').first().should('have.text', 'Kimberly');

        
    });
});