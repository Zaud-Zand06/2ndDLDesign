import "./style.css";

function importAll(r) {
  return r.keys().map(r);
}
const scrollImages = importAll(
  require.context("./scroll-images/", false, /\.(png|jpe?g|webp)$/)
);

const imageContainer = document.querySelector(".img-container");

function addImages(images) {
  //create the .scroll-images divs and add to .img-container div
  for (let index = 0; index < images.length; index++) {
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("scroll-images");

    const img = document.createElement("img");
    img.src = images[index];
    imageDiv.appendChild(img);
    imageContainer.appendChild(imageDiv);
  }
}

addImages(scrollImages);

imageContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  smoothScroll(imageContainer, evt.deltaY < 0 ? -30 : 30);
});

function smoothScroll(element, scrollAmount) {
  let start = null;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const fraction = progress / 10000; // Adjust as needed

    if (fraction < 1) {
      element.scrollBy({
        left: scrollAmount * fraction,
        behavior: "auto",
      });
      requestAnimationFrame(step);
    } else {
      element.scrollBy({
        left: scrollAmount,
        behavior: "auto",
      });
    }
  };
  requestAnimationFrame(step);
}
