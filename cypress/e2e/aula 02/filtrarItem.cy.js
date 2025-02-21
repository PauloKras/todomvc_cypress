import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Validar os filtros da aplicação apos adição de itens', () => {

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

        telaInicial.concluirItem()
    })

    /**
     * clicar no filtro
     * o item a ser exibido
     * e o contador deve bater a informação
     */
    it('filtrar itens ativos', () => {
         telaInicial.filtrarItens('Active')  
    })

    it.skip('filtrar itens concluidos', () => {
               

    })
});

