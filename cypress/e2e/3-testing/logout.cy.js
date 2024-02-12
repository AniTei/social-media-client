//The user can log out with the logout button
// Manual testing, it works

// use pages workflow!!


describe("Logout", () => {
    it("can log out with the logout button", () => {

        cy.visit("http://127.0.0.1:5500/")

        cy.contains('Logout').click()

    })
})


