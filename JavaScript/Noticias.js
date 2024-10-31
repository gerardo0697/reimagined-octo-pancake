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
        
        // Mostrar íconos de redes sociales si es una pantalla grande
        if (window.innerWidth > 576) {
            socialIcons.style.display = 'flex';
        }
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
    }

    // Manejo del overflow del body
    if (card.classList.contains('card-expanded')) {
        document.body.style.overflowY = 'hidden'; // Evitar desplazamiento vertical del body
        card.style.overflowY = 'auto'; // Habilitar desplazamiento en la tarjeta expandida
        card.style.maxHeight = '90vh'; // Limitar la altura máxima para la tarjeta
    } else {
        document.body.style.overflowY = ''; // Restaurar el desplazamiento vertical del body
        card.style.overflowY = ''; // Restaurar el overflow de la tarjeta
        card.style.maxHeight = ''; // Restaurar la altura máxima
    }

    // Ajustar el ancho de la tarjeta expandida
    card.style.width = '100%'; // Usar el ancho completo del contenedor
    card.style.maxWidth = '1200px'; // Ajuste opcional
}

