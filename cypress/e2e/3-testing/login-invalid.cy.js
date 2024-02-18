//The user cannot submit the login form with invalid credentials and is shown a message.

// use pages workflow!!

describe("login, invalid input", () => {

    it("can NOT submit the login form with invalid credentials and is shown a message", () => {
    
        cy.visit("https://norofffeu.github.io/social-media-client/")
        
        cy.wait(2000)

        const inValidEmail = 'navn@post.no';
        const validEmail = 'anitei32772@stud.noroff.no';

        cy.get('#registerForm').find('[data-auth=login]').click()

        cy.wait(2000)
        

        cy.get('#loginEmail').type(`${inValidEmail}{enter}`)

        cy.get('#loginEmail')
        .should('have.value', inValidEmail)

        cy.get('#loginEmail').then($el => $el[0].checkValidity()).should('be.false')

        cy.get('#loginEmail').invoke('prop', 'validationMessage')


      /*   .should('equal', 'Sørg for samsvar med det forespurte formatet.') */
        
        .should('equal', ' Please match the requested format.')


        cy.wait(2000)


        cy.get('#loginEmail').clear().type(`${validEmail}{enter}`)

        cy.get('#loginEmail').invoke('prop', 'validationMessage')
        .should('equal', '')

        cy.get('#loginForm').find('[type=submit]').click()

        cy.get('#loginPassword').then($el => $el[0].checkValidity()).should('be.false')

        cy.get('#loginPassword').invoke('prop', 'validationMessage')
        .should('equal', 'Vennligst fyll ut dette feltet.')

/* source:
https://glebbahmutov.com/blog/form-validation-in-cypress/

testing in chrome
*/
    })
  })