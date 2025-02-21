
import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Regressivo ToDo App', () =>{

    context('Validar a tela inicial',() => {
         beforeEach(() => {
            cy.visit('/')
        });

        it('Validar a area label de imput de dados', () => {
            telaInicial.validarImput("What needs to be done?")
        })
    })
    
    
    context('Validar a adição de itens',() => {
        beforeEach(() => {
            cy.visit('/')
        });

        it('Adicionar mais de um item a lista', () => {
            var todoItens = ["Maça", "Banana", "Cenoura"]        
            todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)
            })                
            /**
             * validar que o contador é 3
             */
            telaInicial.validarContador(3)
          });     
        
    })

    
    context('Validar a conclusão de itens',() => {
        beforeEach(()=>{
            cy.visit('/')
            var todoItens = ["Maça", "Banana", "Cenoura"]
          
            todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)
            })           
        })

        it('Concluir um item da lista toDO', () => {
            telaInicial.concluirItem()    
            telaInicial.validarContador(2)               
        })
    })

    
    context('Validar o filtro da aplicação',() => {
        beforeEach(()=>{
                cy.visit('/')
                var todoItens = ["Maça", "Banana", "Cenoura"]
                
                todoItens.forEach(function(item, indice, array){
                    telaInicial.inputText(item)
                })        
                telaInicial.concluirItem()
            })
 
        it('Validar a lista de itens ativos',() => {
            telaInicial.filtrarItens('Active')  
            telaInicial.validarSizeToDo(2)
        })
 
        it('Validar a lista de itens concluidos',() => {
            telaInicial.filtrarItens('Completed')  
            telaInicial.validarSizeToDo(1)
        })
    })

    
    context('Validar a remoção de itens',() => {
        beforeEach(()=>{
                cy.visit('/')
                var todoItens = ["Maça", "Banana", "Cenoura"]
                
                todoItens.forEach(function(item, indice, array){
                    telaInicial.inputText(item)
                })        
            })
         
            it('deleção um item da lista', () => {
                 telaInicial.deletarItem()
                 telaInicial.validarSizeToDo(2)
            })
    })
});