import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Concluir itens de toDo', () => {

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


    it('Concluir um item da lista toDO', () => {
        telaInicial.concluirItem()
        

    })


});

