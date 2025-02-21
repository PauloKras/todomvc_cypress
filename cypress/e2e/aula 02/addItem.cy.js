import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Adicionar itens na minha lista de toDo', () => {

    /**
     * DADO - BEFORE - antes do primeiro teste
     * BEFORE EACH - antes de cada teste
     * busca do arquivo cypress.config.jsA
     * 
     * https://docs.cypress.io/api/commands/visit
     */
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Adicionar um item na lista', () => {
        telaInicial.inputText("dado01")
    })

    it('Adicionar mais de um item', () => {
      var todoItens = ["Maça", "Banana", "Cenoura"]

      todoItens.forEach(function(item, indice, array){
        telaInicial.inputText(item)
      })

  })
})

