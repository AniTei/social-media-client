//The user cannot submit the login form with invalid credentials and is shown a message.

// use pages workflow!!

describe("login, invalid input", () => {

    it("can NOT submit the login form with invalid credentials and is shown a message", () => {
    
        cy.visit("https://norofffeu.github.io/social-media-client/")

        const inValidEmail = 'navn@post.no';
        const inValidPassword = 'pass';

        cy.contains('Login').click()

        cy.get('#loginEmail').type(`${inValidEmail}{enter}`)

        cy.get('#loginEmail')
        .should('have.value', inValidEmail)

        cy.get('#loginPassword').type(`${inValidPassword}{enter}`)

        cy.get('#loginPassword')
        .should('have.value', inValidPassword)

        cy.contains('message')
    
    })
  })