// const mockOtp = '111111'

describe('Login Page', () => {
  it('should login successfully', () => {
    cy.visit('https://maknet-account.mango-qa.siammakro.cloud/en/auth/onboard?callbackURI=https%3A%2F%2Fmaknet-webapp.mango-qa.siammakro.cloud%2Fen%2Fcallback%2F%3Freferrer%3Dhttps%3A%2F%2Fmaknet-webapp.mango-qa.siammakro.cloud%2Fen')
      cy.get('[data-testid="btn_login_number_or_email"]')
        .should('be.visible')
        .type('0812345678')
        .should('have.value', '081 234 5678')

      cy.get('[data-testid="btn_continue"]')
        .should('be.visible')
        .click()
        .wait(500)
      
      cy.get('[data-testid="btn_continue_with_otp"]')
        .should('be.visible')
        .click({ force: true })

      //Mock OTP
      // cy.intercept('POST', '/api/send-otp').as('sendOtp')

      // cy.wait('@sendOtp').then((interception) => {
      //   const otp = interception.response.body.otp

      //   for (let i = 0; i < otp.length; i++) {
      //     cy.get('[data-testid="input-OTP"]').eq(i).type(otp[i])
      //   }
      // })

      cy.lighthouse({
        performance: 50,
        accessibility: 80,
        'best-practices': 80,
        seo: 80,
      })
  })
})
