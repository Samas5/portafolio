const header = document.getElementById('header');
const stopSection = document.querySelector('.tecnologias');
const stopPosition = stopSection.offsetTop;

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (scrollPos >= stopPosition) {
        header.style.top = '-100px'; // oculta el header (ajusta -100px si es necesario)
    } else {
        header.style.top = '0';
    }
});
