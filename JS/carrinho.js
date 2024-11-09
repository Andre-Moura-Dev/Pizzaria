// Função para atualizar o carrinho
function atualizarCarrinho() {
    const prices = [29.99, 34.99, 39.99]; // Preços das pizzas
    let totalItems = 0;
    let subtotal = 0;

    // Pega os inputs de quantidade
    const quantities = [
        document.getElementById('quantidade-1').value,
        document.getElementById('quantidade-2').value,
        document.getElementById('quantidade-3').value
    ];

    // Calcula total de itens e subtotal
    quantities.forEach((quantity, index) => {
        totalItems += parseInt(quantity);
        subtotal += parseInt(quantity) * prices[index];
    });

    // Atualiza o total de itens e o subtotal
    document.getElementById('total-itens').textContent = totalItems;
    document.getElementById('subtotal').textContent = `R$ ${subtotal.toFixed(2)}`;

    // Calcula o total (incluindo frete fixo de R$ 10,00)
    const frete = 10.00;
    const total = subtotal + frete;
    document.getElementById('frete').textContent = `R$ ${frete.toFixed(2)}`;
    document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;
}

// Atualizar o carrinho sempre que a quantidade mudar
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', atualizarCarrinho);
});

// Chama a função de atualização ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarCarrinho);

// Ações dos botões
document.getElementById('finalizar-compra').addEventListener('click', () => {
    alert('Finalizando compra!');

    window.location.href = '/index.html'; // Redireciona para a página index.html
});

document.getElementById('continuar-comprando').addEventListener('click', () => {
    window.location.href = '/Paginas/carrinho.html'; // Redireciona para a página carrinho.html
});