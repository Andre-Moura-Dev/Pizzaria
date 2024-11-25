document.addEventListener('DOMContentLoaded', () => {
    // Preços das pizzas no carrinho (id das pizzas e seus preços)
    const precos = {
        'quantidade-1': 29.99, // Pizza Margherita
        'quantidade-2': 34.99, // Pizza Pepperoni
        'quantidade-3': 39.99, // Pizza Doce de Chocolate com Morango
        'quantidade-4': 40.99, // Pizza Doce de banana com canela
        'quantidade-5': 39.99, // Pizza Doce de Chocolate com sorvete
        'quantidade-6': 23.99, // Pizza de Calabresa
    };

    // Seletores
    const quantidadeInputs = document.querySelectorAll('input[type="number"]');
    const totalItens = document.getElementById('total-itens');
    const subtotalSpan = document.getElementById('subtotal');
    const freteSpan = document.getElementById('frete');
    const totalSpan = document.getElementById('total');

    // Função para calcular os totais
    function atualizarCarrinho() {
        let total = 0;
        let itemsCount = 0;
        
        // Calcula o subtotal e total de itens com base na quantidade
        quantidadeInputs.forEach(input => {
            const id = input.id;
            const quantidade = parseInt(input.value);
            const preco = precos[id];

            // Se a quantidade for maior que 0, conta como item
            if (quantidade > 0) {
                total += preco * quantidade;
                itemsCount += quantidade;
            }
        });

        // Atualiza o total de itens
        totalItens.textContent = itemsCount;

        // Atualiza o subtotal
        subtotalSpan.textContent = `R$ ${total.toFixed(2)}`;

        // Adiciona o frete fixo
        const frete = 10.00; // frete fixo para simplificação
        freteSpan.textContent = `R$ ${frete.toFixed(2)}`;

        // Atualiza o total (Subtotal + Frete)
        const totalFinal = total + frete;
        totalSpan.textContent = `R$ ${totalFinal.toFixed(2)}`;
    }

    // Atualizar os totais quando a quantidade for alterada
    quantidadeInputs.forEach(input => {
        // Inicia com valor 0 em vez de 1
        input.value = 0;

        input.addEventListener('input', atualizarCarrinho);
    });

    // Inicializa a exibição do carrinho ao carregar a página
    atualizarCarrinho();

    // Remover Itens do Carrinho
    const removeButtons = document.querySelectorAll('.remove.item');

    removeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Encontrar o botão de remoção
            const itemElement = button.closest('.list-group-item');
            if (itemElement) {
                itemElement.remove();
            }

            // Após a remoção, recalcular o carrinho
            atualizarCarrinho();
        });
    });
});

//Listener para finalizar compra
document.addEventListener('DOMContentLoaded', () => {
    const finalizarCompraButton = document.getElementById('finalizar-compra');
    //alert("Finalizando Compra!");

    finalizarCompraButton.addEventListener('click', () => {
        window.location.href = ('/index.html');
    });
});

//Listener para continuar a compra
document.addEventListener('DOMContentLoaded', () => {
    const continuarCompraButton = document.getElementById('continuar-comprando');
    
    continuarCompraButton.addEventListener('click', () => {
        window.location.href = ('/Paginas/carrinho.html');
    });
})