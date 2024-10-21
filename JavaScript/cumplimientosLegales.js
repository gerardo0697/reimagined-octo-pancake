document.addEventListener("DOMContentLoaded", function() {
    const pdfCards = document.querySelectorAll('.pdf-card');
    const pdfOverlay = document.querySelector('.pdf-overlay');
    const pdfModal = document.querySelector('.pdf-modal');
    const pdfFrame = document.querySelector('.pdf-frame-modal');
    const closePdfBtn = document.querySelector('.close-pdf');
    const downloadPdfBtn = document.querySelector('.download-pdf');

    // Abrir PDF en modal al hacer clic en el botón
    pdfCards.forEach(card => {
        card.querySelector('.open-pdf').addEventListener('click', function() {
            const pdfUrl = card.getAttribute('data-pdf'); // Obtiene el URL del PDF

            // Configurar el iframe del modal y el enlace de descarga
            pdfFrame.src = pdfUrl;
            downloadPdfBtn.href = pdfUrl;

            // Mostrar el modal
            pdfOverlay.style.display = 'block';
            pdfModal.style.display = 'block';
        });
    });

    // Cerrar el modal al hacer clic en el botón de cerrar
    closePdfBtn.addEventListener('click', function() {
        pdfOverlay.style.display = 'none';
        pdfModal.style.display = 'none';
        pdfFrame.src = '';  // Limpiar el iframe cuando se cierra el modal
    });

    // También cerrar el modal al hacer clic en el overlay (fondo oscuro)
    pdfOverlay.addEventListener('click', function() {
        pdfOverlay.style.display = 'none';
        pdfModal.style.display = 'none';
        pdfFrame.src = '';  // Limpiar el iframe
    });
});
