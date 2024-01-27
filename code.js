const imageContainer = document.querySelector('.img-container');

imageContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    imageContainer.scrollBy({
        left: evt.deltaY < 0 ? -30 : 30,
    });
});