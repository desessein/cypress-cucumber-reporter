import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'

Given('que o sistema está em desenvolvimento', () => {
  cy.then(() => {
    return 'skipped'
  })
})

When('o usuário tentar acessar o sistema', () => {
  cy.visit('/in-progress')
})

Then('deve ser exibido o texto "Sistema em Desenvolvimento"', () => {
  cy.contains('Sistema em Desenvolvimento').should('be.visible')
})

Then(
  'deve ser exibida a descrição "Nosso sistema será lançado em breve."',
  () => {
    cy.contains('Nosso sistema será lançado em breve.').should('be.visible')
  },
)

Given('que o usuário deseja acessar o sistema em desenvolvimento', () => {
  cy.then(() => {
    return 'skipped'
  })
})

When('o usuário tentar clicar no botão "Acessar"', () => {
  cy.visit('/in-progress')
  cy.xpath('//span[contains(text(), "ACESSAR")]').click()
})

Then('ele deve ser redirecionado para a tela de "Login"', () => {
  cy.url().should('include', '/login')
})
