import "./style.css";
import menuImage from "./DLMenu.jpg";
import monthlySpecialImage from "./monthlySpecial.jpg";
import flamesGif from "./flames.gif";
import logoImage from "./the_logo.webp";

function importAll(r) {
  return r.keys().map(r);
}
const scrollImages = importAll(
  require.context("./scroll-images/", false, /\.(png|jpe?g|webp)$/)
);

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

const domManipulator = (function () {
  document.body.style.backgroundImage = "./the_logo.webp";
  const siteBody = document.querySelector(".site-body");

  function clearBody() {
    siteBody.innerHTML = "";
  }

  function addImages(images) {
    const imageContainer = document.querySelector(".img-container");
    //create the .scroll-images divs and add to .img-container div
    for (let index = 0; index < images.length; index++) {
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("scroll-images");

      const img = document.createElement("img");
      img.src = images[index];
      imageDiv.appendChild(img);
      imageContainer.appendChild(imageDiv);
    }

    imageContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      smoothScroll(imageContainer, evt.deltaY < 0 ? -30 : 30);
    });
  }

  const acc = document.getElementsByClassName("accordion");

  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  function makeMenuBody() {
    const menu = document.createElement("img");
    menu.src = menuImage;
    menu.classList.add("menu-image");
    siteBody.appendChild(menu);
  }

  function makeSpecialCard() {
    const monthlySpecial = document.createElement("div");
    monthlySpecial.classList.add("monthly-special");
    siteBody.appendChild(monthlySpecial);
    const specialH1 = document.createElement("h1");
    specialH1.innerHTML = "WHAT'S GOING ON THIS MONTH?";
    monthlySpecial.appendChild(specialH1);
    const specialCard = document.createElement("div");
    specialCard.classList.add("special-card");
    monthlySpecial.appendChild(specialCard);
    const specialCardH2 = document.createElement("h2");
    specialCardH2.classList.add("gradient-text");
    specialCardH2.innerHTML = "The Cajun Sando!";
    specialCard.appendChild(specialCardH2);
    const specialDescription = document.createElement("p");
    specialDescription.innerHTML =
      "A specially crafted blend of spices to mix up our menu every month! Check back soon to see what we've got!";
    specialCard.appendChild(specialDescription);
    const specialImage = document.createElement("img");
    specialImage.src = monthlySpecialImage;
    specialCard.appendChild(specialImage);
  }

  function makeAboutUsCard() {
    const aboutUs = document.createElement("div");
    aboutUs.classList.add("about-us");
    siteBody.appendChild(aboutUs);
    const aboutUsH1 = document.createElement("h1");
    aboutUsH1.innerHTML = "WHAT WE ARE";
    aboutUs.appendChild(aboutUsH1);
    const aboutUsDescription = document.createElement("p");
    aboutUsDescription.innerHTML = `Nashville-style fried chicken is characterized by it's oil dip, and
    spiced dust that it gets as soon as it comes out the fryer. This gives
    it its charcteristic red colour, and helps to coat your mouth with our
    delicious spice blends! Since our inception in 2012, Doug Stephen has
    been singmindedly focused on the perfection of this storied chicken,
    with the goal of sharing his mouth-watering creations to all of
    Vancouver!`;
    aboutUs.appendChild(aboutUsDescription);
  }

  function makeScrollableImages() {
    const scrollableImageBar = document.createElement("div");
    scrollableImageBar.classList.add("img-container", "inline-snaps");
    siteBody.appendChild(scrollableImageBar);
    addImages(scrollImages);
  }

  function makeHomePage() {
    clearBody();
    makeSpecialCard();
    makeAboutUsCard();
    makeScrollableImages();
    addGifs();
  }

  const menuButton = document.querySelector("#menu-button");
  menuButton.addEventListener("click", () => {
    if (menuButton.innerHTML == "MENU") {
      //refactor this into seperate function
      menuButton.innerHTML = "TAKE ME BACK!";
      clearBody();
      makeMenuBody();
    } else {
      menuButton.innerHTML = "MENU";
      makeHomePage();
    }
  });

  const logoButton = document.querySelector("#secret-menu");
  logoButton.addEventListener("click", () => {
    menuButton.innerHTML = "TAKE ME BACK!";
    clearBody();
    const secret = document.createElement("p");
    secret.innerHTML = `You found our secret menu! 
    Unfortunately theres nothing here yet`;
    siteBody.appendChild(secret);
  });

  function addGifs() {
    const gifs = document.getElementsByClassName("flame-images");
    for (let index = 0; index < gifs.length; index++) {
      gifs[index].src = flamesGif;
    }
  }
  return { makeHomePage };
})();

domManipulator.makeHomePage();
domManipulator.backgroundMaker();
