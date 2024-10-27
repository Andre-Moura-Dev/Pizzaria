//Fechar e abrir barra de navegação

const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.side-bar');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

//Alternar Tema Claro e Escuro

const themeButton = document.getElementById('toggleTheme');

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    sidebar.classList.toggle('dark');
    document.querySelector('header').classList.toggle('dark');
    document.querySelector('footer').classList.toggle('dark');
});