//The user can log out with the logout button
// Manual testing, it works

// use pages workflow!!


describe("Logout", () => {
    it("can log out with the logout button", () => {

        cy.visit("https://norofffeu.github.io/social-media-client/")
        
        const validEmail = 'anitei32772@stud.noroff.no';
        const validPassword = 'Hyssing123';

        cy.wait(5000)        
        
        cy.get('#registerForm').find('[data-auth=login]').click()
        
        cy.wait(5000)

        cy.get('#loginEmail').type(`${validEmail}{enter}`)

        cy.get('#loginEmail')
        .should('have.value', validEmail)

        cy.get('#loginPassword').type(`${validPassword}{enter}`)

        cy.get('#loginPassword')
        .should('have.value', validPassword)
        
        cy.wait(5000);

        cy.contains('Logout').click()

    })
})


