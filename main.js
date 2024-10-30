const botaoComprar = document.querySelectorAll('.comprar');

botaoComprar.forEach(botao => {
    botao.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho!');
    });
});
