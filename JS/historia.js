document.getElementById('toggleHistory').addEventListener('click', function() {
    const historyDiv = document.getElementById('history');

    //Alterna a visibilidade da div.history
    if(historyDiv.style.display === 'none' || historyDiv.style.display === '') {
        historyDiv.style.display = 'block';
        this.textContent = 'Ocultar História'; // Muda o texto do botão para "Ocultar História"
    }

    else {
        historyDiv.style.display = 'none';
        this.textContent = 'Mostrar História'; // Muda o texto do botão para "Mostrar História"
    }
});