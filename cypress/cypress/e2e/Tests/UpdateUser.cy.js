const url = "http://localhost:3000/Users";

describe('Check Local API', () => {
    //Visit The URL and Check Table if it has Data
    it('Test Data Insert', () => {
        cy.visit(url);
        //Assert Url
        cy.url().should('eq', url);

        cy.get('#UserTable').should('length', 1);


        cy.get('#UserTable > tr').last().find('td').last().find('button').first().click();

        cy.get('#UserTable > tr').last().find('td').first().find('input').first().should('have.value', 'Kimberly');
        cy.get('#UserTable > tr').last().find('td').first().find('input').first().type('B');
        cy.get('#UserTable > tr').last().find('td').first().find('input').first().should('have.value','KimberlyB');

        cy.get('#UserTable > tr').last().find('td').eq(1).find('input').first().should('have.value', 'Baga');
        cy.get('#UserTable > tr').last().find('td').eq(1).find('input').first().type('K');
        cy.get('#UserTable > tr').last().find('td').eq(1).find('input').first().should('have.value','BagaK');

        
        cy.get('#UserTable > tr').last().find('td').last().find('button').first().click();
        cy.wait(2000);
        cy.get('#UserTable > tr').last().find('td').first().find('span').first().should('have.text', 'KimberlyB');
        cy.get('#UserTable > tr').last().find('td').eq(1).find('span').first().should('have.text', 'BagaK');

    });
});