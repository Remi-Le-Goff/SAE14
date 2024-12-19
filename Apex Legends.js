document.addEventListener("DOMContentLoaded", () => {
    // Sélectionner toutes les icônes des légendes
    const legendIcons = document.querySelectorAll('.legends-icons img');

    // Sélectionner toutes les images de légendes à afficher
    const legendImages = document.querySelectorAll('.legends .legend-image');

    // Sélectionner toutes les cadres des détails
    const legendDetails = document.querySelectorAll('.legend-details');

    // Parcourir chaque icône pour ajouter les événements de survol
    legendIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            // Récupérer la classe de légende associée depuis l'attribut data-legend
            const legendName = icon.dataset.legend;

            // Cacher toutes les images de légendes et les cadres de détails
            legendImages.forEach(image => image.style.opacity = '0');
            legendDetails.forEach(detail => detail.style.opacity = '0');

            // Afficher uniquement l'image et les détails associés
            const targetImage = document.querySelector(`.legend-image.${legendName}`);
            const targetDetail = document.querySelector(`.legend-details.${legendName}`);

            if (targetImage) {
                targetImage.style.opacity = '1';
            }
            if (targetDetail) {
                targetDetail.style.opacity = '1';
            }
        });

        icon.addEventListener('mouseout', () => {
            // Cacher toutes les images de légendes et les cadres de détails lors du mouseout
            legendImages.forEach(image => image.style.opacity = '0');
            legendDetails.forEach(detail => detail.style.opacity = '0');
        });
    });
});
