function filtrarContato(){
    let expressao = input_busca.value.toLowerCase(); // valor digitado pelo usuario
    atualizarLista(expressao);
//     let linhas = contatos.getElementsByTagName('h2');
//     for (let posicao in linhas ) {
//         if(isNaN(posicao)){
//             continue;
//         }
//         // console.log(linhas);
//         //se dentro da linha atual(h2) existir a expressao digitada pelo usuario,
//         //mostra a linha se nao esconde
//         let linha = linhas[posicao].innerText.toLowerCase();

//         if(linha.includes(expressao)){
//             linhas[posicao].style.display = '';
//         }else{
//             linhas[posicao].style.display = 'none';
//         }
//     }
}