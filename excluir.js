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
async function excluirSelecionados(){
    if(false === confirm('Tem Certeza?'))
    {
        return;
    }
    console.log('excluir');
    percorrerTodosOsChecks();
    todosOsChecks.forEach((cadaCheck) => {
        if(cadaCheck.checked === true){
            fetch(url + checked.value,{
                method: 'DELETE'
            })
        }
    });
    atualizarLista();
}
// //pegando otodos os inputs (checkboxes) que estao na tela;
// 

