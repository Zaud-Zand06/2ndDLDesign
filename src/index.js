import './style.css';

const imageContainer = document.querySelector('.img-container');

imageContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    smoothScroll(imageContainer, evt.deltaY < 0 ? -30 : 30);
});

function smoothScroll(element, scrollAmount) {
    let start = null;
    const step = timestamp => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const fraction = progress / 10000; // Adjust as needed

        if (fraction < 1) {
            element.scrollBy({
                left: scrollAmount * fraction,
                behavior: 'auto'
            });
            requestAnimationFrame(step);
        } else {
            element.scrollBy({
                left: scrollAmount,
                behavior: 'auto'
            });
        }
    };
    requestAnimationFrame(step);
}