// Recupera o botão de alternância de tema
const toggleThemeButton = document.getElementById('toggleTheme');

// Verifica se o tema preferido está salvo no localStorage
const savedTheme = localStorage.getItem('theme');

// Se o tema salvo for "dark", aplica o tema escuro
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

// Função para alternar entre tema claro e escuro
toggleThemeButton.addEventListener('click', () => {
    // Alterna a classe dark-mode no body
    document.body.classList.toggle('dark-mode');

    // Salva a preferência do tema no localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});



document.addEventListener('DOMContentLoaded', function() {
    //Obtém todos os elementos com a classe 'card-price'
    const prices = document.querySelectorAll('.card-price');

    //Define o comportamento de clique no botão "Peça agora"
    const buttons = document.querySelectorAll('.btn-primary');

    buttons.forEach(function(button, index) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o link de redirecionar para a página de carrinho

            const price = prices[index].getAttribute('data-preco');
            alert(`O preço da pizza é: R$ ${price}`);
        });
    });
});

document.getElementById('togllePizzas').addEventListener('click', function () {
    const PizzasDiv = document.getElementById('titlePizzas');

    //Alternar a visibilidade da Div "Título"
    if(PizzasDiv.style.display === 'none' || PizzasDiv.style.display === '') {
        PizzasDiv.style.display = 'block';
        this.textContent = 'Ocultar Título';
    }
    else {
        PizzasDiv.style.display = 'none';
        this.textContent = 'Mostrar Título';
    }
});