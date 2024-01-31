const imageContainer = document.querySelector('.img-container');
const acc = document.getElementsByClassName("accordion");

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
};

let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
} 