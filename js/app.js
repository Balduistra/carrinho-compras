function adicionar() {
//através do Id foi selecionado o elemento Select dentro do documento HTML
    let produto = document.getElementById('produto');
//alocando o value de cada seleção 
    let itemSelecionado = produto.value;
//fazendo a divisão do value em dois valores apartir da string " - " pelo metodo split oq
// da uma array onde o indice [1] representa a segunda parte. 
//com o metodo replace, substitui-se o primeiro valor "R$" por uma string vazia sobrando só o numero;
//para transformar a string em um numero se usa o metodo parseInt.
    let preco = parseInt(itemSelecionado.split(' - ')[1].replace('R$', ''));
//pegando o valor do elemento 'quantidade' pelo id;
    let quantidade = parseInt(document.getElementById('quantidade').value);

    let valor  = preco * quantidade;
    console.log('o valoe é = ' + valor);

}

