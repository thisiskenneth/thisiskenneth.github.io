document.addEventListener('DOMContentLoaded', function () {
    const popoverButton = document.getElementById('popoverButton');
    const sliderButton = document.getElementById('sliderButton');
    const megamenuButton = document.getElementById('megamenuButton');
    const scrollspyButton = document.getElementById('scrollspyButton');
    const barraprogresoButton = document.getElementById('barraprogresoButton');
    const listasButton = document.getElementById('listasButton');
    const panelesButton = document.getElementById('panelesButton');
    const breadcrumbsButton = document.getElementById('breadcrumbsButton');
    const thumbnailsButton = document.getElementById('thumbnailsButton');

    if (popoverButton) {
        popoverButton.addEventListener('click', function () {
            window.location.href = 'MODULO 7/Popover/popover.html';
        });
    }

    if (sliderButton) {
        sliderButton.addEventListener('click', function () {
            window.location.href = 'MODULO 7/Slider/slider.html';
        });
    }

    if (megamenuButton) {
        megamenuButton.addEventListener('click', function () {
            window.location.href = 'MODULO 8/Megamenu/megamenu.html';
        });
    }

    if (scrollspyButton) {
        scrollspyButton.addEventListener('click', function () {
            window.location.href = 'MODULO 8/Scrollspy y Tabs/scrollspy.html';
        });
    }

    if (barraprogresoButton) {
        barraprogresoButton.addEventListener('click', function () {
            window.location.href = 'MODULO 9/Barra de Progreso/barra.html';
        });
    }

    if (listasButton) {
        listasButton.addEventListener('click', function () {
            window.location.href = 'MODULO 10/Listas/listas.html';
        });
    }

    if (panelesButton) {
        panelesButton.addEventListener('click', function () {
            window.location.href = 'MODULO 11/Paneles/paneles.html';
        });
    }

    if (breadcrumbsButton) {
        breadcrumbsButton.addEventListener('click', function () {
            window.location.href = 'MODULO 12/Breadcrumbs/breadcrumbs.html';
        });
    }

    if (thumbnailsButton) {
        thumbnailsButton.addEventListener('click', function () {
            window.location.href = 'MODULO 13/Thumbnails y Media Object/thumbnails.html';
        });
    }
});
