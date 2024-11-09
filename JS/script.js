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


//Abrir e fechar as informações dos cards
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões de toggle
    const toggleButtons = document.querySelectorAll('.toggle-content');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Seleciona o conteúdo extra associado ao botão clicado
            const extraContent = button.nextElementSibling;

            // Alterna a visibilidade
            if (extraContent.style.display === 'none' || extraContent.style.display === '') {
                extraContent.style.display = 'block';
            } else {
                extraContent.style.display = 'none';
            }
        });
    });
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