const randomNumber = Math.floor(10000 + Math.random() * 90000)
const email = `testemail${randomNumber}@mail.com`

describe('Signup/Login Page', () => {
    it('should register user', () => {
        cy.visit('https://automationexercise.com')
        // cy.screenshot('signup-login-page_register-user_1')

        cy.contains('Signup / Login').should('exist').click()
        // cy.screenshot('signup-login-page_register-user_2')

        cy.contains('New User Signup!').should('exist')

        // cy.get('input[name="name"]').should('exist')
        //     .type('Test Name')

        cy.get('[data-qa="signup-name"]').should('exist')
            .type('Test Name')
        cy.get('[data-qa="signup-email"]').should('exist')
            .type(email)
        // cy.screenshot('signup-login-page_register-user_3')

        cy.get('[data-qa="signup-button"]').should('exist')
            .click()
        // cy.screenshot('signup-login-page_register-user_4')

        cy.contains('Title').should('exist')
        cy.get('[type="radio"]').should('exist')
            .first().check()

        cy.get('[data-qa="password"]').should('exist')
            .type('Pass@1234567890')

        cy.get('[data-qa="days"]').should('exist')
            .select(1)

        cy.get('[data-qa="months"]').should('exist')
            .select('January')

        cy.get('[data-qa="years"]').should('exist')
            .select('2020')

        cy.get('[data-qa="first_name"]').should('exist')
            .type('Kendall')

        cy.get('[data-qa="last_name"]').should('exist')
            .type('Jenner')

        cy.get('[data-qa="company"]').should('exist')
            .type('KK')

        cy.get('[data-qa="address"]').should('exist')
            .type('LA, USA')

        cy.get('[data-qa="country"]').should('exist')
            .select('India')

        cy.get('[data-qa="state"]').should('exist')
            .type('LA')
        
        cy.get('[data-qa="city"]').should('exist')
            .type('CA')

        cy.get('[data-qa="zipcode"]').should('exist')
            .type('1231231')

        cy.get('[data-qa="mobile_number"]').should('exist')
            .type('2131263127863871')

        cy.get('[data-qa="create-account"]').should('exist')
            .click()
    });

    // it('should ...', () => {

    // })
});