function adicionar() {
   
    // ---- pegar o produto selecionado = nome, valor e quant ----
    
    //produto selecionado  
    let produtoSelecionado = document.getElementById('produto').value;
    
    //nome
    //(split utilizado para pegar o que está escrito antes de algo, neste caso seria antes do "-")
    //[0] - posição ZERO pois quer o que está antes do "-"
    let nomeProduto = produtoSelecionado.split('-')[0];
    
    //valor unitario 
    //[1] - posição UM pois quer o que está depois do "R$"
    let valorUnitario = produtoSelecionado.split('R$')[1];
   
    //quantidade
    let quantProduto = document.getElementById('quantidade').value;
    
    //calculo do subtotal dos produtos SELECIONADOS 
    let totalProdutosSelecionados = quantProduto * valorUnitario;

    //adicionar ao carrinho
    let produtosCarrinho = document.getElementById('lista-produtos');
    produtosCarrinho.innerHTML = produtosCarrinho.innerHTML +
    `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${totalProdutosSelecionados}</span>
    </section>`;

    //atualizar o valor TOTAL do carrinho
    totalGeral = totalGeral + totalProdutosSelecionados;

    let totalCarrinho = document.getElementById('valor-total');
    totalCarrinho.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;

}

//zerar o total Geral fora da função, pois se não toda vez que clicar no botão adicionar irá zerar o carrinho
let totalGeral = 0;
//removeu o produto "padrão" do site, neste caso seria o CELULAR
document.getElementById('lista-produtos').innerHTML = '';
//inicializar o carrinho com o valor zero
document.getElementById('valor-total').textContent = 'R$ 0';

function limpar() {

    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}