/// <reference types='cypress' />

describe('Testes para uma agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Teste para adicionar um contato', () => {
        cy.get('[type="text"]').type('Breno Pereira')
        cy.get('[type="email"]').type('fulano@gmail.com')
        cy.get('[type="tel"]').type('32987654321')
        cy.get('.adicionar').click()

        cy.screenshot()
    })

    it('Teste para alterar os dados de um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('Breno Betti')
        cy.get('[type="email"]').clear().type('ciclano@gmail.com')
        cy.get('[type="tel"]').clear().type('32912345678')
        cy.get('.alterar').click()

        cy.screenshot()
    })

    it('Teste para remover um contato', () => {
        cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()

        cy.screenshot()
    })
})