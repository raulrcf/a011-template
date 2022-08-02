const carrinho = {
    nome : "joao",
    formaDePagamento : "cartao",
    endereco: "Rua Dom Pedro",
    compras : [

        {produto: "banana", preco:5, quantidade:2},
        {produto: "limao", preco:10, quantidade:5},
        {produto: "pessego", preco:9, quantidade:10}




    ]
    
}


console.log(carrinho.compras)
console.log(carrinho.preco)
console.log(carrinho.quantidade)

const carrinhoPresente = {...carrinho };

console.log (carrinhoPresente)

carrinhoPresente.nome = "rodrigo"
carrinhoPresente.formaDePagamento = "cartao presente"

console.log(carrinhoPresente.nome)

console.log(carrinho.compras)