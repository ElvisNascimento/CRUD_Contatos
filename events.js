const url ='https://633349f2573c03ab0b5b9af4.mockapi.io/Contatos/'


async function excluirContato(id) {
    let resposta = confirm('Deseja excluir este contato?');
    if(resposta != true)
    {
        return;
    }else{
        await fetch(url + id, {
            method: 'DELETE'
        });
        atualizarLista();
    }
}

function atualizarLista() {
    contatos.innerHTML ='';
    fetch(url)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (lista) {
        lista.forEach(function (cadaContato) {
            contatos.innerHTML += 
            `
                <div class="row">
                        <div class="col-10 bg-primary">
                            <div class="row">
                                <div class="col-6">
                                ${cadaContato.id}${cadaContato.contato} ${cadaContato.telefone} ${cadaContato.cidade}
                                </div>
                            </div>
                        </div>
                    <div class="col-2 bg-info">
                        <div class="row">
                            <div class="btn-group" role="group">
                                <button onclick="editarContato(${cadaContato.id})" class="btn btn-warning" data-bs-toggle="offcanvas" data-bs-target="#offcanvasEditar">Editar</button>
                                <button onclick="excluirContato(${cadaContato.id})" class="btn btn-danger">Excluir</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    })
}
async function inserirNovocontato(){
    event.preventDefault();
    let dados ={
        contato: input_contato.value,
        telefone: parseInt(input_telefone.value),    
    };
    if(dados.contato !== '' && dados.telefone !==''){
        await fetch(url,{
            method: 'POST',
            body: JSON.stringify(dados),// convertendo dados que é um objeto em um novo array de string
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(resposta => resposta.json())
        .then(contato => atualizarLista());

        form_add.reset();
        let x = document.querySelector('[data-bs-dismiss="modal"]');
        x.dispatchEvent(new Event('click'));
        console.log('cadastrou');
    }else{
        alert('Não há contatos para serem adicionados!');
    }
}
async function editarContato(id)
{
    await fetch(url + id)//url + o id do contato que foi selecionado
    .then(res=> res.json())
    .then(dados =>{
        input_editar_id.value = dados.id;
        input_editar_contato.value = dados.contato;
        input_editar_telefone.value = dados.telefone;
        input_editar_cidade.value = dados.cidade;
    });
}
async function atualizarContatoEditado()
{
    event.preventDefault();//impede a pagina de recarregar
    console.log(2);
    let dados = {
        id: input_editar_id.value,
        contato: input_editar_contato.value,
        telefone: input_editar_telefone.value,
        cidade: input_editar_cidade.value,  
    };
    await fetch(url + dados.id,{
        method: 'PUT',
        body: JSON.stringify(dados),// convertendo dados que é um objeto em um novo array de string
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(res => res.json())
    .then(() => atualizarLista());
    let x = document.querySelector('[data-bs-dismiss="offcanvas"]');
    x.dispatchEvent(new Event('click'));
}

atualizarLista();