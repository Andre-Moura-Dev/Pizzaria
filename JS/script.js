//Alternar Tema Claro e Escuro
const themeButton = document.getElementById('toggleTheme');

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.querySelector('header').classList.toggle('dark');
    document.querySelector('footer').classList.toggle('dark');
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
