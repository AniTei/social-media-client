/* DØME */
//The user can log out with the logout button
// Manual testing, it works, maybe i need to have all the tests in the same describe?

//src/js/api/listeners/auth/logout?


describe("Logging in and out, valid/invalid", () => {
    it("can log in with the login form with valid credentials", () => {

        cy.visit("http://127.0.0.1:5500/")
        
        const validEmail = 'anitei32772@stud.noroff.no';
        const validPassword = 'Hyssing123';

        cy.contains('Login').click()

       
        cy.get('#loginEmail').type(`${validEmail}{enter}`)

        cy.get('#loginEmail')
        .should('have.value', validEmail)

        cy.get('#loginPassword').type(`${validPassword}{enter}`)

        cy.get('#loginPassword')
        .should('have.value', validPassword)

        /* cy.contains('Login[type=submit]').click();*/
        
        cy.wait(5000);



        })

   
    it("can log out with the logout button", () => {

        cy.visit("http://127.0.0.1:5500/")

         cy.contains('Logout').click()

    })


    it("can NOT submit the login form with invalid credentials and is shown a message", () => {
    
        cy.visit("http://127.0.0.1:5500/")


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


