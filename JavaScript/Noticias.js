function toggleContent(card) {
    var fullText = card.querySelector('.full-text');
    var summaryText = card.querySelector('.card-text-summary');
    var isExpanded = card.classList.contains('card-expanded');
    var button = card.querySelector('.show-more');
    var socialIcons = document.querySelector('.social-icons');

    // Colapsar todas las tarjetas abiertas antes de expandir la nueva
    var allCards = document.querySelectorAll('.card');
    allCards.forEach(function (otherCard) {
        if (otherCard !== card && otherCard.classList.contains('card-expanded')) {
            var otherFullText = otherCard.querySelector('.full-text');
            var otherSummaryText = otherCard.querySelector('.card-text-summary');
            otherFullText.style.display = 'none';
            otherSummaryText.style.display = '-webkit-box';
            otherCard.classList.remove('card-expanded');
            var otherButton = otherCard.querySelector('.show-more');
            otherButton.textContent = 'Ver más';
        }
    });

    // Expandir o colapsar la tarjeta actual
    if (isExpanded) {
        // Colapsar
        fullText.style.display = 'none';
        summaryText.style.display = '-webkit-box';
        card.classList.remove('card-expanded');
        button.textContent = 'Ver más';
        socialIcons.style.display = 'flex';
        card.style.width = '';
        card.style.margin = '';
    } else {
        // Expandir
        fullText.style.display = 'block';
        summaryText.style.display = 'none';
        card.classList.add('card-expanded');
        button.textContent = 'Ver menos';
        socialIcons.style.display = 'none';

        // Obtener el ancho del contenedor y ajustar el ancho de la tarjeta
        const mainContainer = document.querySelector('main.container');
        const containerWidth = mainContainer.clientWidth;
        const desiredCardWidth = containerWidth * 0.8; // Tarjeta ocupará el 80% del contenedor

        card.style.width = desiredCardWidth + 'px';
        card.style.maxWidth = '90%';
        card.style.marginLeft = 'auto';
        card.style.marginRight = 'auto';
        card.style.padding = '0'; // Eliminar padding extra

        // Desplazar la tarjeta a la vista del usuario
        card.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}
