document.getElementById('toglleContats').addEventListener('click', function () {
    const ContatsDiv = document.getElementById('contats');

    //Alterna a visibilidade da div.history
    if(ContatsDiv.style.display === 'none' || ContatsDiv.style.display === '') {
        ContatsDiv.style.display = 'block';
        this.textContent = 'Ocultar Contatos'; // Muda o texto do botão para "Ocultar História"
    }

    else {
        ContatsDiv.style.display = 'none';
        this.textContent = 'Mostrar Conatatos'; // Muda o texto do botão para "Mostrar História"
    }
});