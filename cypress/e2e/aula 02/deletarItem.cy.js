import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Deletar itens da lista', () => {

    /**
     * DADO - BEFORE - antes do primeiro teste
     * BEFORE EACH - antes de cada teste
     */
    beforeEach(()=>{
        cy.visit('/')
        var todoItens = ["Maça", "Banana", "Cenoura"]
        
        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
        })

    })

 
    it('deleção um item da lista', () => {
         telaInicial.deletarItem()
    })


});