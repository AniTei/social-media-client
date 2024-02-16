//The user can log in with the login form with valid credentials

// use pages workflow!!

describe("Login, valid input", () => {
    it("can log in with the login form with valid credentials", () => {

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

        })
    })