document.getElementById('toglleAbout').addEventListener('click', function () {
    const AboutDiv = document.getElementById('about');

    //Alterna a visibilidade da div.history
    if(AboutDiv.style.display === 'none' || AboutDiv.style.display === '') {
        AboutDiv.style.display = 'block';
        this.textContent = 'Ocultar Sobre'; // Muda o texto do botão para "Ocultar História"
    }

    else {
        AboutDiv.style.display = 'none';
        this.textContent = 'Mostrar Sobre'; // Muda o texto do botão para "Mostrar História"
    }
});