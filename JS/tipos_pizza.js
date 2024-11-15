// Efeito de animação no preço
document.querySelectorAll('.card-price').forEach(price => {
    price.addEventListener('click', () => {
        price.style.transition = 'transform 0.5s ease, color 0.3s ease';
        price.style.transform = 'scale(1.2)'; // Aumenta o tamanho
        price.style.color = 'green'; // Altera a cor para verde

        //Retorna ao tamanho original depois de 1 segundo

        setTimeout(() => {
            price.style.transform = 'scale(1)'; // Retorna ao tamanho original
            price.style.color = 'black'; // Retorna à cor original (preto)
        }, 1000);
    });
});