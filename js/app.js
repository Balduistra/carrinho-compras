let soma = 0;
document.querySelector('.carrinho__produtos__produto').innerHTML = '';
valorTotal = document.getElementById('valor-total').innerHTML = 'R$0';


let listaDeProdutos = [];
function adicionar() {
    let produto = document.getElementById('produto');
    let itemSelecionado = produto.value;
    let preco = parseInt(itemSelecionado.split(' - ')[1].replace('R$', ''));
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let nomeItem = itemSelecionado.split(' - ')[0];
    let valor = preco * quantidade;

    let carrinho = document.querySelector('.carrinho__produtos__produto');
    carrinho.innerHTML = carrinho.innerHTML + `<br><span class="texto-azul">${quantidade}</span> ${nomeItem} <span class="texto-azul">R$ ${valor}</span>`
    
    soma = soma + valor;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$ ${soma}`;
    parseInt(document.getElementById('quantidade').value = 0);
    

}


function limpar(){
    document.querySelector('.carrinho__produtos__produto').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0';
    return soma = 0;
}















// function nome (value) {
//     let nome = produto.querySelector(`select option[value="${value}"]`)
   
// }



