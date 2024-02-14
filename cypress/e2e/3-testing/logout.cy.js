//The user can log out with the logout button
// Manual testing, it works

// use pages workflow!!


describe("Logout", () => {
    it("can log out with the logout button", () => {

        cy.visit("https://norofffeu.github.io/social-media-client/")

        cy.contains('Logout').click()

    })
})


