/**
 * Feature >>> describe
 * background  >>> contexto ou beforeEach
 * caso de teste >> it
 */
import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'


describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://todomvc.com/examples/backbone_marionette/')
    telaInicial.inputText()
  })
});