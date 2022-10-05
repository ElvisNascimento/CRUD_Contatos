function percorrerTodosOsChecks()
{
    let todosOsChecks = document.querySelectorAll('[data-check="acao"]');
}
function addButtonExcluir()
{
    btn_excluirTodos.classList.remove('d-none');
    //document.querySelector('excluirTodos').classList.add("d-block");
    let quantidaede = 0;
    
    percorrerTodosOsChecks();
    todosOsChecks.forEach((cadaCheck)=>{
        cadaCheck.checked === true  && quantidaede++;
    });

    if(quantidaede > 0)
    {
        btn_excluirTodos.classList.remove('d-none'); 
    }else{
        btn_excluirTodos.classList.add('d-none'); 
    }
}
async function excluirSelecionados() {
    let resposta = confirm('Deseja excluir este contato?');
    if(resposta != true)
    {
        return;
    }else{
        await fetch(url + cadaCheck.checked, {
            method: 'DELETE'
        });
        atualizarLista();
    }
}
// //pegando otodos os inputs (checkboxes) que estao na tela;
// 

