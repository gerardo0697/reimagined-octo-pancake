function toggleContent(card) {
    var fullText = card.querySelector('.full-text');
    var summaryText = card.querySelector('.card-text-summary');
    var isExpanded = card.classList.contains('card-expanded');
    var button = card.querySelector('.show-more');
    var socialIcons = document.querySelector('.social-icons');

    // Colapsar todas las tarjetas abiertas antes de expandir la actual
    var allCards = document.querySelectorAll('.card');
    allCards.forEach(function(otherCard) {
        if (otherCard !== card && otherCard.classList.contains('card-expanded')) {
            otherCard.classList.remove('card-expanded');
            otherCard.querySelector('.full-text').style.display = 'none';
            otherCard.querySelector('.card-text-summary').style.display = '-webkit-box';
            otherCard.querySelector('.show-more').textContent = 'Ver más';
        }
    });

    if (isExpanded) {
        // Si está expandida, colapsarla
        fullText.style.display = 'none';
        summaryText.style.display = '-webkit-box';
        card.classList.remove('card-expanded');
        button.textContent = 'Ver más';

        // Restaurar el overflow del body para permitir el scroll
        document.body.style.overflowX = ''; // Restablecer el overflow
    } else {
        // Expandir la tarjeta
        fullText.style.display = 'block';
        summaryText.style.display = 'none';
        card.classList.add('card-expanded');
        button.textContent = 'Ver menos';

        // Ocultar íconos de redes sociales en pantallas grandes
        if (window.innerWidth > 576) {
            socialIcons.style.display = 'none';
        }

        // Centrar la tarjeta en la vista
        card.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        // Ajustar el ancho de la tarjeta expandida
        card.style.width = '100%'; // Usar el ancho completo del contenedor
        card.style.maxWidth = '1200px'; // Ajuste opcional

        // Asegurarse de que el body no tenga overflow
        document.body.style.overflow = 'hidden'; // Evitar el scroll del body cuando la tarjeta está expandida
    }
}
