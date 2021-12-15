//Testimonials Slider
const sliders = document.querySelectorAll(".slider-card");
const bullets = document.querySelectorAll(".bullets button");
const body = document.body;
let counter = 1;

function showSlider(counter) {
  switch (counter) {
    case 1:
      sliders[0].style.display = "block";
      sliders[1].style.display = "none";
      sliders[2].style.display = "none";
      sliders[3].style.display = "none";
      break;
    case 2:
      sliders[0].style.display = "none";
      sliders[1].style.display = "block";
      sliders[2].style.display = "none";
      sliders[3].style.display = "none";
      break;
    case 3:
      sliders[0].style.display = "none";
      sliders[1].style.display = "none";
      sliders[2].style.display = "block";
      sliders[3].style.display = "none";
      break;
    case 4:
      sliders[0].style.display = "none";
      sliders[1].style.display = "none";
      sliders[2].style.display = "none";
      sliders[3].style.display = "block";
      break;
    default:
      sliders[0].style.display = "block";
      sliders[1].style.display = "none";
      sliders[2].style.display = "none";
      sliders[3].style.display = "none";
      break;
  }
}

function switchButton(counter) {
  switch (counter) {
    case 1:
      bullets[0].classList.add("active");
      bullets[1].classList.remove("active");
      bullets[2].classList.remove("active");
      bullets[3].classList.remove("active");
      break;
    case 2:
      bullets[0].classList.remove("active");
      bullets[1].classList.add("active");
      bullets[2].classList.remove("active");
      bullets[3].classList.remove("active");
      break;
    case 3:
      bullets[0].classList.remove("active");
      bullets[1].classList.remove("active");
      bullets[2].classList.add("active");
      bullets[3].classList.remove("active");
      break;
    case 4:
      bullets[0].classList.remove("active");
      bullets[1].classList.remove("active");
      bullets[2].classList.remove("active");
      bullets[3].classList.add("active");
      break;
  }
}

//When any button clicked, this fuction calls showSlider and switchButton according to button's innerHTML.
bullets.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.innerHTML) {
      case "1":
        showSlider(1);
        switchButton(1);
        counter = 1;
        break;
      case "2":
        showSlider(2);
        switchButton(2);
        counter = 2;
        break;
      case "3":
        showSlider(3);
        switchButton(3);
        counter = 3;
        break;
      case "4":
        showSlider(4);
        switchButton(4);
        counter = 4;
        break;
      default:
        showSlider(1);
        break;
    }
  });
});

showSlider(); //Calling showSlider function to start slider.

//Automatic slide.
setInterval(() => {
  if (counter < 4) {
    counter++;
  } else {
    counter = 1;
  }
  showSlider(counter); //Switching slides according to the counter value.
  switchButton(counter); //Switching bullets according to the counter value.
}, 5000);

//Scroll to Top Button
const rocket = document.querySelector(".rocket");
window.onscroll = function () {
  upFunction();
};

function upFunction() {
  if (window.pageYOffset < 60) {
    rocket.style.opacity = "0";
  } else {
    rocket.style.opacity = "1";
  }
}

/* ---- PORTFOLIO TAB FUNCTIONALITY ----- */
const allCards = document.querySelectorAll(".portfolio-card");
const appCards = document.querySelectorAll("[data-app]");
const webCards = document.querySelectorAll("[data-web]");
const cardCards = document.querySelectorAll("[data-card]");
const tabs = document.querySelectorAll(".tabs .tab");
let selectedTab = document.querySelector(".tab.selected");
let categorie = "ALL";

function displayAllCards(scale) {
  scale
    ? (scale = "fade-it-in 500ms forwards")
    : (scale = "fade-it-out 500ms forwards");
  allCards.forEach((card) => {
    card.style.animation = `${scale}`;
  });
}

function displayAppCards(scale) {
  scale
    ? (scale = "fade-it-in 500ms forwards")
    : (scale = "fade-it-out 500ms forwards");
  appCards.forEach((card) => {
    card.style.animation = `${scale}`;
  });
}

function displayWebCards(scale) {
  scale
    ? (scale = "fade-it-in 500ms forwards")
    : (scale = "fade-it-out 500ms forwards");
  webCards.forEach((card) => {
    card.style.animation = `${scale}`;
  });
}

function displayCardCards(scale) {
  scale
    ? (scale = "fade-it-in 500ms forwards")
    : (scale = "fade-it-out 500ms forwards");
  cardCards.forEach((card) => {
    card.style.animation = `${scale}`;
  });
}

function displayCategorie(categorie) {
  switch (categorie) {
    case "ALL":
      displayAllCards(true);
      break;
    case "APP":
      displayAppCards(true);
      displayCardCards(false);
      displayWebCards(false);
      break;
    case "WEB":
      displayAppCards(false);
      displayCardCards(false);
      displayWebCards(true);
      break;
    case "CARD":
      displayAppCards(false);
      displayCardCards(true);
      displayWebCards(false);
      break;
    default:
      displayAllCards();
      break;
  }
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    selectedTab.classList.toggle("selected");
    selectedTab = tab;
    tab.classList.toggle("selected");
    displayCategorie(tab.innerHTML);
  });
});

/* Intersection Observer Implementation to animate elements when got intersected with the viewport. */

const fadeLeftElements = document.querySelectorAll("[animation-fade-left]");
const fadeRightElements = document.querySelectorAll("[animation-fade-right]");
const fadeUpElements = document.querySelectorAll("[animation-fade-up]");
const fadeDownElements = document.querySelectorAll("[animation-fade-down]");
const zoomInElements = document.querySelectorAll("[animation-zoom-in]");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        fadeLeftElements.forEach((element) => {
          element.classList.add("fade-left");
        });
        fadeRightElements.forEach((element) => {
          element.classList.add("fade-right");
        });
        fadeUpElements.forEach((element) => {
          element.classList.add("fade-up");
        });
        fadeDownElements.forEach((element) => {
          element.classList.add("fade-down");
        });
        zoomInElements.forEach((element) => {
          element.classList.add("zoom-in");
        });
      }
    },
    { threshold: 0.5 }
  );
});

// Observing all the sections on homepage.
observer.observe(document.querySelector("header"));
observer.observe(document.querySelector(".hero"));
observer.observe(document.querySelector(".about"));
observer.observe(document.querySelector(".services"));
observer.observe(document.querySelector(".features"));
observer.observe(document.querySelector(".testimonials"));
observer.observe(document.querySelector(".portfolio"));
observer.observe(document.querySelector(".team"));
observer.observe(document.querySelector(".pricing"));
observer.observe(document.querySelector(".faq"));
observer.observe(document.querySelector(".contact"));
observer.observe(document.querySelector(".footer"));

/* Hamburger Menu */

const hamburger = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".mobile-menu");
const links = document.querySelectorAll(".mobile-menu > a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  menu.classList.toggle("menu-active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("menu-active");
    hamburger.classList.remove("open");
  });
});
