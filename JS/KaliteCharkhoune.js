var radios = document.querySelectorAll("#radioContainer>label>input");
var containers = document.querySelectorAll(".parent");
var main = document.querySelector("main");
var sectionOne = document.querySelector("main>section:first-child");
var index = 0;
radios[index].checked = true;
kalite();

// search button click event:
let searchInitializer = document.querySelector("#searchInitializer");
let searchForm = document.querySelector("header>nav>ul>li:first-child>form");
searchInitializer.addEventListener("click", () => {
  searchForm.classList.toggle("zeroOpacity");
  searchForm.classList.toggle("left");
  if (searchInitializer.classList.contains("fa-search")) {
    searchInitializer.classList.remove("fa", "fa-search");
    searchInitializer.classList.add("fas", "fa-times");
  } else {
    searchInitializer.classList.remove("fas", "fa-times");
    searchInitializer.classList.add("fa", "fa-search");
  }
});

// hamburger button on the green navbar for small screens:
const hamburgerButton = document.querySelector("header>nav>div>i");
const navBar = document.querySelector("header>nav>ul");
const hamburgerbuttonDiv = document.querySelector("header>nav>div");

// products navbar variables:
const products = document.querySelector("#products");
const productsButton = document.querySelector("#products>span");
const productsFirstSubmenu = document.querySelector("#products>ul");
const productsButtonFontAwsome = document.querySelector("#products>span>i");
const productsFirstSubmenuList = document.querySelectorAll(
  "header>nav>ul>li>ul>li"
);
const productsFirstSubmenuSpan = document.querySelectorAll(
  "header>nav>ul>li>ul>li>span"
);
const productsFirstSubmenuFontAwesome = document.querySelectorAll(
  "header>nav>ul>li>ul>li>span>i"
);
const productsSecondSubmenu = document.querySelectorAll(
  "header>nav>ul>li>ul>li>ul"
);
const productsSecondSubmenuList = document.querySelectorAll(
  "header>nav>ul>li>ul>li>ul>li"
);
const productsSecondSubmenuLink = document.querySelectorAll(
  "header>nav>ul>li>ul>li>ul>li>a"
);
// open main Products navbar click event:
productsButton.addEventListener("click", () => {
  productsFirstSubmenu.classList.toggle("displayNone");
  productsButton.classList.toggle("border-bottom");
  productsButtonFontAwsome.classList.toggle("rotate");
});
// products first navbar hover effect on main products button:
productsFirstSubmenu.addEventListener("mouseover", () => {
  productsButton.style.backgroundColor = "#8a72df";
});
productsFirstSubmenu.addEventListener("mouseout", () => {
  productsButton.style.backgroundColor = "";
});
//Products first submeu click events:
productsFirstSubmenu.addEventListener("click", event => {
  for (let index = 0; index < productsFirstSubmenuSpan.length; index++) {
    if (
      event.target != productsFirstSubmenuSpan[index] &&
      event.target.parentNode != productsFirstSubmenuSpan[index] &&
      event.target != productsSecondSubmenu[index]
    ) {
      productsFirstSubmenuList[index].classList.remove("border-bottom");
      productsFirstSubmenuFontAwesome[index].classList.remove("rotate");
      productsSecondSubmenu[index].classList.add("displayNone");
    } else if (
      event.target == productsFirstSubmenuSpan[index] ||
      event.target.parentNode == productsFirstSubmenuSpan[index]
    ) {
      productsFirstSubmenuList[index].classList.toggle("border-bottom");
      productsFirstSubmenuFontAwesome[index].classList.toggle("rotate");
      productsSecondSubmenu[index].classList.toggle("displayNone");
    }
  }
});

const ClassIterator = array => {
  for (let i = 0; i < array.length; i++) {
    array[i].classList.add("condition");
  }
};
ClassIterator(productsFirstSubmenuSpan);
ClassIterator(productsFirstSubmenuFontAwesome);
ClassIterator(productsSecondSubmenu);
ClassIterator(productsSecondSubmenuLink);
productsButton.classList.add("condition");
productsButtonFontAwsome.classList.add("condition");
productsFirstSubmenu.classList.add("condition");

// closing effect on click outside of the products menu:
window.addEventListener("click", event => {
  if (!event.target.classList.contains("condition")) {
    productsFirstSubmenu.classList.add("displayNone");
    productsButtonFontAwsome.classList.remove("rotate");
    productsButton.classList.remove("border-bottom");

    const arrayCreator = array => {
      const nouveau = [];
      for (let i = 0; i < array.length; i++) {
        nouveau[i] = array[i];
      }
      return nouveau;
    };
    arrayCreator(productsSecondSubmenu).forEach(item => {
      item.classList.add("displayNone");
    });
    arrayCreator(productsFirstSubmenuFontAwesome).forEach(item => {
      item.classList.remove("rotate");
    });
    arrayCreator(productsFirstSubmenuList).forEach(item => {
      item.classList.remove("border-bottom");
    });
  }
});

// dynamic margin-top for the white navbar according to the size of the first nav bar:
setInterval(() => {
  document.querySelector("header>div").style.marginTop =
    document.querySelector("header>nav").offsetHeight + "px";
}, 200);
let hideBar = () => {
  // in order to have 3 onload/resize events:
  showProgress();
  // in order to reset the hamburger button on landscape/portrait change:
  hamburgerButton.classList.remove("far");
  hamburgerButton.classList.remove("fa-window-close");
  hamburgerButton.classList.add("fas");
  hamburgerButton.classList.add("fa-bars");
  let secondLogoLink = document.querySelector("header>div>ul>a");
  if (window.screen.width <= 700) {
    navBar.classList.add("displayNone");
    navBar.classList.add("zeroOpacity");
    secondLogoLink.classList.add("displayNone");
    hamburgerbuttonDiv.classList.remove("displayNone");
  } else {
    navBar.classList.remove("displayNone");
    navBar.classList.remove("zeroOpacity");
    secondLogoLink.classList.remove("displayNone");
    hamburgerbuttonDiv.classList.add("displayNone");
  }
};
window.onresize = hideBar;

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("far");
  hamburgerButton.classList.toggle("fa-window-close");
  hamburgerButton.classList.toggle("fas");
  hamburgerButton.classList.toggle("fa-bars");
  // وقتی منو بسته است
  if (
    navBar.classList.contains("displayNone") &&
    navBar.classList.contains("zeroOpacity")
  ) {
    navBar.classList.remove("displayNone");
    setTimeout(() => {
      navBar.classList.remove("zeroOpacity");
    }, 20);
  } else {
    /* وقتی منو باز است */
    navBar.classList.add("zeroOpacity");
    navBar.addEventListener("transitionend", () => {
      if (navBar.classList.contains("zeroOpacity")) {
        navBar.classList.add("displayNone");
      }
    });
  }
});
function prevnext(n) {
  index += n;
  if (index > radios.length - 1) {
    index = 0;
  }
  if (index < 0) {
    index = radios.length - 1;
  }
  radios[index].checked = true;
  kalite();
}

function kalite() {
  for (let a = 0; a < radios.length; a++) {
    if (radios[a].checked) {
      index = a;
      containers[a].style.left = "0";
      containers[a].style.opacity = "1";
      containers[a].style.transition = "all ease-out 1s";
    } else {
      containers[a].style.left = "100%";
      containers[a].style.opacity = "0";
      containers[a].style.transition = "all 0s";
    }
  }
}

function heightset() {
  sectionOne.style.height =
    containers[0].offsetHeight +
    document.getElementById("radioContainer").offsetHeight +
    "px";
}
setInterval(heightset, 1000);

// array for color codes and their color RGB:
var codes = [];
var gradients = [
  /* 1 */
  "repeating-linear-gradient(to right, transparent 0, transparent 1rem, rgba(22, 166, 101, 0.5) 1rem, rgba(22, 166, 101, 0.5) 2rem),    repeating-linear-gradient(transparent 0, transparent 1rem, rgba(22, 166, 101, 0.5) 1rem, rgba(22, 166, 101, 0.5) 2rem)",
  /* 2 */
  "repeating-linear-gradient(to right, transparent 0, transparent 1rem, rgba(0, 87, 255, 0.6) 1rem, rgba(0, 87, 255, 0.6) 2rem),    repeating-linear-gradient(transparent 0, transparent 1rem, rgba(0, 87, 255, 0.6) 1rem, rgba(0, 87, 255, 0.6) 2rem)",
  /* 3 */
  "repeating-linear-gradient(to right, rgba(91, 0, 57, 0.6) 0, rgba(91, 0, 57, 0.6) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(91, 0, 57, 0.5) 0, rgba(91, 0, 57, 0.5) 1rem, transparent 1rem, transparent 2rem)",
  /* 4 */
  "repeating-linear-gradient(to right, rgba(209, 41, 0, 0.7) 0, rgba(209, 41, 0, 0.7) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(209, 41, 0, 0.5) 0, rgba(209, 41, 0, 0.5) 1rem, transparent 1rem, transparent 2rem)",
  /* 5 */
  "repeating-linear-gradient(to right, rgba(135, 61, 0, 0.6) 0, rgba(135, 61, 0, 0.6) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(135, 61, 0, 0.8) 0, rgba(135, 61, 0, 0.8) 1rem, transparent 1rem, transparent 2rem)",
  /* 6 */
  "repeating-linear-gradient(to right, rgba(66, 28, 0, 0.8) 0, rgba(66, 28, 0, 0.8) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(66, 28, 0, 0.6) 0, rgba(66, 28, 0, 0.6) 1rem, transparent 1rem, transparent 2rem), linear-gradient(rgba(197, 0, 0, 0.3), rgba(197, 0, 0, 0.3))",
  /* 7 */
  "repeating-linear-gradient(to right, rgba(172, 0, 0, 0.7) 0, rgba(172, 0, 0, 0.7) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(172, 0, 0, 0.5) 0, rgba(172, 0, 0, 0.5) 1rem, transparent 1rem, transparent 2rem), linear-gradient(rgba(255, 0, 0, 0.2), rgba(255, 0, 0, 0.2))",
  /* 8 */
  "repeating-linear-gradient(to right, rgba(250, 64, 56, 0.7) 0, rgba(250, 64, 56, 0.7) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(250, 64, 56, 0.7) 0, rgba(250, 64, 56, 0.7) 1rem, transparent 1rem, transparent 2rem)",
  /* 9 */
  "repeating-linear-gradient(to right, rgba(105, 40, 0, 0.5) 0, rgba(105, 40, 0, 0.5) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(105, 40, 0, 0.5) 0, rgba(105, 40, 0, 0.5) 1rem, transparent 1rem, transparent 2rem)",
  /* 10 */
  "repeating-linear-gradient(to right, rgba(255, 48, 0, 0.7) 0, rgba(255, 48, 0, 0.7) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(255, 48, 0, 0.7) 0, rgba(255, 48, 0, 0.7) 1rem, transparent 1rem, transparent 2rem)",
  /* 11 */
  "repeating-linear-gradient(to right, rgba(0, 87, 255, 0.6) 0, rgba(0, 87, 255, 0.6) 0.5rem, transparent 0.5rem, transparent 1rem),    repeating-linear-gradient(rgba(0, 87, 255, 0.5) 0, rgba(0, 87, 255, 0.5) 0.5rem, transparent 0.5rem, transparent 1rem)",
  /* 12 */
  "repeating-linear-gradient(to right, rgba(255, 175, 0, 0.7) 0, rgba(255, 175, 0, 0.7) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(255, 175, 0, 0.5) 0, rgba(255, 175, 0, 0.5) 1rem, transparent 1rem, transparent 2rem)",
  /* 13 */
  "repeating-linear-gradient(to right, rgba(255, 119, 0, 0.7) 0, rgba(255, 119, 0, 0.7) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(255, 119, 0, 0.5) 0, rgba(255, 119, 0, 0.5) 1rem, transparent 1rem, transparent 2rem)",
  /* 14 */
  "repeating-linear-gradient(to right, rgba(0, 94, 0, 0.6) 0, rgba(0, 94, 0, 0.6)  1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(0, 94, 0, 0.6) 0, rgba(0, 94, 0, 0.6) 1rem, transparent 1rem, transparent 2rem)",
  /* 15 */
  "repeating-linear-gradient(to right, rgba(52, 79, 0, 0.8) 0, rgba(52, 79, 0, 0.8) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(52, 79, 0, 0.8) 0, rgba(52, 79, 0, 0.8) 1rem, transparent 1rem, transparent 2rem)",
  /* 16 */
  "repeating-linear-gradient(to right, rgba(255, 28, 27, 0.6) 0, rgba(255, 28, 27, 0.6) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(255, 28, 27, 0.6) 0, rgba(255, 28, 27, 0.6) 1rem, transparent 1rem, transparent 2rem)",
  /* 17 */
  "repeating-linear-gradient(to right, rgba(0, 51, 86, 0.8) 0, rgba(0, 51, 86, 0.8) 0.5rem, transparent 0.5rem, transparent 1rem),    repeating-linear-gradient(rgba(0, 51, 86, 0.6) 0, rgba(0, 51, 86, 0.6) 0.5rem, transparent 0.5rem, transparent 1rem)",
  /* 18 */
  "repeating-linear-gradient(to right, rgba(136, 64, 3, 0.8) 0, rgba(136, 64, 3, 0.8) 0.5rem, transparent 0.5rem, transparent 1rem),    repeating-linear-gradient(rgba(136, 64, 3, 0.8) 0, rgba(136, 64, 3, 0.8) 0.5rem, transparent 0.5rem, transparent 1rem)",
  /* 19 */
  "repeating-linear-gradient(to right, rgba(0, 26, 18, 0.8) 0, rgba(0, 26, 18, 0.8) 0.5rem, transparent 0.5rem, transparent 1rem),    repeating-linear-gradient(rgba(0, 26, 18, 0.8) 0, rgba(0, 26, 18, 0.8) 0.5rem, transparent 0.5rem, transparent 1rem)",
  /* 20 */
  "repeating-linear-gradient(to right, rgba(143, 0, 0, 0.7) 0, rgba(143, 0, 0, 0.7) 0.5rem, transparent 0.5rem, transparent 1rem),    repeating-linear-gradient(rgba(143, 0, 0, 0.7) 0, rgba(143, 0, 0, 0.7) 0.5rem, transparent 0.5rem, transparent 1rem)",
  /* 21 */
  "repeating-linear-gradient(to right, transparent -1rem, transparent 1rem, rgba(0, 0, 35, 0.7) 1rem, rgba(0, 0, 35, 0.7) 3rem, transparent 3rem, transparent 5rem, rgba(127, 0, 0, 0.6) 5rem, rgba(127, 0, 0, 0.6) 7rem), repeating-linear-gradient(rgba(0, 0, 35, 0.7) 0, rgba(0, 0, 35, 0.7) 2rem, transparent 2rem, transparent 4rem, rgba(0, 75, 0, 0.7) 4rem, rgba(0, 75, 0, 0.7) 6rem, transparent 6rem, transparent 8rem), repeating-linear-gradient(rgba(255, 168, 0, 0.5), rgba(255, 168, 0, 0.5))",
  /* 22 */
  "repeating-linear-gradient(to right, transparent -3rem, transparent -1rem, rgba(0, 0, 35, 0.7) -1rem, rgba(0, 0, 35, 0.7) 1rem, transparent 1rem, transparent 3rem, rgba(127, 0, 0, 0.6) 3rem, rgba(127, 0, 0, 0.6) 5rem), repeating-linear-gradient(to top, transparent -3rem, transparent -1rem, rgba(0, 0, 35, 0.7) -1rem, rgba(0, 0, 35, 0.7) 1rem, transparent 1rem, transparent 3rem, rgba(127, 0, 0, 0.6) 3rem, rgba(127, 0, 0, 0.6) 5rem), repeating-linear-gradient(rgba(255, 168, 0, 0.5), rgba(255, 168, 0, 0.5))",
  /* 23 */
  "repeating-linear-gradient(to right, rgba(250, 64, 56, 0.7) 0, rgba(250, 64, 56, 0.7) 0.5rem, transparent 0.5rem, transparent 1rem),    repeating-linear-gradient(rgba(250, 64, 56, 0.7) 0, rgba(250, 64, 56, 0.7) 0.5rem, transparent 0.5rem, transparent 1rem)",
  /* 24 */
  "repeating-linear-gradient(to right, rgba(255, 175, 0, 0.7) 0, rgba(255, 175, 0, 0.7) 0.5rem, transparent 0.5rem, transparent 1rem),    repeating-linear-gradient(rgba(255, 175, 0, 0.7) 0, rgba(255, 175, 0, 0.7) 0.5rem, transparent 0.5rem, transparent 1rem)",
  /* 25 */
  "repeating-linear-gradient(to right, rgba(0, 51, 86, 0.8) 0, rgba(0, 51, 86, 0.8) 0.4rem, transparent .4rem, transparent 1rem, rgba(0, 51, 86, 0.8) 1rem, rgba(0, 51, 86, 0.8) 1.4rem)",
  /* 26 */
  "repeating-linear-gradient(to right, rgba(135, 61, 0, 0.8) 0, rgba(135, 61, 0, 0.8) 0.4rem, transparent .4rem, transparent 1rem, rgba(135, 61, 0, 0.8) 1rem,  rgba(135, 61, 0, 0.8) 1.4rem)",
  /* 27 */
  "repeating-linear-gradient(to right, rgba(66, 28, 0, 0.9) 0, rgba(66, 28, 0, 0.9) 0.4rem, transparent 0.4rem, transparent 1rem, rgba(66, 28, 0, 0.9) 1rem, rgba(66, 28, 0, 0.9) 1.4rem), linear-gradient(rgba(197, 0, 0, 0.2), rgba(197, 0, 0, 0.2))",
  /* 28 */
  "repeating-linear-gradient(to right, rgba(0, 26, 18, 0.8) 0, rgba(0, 26, 18, 0.8) 0.4rem, transparent 0.4rem, transparent 1rem, rgba(0, 26, 18, 0.8) 1rem, rgba(0, 26, 18, 0.8) 1.4rem)",
  /* 29 */
  "repeating-linear-gradient(to right, rgba(0, 87, 255, 0.6) 0, rgba(0, 87, 255, 0.6) 0.4rem, transparent 0.4rem, transparent 1rem, rgba(0, 87, 255, 0.6) 1rem, rgba(0, 87, 255, 0.6) 1.4rem)",
  /* 30 */
  "repeating-linear-gradient(to right, rgba(91, 0, 57, 0.7) 0, rgba(91, 0, 57, 0.7) 0.4rem, transparent 0.4rem, transparent 1rem, rgba(91, 0, 57, 0.7) 1rem, rgba(91, 0, 57, 0.7) 1.4rem)",
  /* 31 */
  "repeating-linear-gradient(to right, rgba(255, 0, 26, 0.7) 0, rgba(255, 0, 26, 0.7) 0.4rem, transparent 0.4rem, transparent 1rem, rgba(255, 0, 26, 0.7) 1rem, rgba(255, 0, 26, 0.7) 1.4rem)",
  /* 32 */
  "repeating-linear-gradient(to right, rgba(255, 0, 0, 0.9) 0, rgba(255, 0, 0, 0.9) 0.4rem, transparent 0.4rem, transparent 1rem, rgba(255, 0, 0, 0.9) 1rem, rgba(255, 0, 0, 0.9) 1.4rem), linear-gradient(rgba(197, 0, 0, 0.2), rgba(197, 0, 0, 0.2))",
  /* 33 */
  "repeating-linear-gradient(to right, rgba(255, 175, 0, 0.9) 0, rgba(255, 175, 0, 0.9) 0.2rem, transparent 0.2rem, transparent 0.5rem, rgba(255, 175, 0, 0.9) 0.5rem, rgba(255, 175, 0, 0.9) 0.7rem)",
  /* 34 */
  " repeating-linear-gradient(to right, rgba(0, 175, 0, 0.9) 0, rgba(0, 175, 0, 0.9) 0.4rem, transparent 0.4rem, transparent 1rem, rgba(0, 175, 0, 0.9) 1rem, rgba(0, 175, 0, 0.9) 1.4rem)",
  /* 35 */
  "repeating-linear-gradient(to right, rgba(255, 255, 0, 0.9) 0,rgba(255, 255, 0, 0.9) 0.4rem, transparent 0.4rem, transparent 1rem, rgba(255, 255, 0, 0.9) 1rem, rgba(255, 255, 0, 0.9) 1.4rem)",
  /* 36 */
  "repeating-linear-gradient(to right, rgba(255, 87, 0, 1) 0, rgba(255, 87, 0, 1) 0.4rem, transparent 0.4rem, transparent 1rem, rgba(255, 87, 0, 1) 1rem, rgba(255, 87, 0, 1) 1.4rem)",
  /* 37 */
  "repeating-linear-gradient(to right, rgba(255, 0, 0, 0.8) 0, rgba(255, 0, 0, 0.8) 0.2rem, transparent 0.2rem, transparent 0.5rem, rgba(255, 0, 0, 0.8) 0.5rem, rgba(255, 0, 0, 0.8) 0.7rem)",
  /* 38 */
  "repeating-linear-gradient(to right, rgba(91, 0, 57, 0.9) 0, rgba(91, 0, 57, 0.9) 0.2rem, transparent 0.2rem, transparent 0.5rem, rgba(91, 0, 57, 0.9) 0.5rem, rgba(91, 0, 57, 0.9) 0.7rem)",
  /* 39 */
  "repeating-linear-gradient(to right, rgba(0, 0, 158, 0.7) 0, rgba(0, 0, 158, 0.7) 0.2rem, transparent 0.2rem, transparent 0.5rem, rgba(0, 0, 158, 0.7) 0.5rem, rgba(0, 0, 158, 0.7) 0.7rem)",
  /* 40 */
  "repeating-linear-gradient(to right,  rgba(48, 54, 27, 0.9) 0, rgba(48, 54, 27, 0.9) 0.2rem, transparent 0.2rem, transparent 0.5rem,  rgba(48, 54, 27, 0.9) 0.5rem,  rgba(48, 54, 27, 0.9) 0.7rem)",
  /* 41 */
  "repeating-linear-gradient(to right, transparent -4rem, transparent 2rem, rgba(91, 0, 57, 0.7) 2rem, rgba(91, 0, 57, 0.7) 8rem), repeating-linear-gradient(transparent 0, transparent 5.5rem, rgba(91, 0, 57, 0.7) 5.5rem, rgba(91, 0, 57, 0.7) 11rem)",
  /* 42 */
  "repeating-linear-gradient(to right, transparent -9rem, transparent -3rem, rgba(0, 18, 255, 0.5) -3rem, rgba(0, 18, 255, 0.5) 3rem), repeating-linear-gradient(transparent 0, transparent 5.5rem, rgba(0, 18, 255, 0.8) 5.5rem, rgba(0, 18, 255, 0.8) 11rem)",
  /* 43 */
  "repeating-linear-gradient(to right, transparent -5rem, transparent 1rem, rgba(0, 0, 61, 0.8) 1rem, rgba(0, 0, 61, 0.8) 7rem), repeating-linear-gradient(transparent -7rem, transparent -1.5rem, rgba(0, 0, 61, 0.6) -1.5rem, rgba(0, 0, 61, 0.6) 4rem)",
  /* 44 */
  "repeating-linear-gradient(to right, transparent -5rem, transparent 1rem, rgba(0, 0, 0, 0.8) 1rem, rgba(0, 0, 0, 0.8) 7rem), repeating-linear-gradient(transparent -15rem, transparent -7rem, rgba(0, 0, 0, 0.7) -7rem, rgba(0, 0, 0, 0.7) 1rem)",
  /* 45 */
  "repeating-linear-gradient(to right, rgba(250, 64, 56, 0.7) -5rem, rgba(250, 64, 56, 0.7) 1rem, transparent 1rem, transparent 7rem), repeating-linear-gradient(transparent -3.5rem, transparent 2.5rem, rgba(250, 64, 56, 0.6) 2.5rem, rgba(250, 64, 56, 0.6) 8.5rem)",
  /* 46 */
  "repeating-linear-gradient(to right, transparent -1rem, transparent 5rem, rgba(176, 0, 2, 0.8) 5rem, rgba(176, 0, 2, 0.8) 11rem), repeating-linear-gradient(transparent -3.5rem, transparent 2.5rem, rgba(176, 0, 2, 0.9) 2.5rem, rgba(176, 0, 2, 0.9) 8.5rem)",
  /* 47 */
  "repeating-linear-gradient(to right, transparent 0, transparent 6rem, rgba(255, 59, 0, 0.6) 6rem, rgba(255, 59, 0, 0.6) 12rem), repeating-linear-gradient(transparent -8rem, transparent -1rem, rgba(255, 59, 0, 0.8) -1rem, rgba(255, 59, 0, 0.8) 6rem)",
  /* 48 */
  "repeating-linear-gradient(to right, transparent -4rem, transparent 2rem, rgba(255, 143, 0, 0.8) 2rem, rgba(255, 143, 0, 0.8) 8rem), repeating-linear-gradient(transparent -1rem, transparent 5rem, rgba(255, 143, 0, 0.8) 5rem, rgba(255, 143, 0, 0.8) 11rem)",
  /* 49 */
  "repeating-linear-gradient(to right, transparent -1rem, transparent 2rem, rgba(0, 75, 0, 0.9) 2rem, rgba(0, 75, 0, 0.9) 5rem), repeating-linear-gradient(transparent 0.25rem, transparent 3.25rem, rgba(0, 75, 0, 0.7) 3.25rem, rgba(0, 75, 0, 0.7) 6.25rem)",
  /* 50 */
  "repeating-linear-gradient(to right, transparent -1rem, transparent 2rem, rgba(96, 47, 0, 0.8) 2rem, rgba(96, 47, 0, 0.8) 5rem), repeating-linear-gradient(transparent 0.25rem, transparent 3.25rem, rgba(96, 47, 0, 0.7) 3.25rem, rgba(96, 47, 0, 0.7) 6.25rem)",
  /* 51 */
  "repeating-linear-gradient(to right, transparent -1rem, transparent 2rem, rgba(99, 0, 0, 0.8) 2rem, rgba(99, 0, 0, 0.8) 5rem), repeating-linear-gradient(transparent 0.25rem, transparent 3.25rem, rgba(99, 0, 0, 0.7) 3.25rem, rgba(99, 0, 0, 0.7) 6.25rem), linear-gradient(rgba(197, 0, 0, 0.3), rgba(197, 0, 0, 0.3))",
  /* 52 */
  " repeating-linear-gradient(to right, transparent -1rem, transparent 2rem, rgba(0, 0, 0, 0.8) 2rem, rgba(0, 0, 0, 0.8) 5rem), repeating-linear-gradient(transparent 0.25rem, transparent 3.25rem, rgba(0, 0, 0, 0.7) 3.25rem, rgba(0, 0, 0, 0.7) 6.25rem)",
  /* 53 */
  "repeating-linear-gradient(to left, transparent -1rem, transparent 2rem, rgba(250, 37, 55, 0.7) 2rem, rgba(250, 37, 55, 0.7) 5rem), repeating-linear-gradient(rgba(250, 37, 55, 0.7) 0, rgba(250, 37, 55, 0.7) 3rem, transparent 3rem, transparent 6rem)",
  /* 54 */
  "repeating-linear-gradient(to right, transparent -1rem, transparent 2rem, rgba(91, 0, 57, 0.7) 2rem, rgba(91, 0, 57, 0.7) 5rem), repeating-linear-gradient(to top, rgba(91, 0, 57, 0.7) 0, rgba(91, 0, 57, 0.7) 3rem, transparent 3rem, transparent 6rem)",
  /* 55 */
  "repeating-linear-gradient(to right, transparent -5.75rem, transparent -2.75rem, rgba(0, 87, 255, 0.6) -2.75rem, rgba(0, 87, 255, 0.6) 0.25rem), repeating-linear-gradient(to top, rgba(0, 87, 255, 0.6) -1.5rem, rgba(0, 87, 255, 0.6) 1.5rem, transparent 1.5rem, transparent 4.5rem)",
  /* 56 */
  "repeating-linear-gradient(to right, transparent -5.75rem, transparent -2.75rem, rgba(0, 0, 61, 0.8) -2.75rem, rgba(0, 0, 61, 0.8) 0.25rem), repeating-linear-gradient(to top, rgba(0, 0, 61, 0.8) -1.5rem, rgba(0, 0, 61, 0.8) 1.5rem, transparent 1.5rem, transparent 4.5rem)",
  /* 57 */
  "repeating-linear-gradient(to right, transparent -5.75rem, transparent -2.75rem, rgba(255, 143, 0, 0.8) -2.75rem, rgba(255, 143, 0, 0.8) 0.25rem), repeating-linear-gradient(to top, rgba(255, 143, 0, 0.8) -1.5rem, rgba(255, 143, 0, 0.8) 1.5rem, transparent 1.5rem, transparent 4.5rem)",
  /* 58 */
  "repeating-linear-gradient(to right, transparent -5.75rem, transparent -2.75rem, rgba(255, 41, 0, 0.8) -2.75rem, rgba(255, 41, 0, 0.8) 0.25rem), repeating-linear-gradient(to top, rgba(255, 41, 0, 0.8) -1.5rem, rgba(255, 41, 0, 0.8) 1.5rem, transparent 1.5rem, transparent 4.5rem)",
  /* 59 */
  "repeating-linear-gradient(to right, transparent -2rem, transparent 1rem, rgba(176, 0, 2, 0.8) 1rem, rgba(176, 0, 2, 0.8) 4rem), repeating-linear-gradient(to top, transparent -1rem, transparent 2rem,  rgba(176, 0, 2, 0.8) 2rem, rgba(176, 0, 2, 0.8) 5rem)",
  /* 60 */
  "repeating-linear-gradient(to right, transparent -1rem, transparent 2rem, rgba(209, 41, 0, 0.7) 2rem, rgba(209, 41, 0, 0.7) 5rem), repeating-linear-gradient(to bottom, transparent 0rem, transparent 3rem,  rgba(209, 41, 0, 0.7) 3rem, rgba(209, 41, 0, 0.7) 6rem)",
  /* 61 */
  "repeating-linear-gradient(to right, transparent 1rem, transparent 2rem, rgba(0, 0, 16, 0.9) 2rem, rgba(0, 0, 16, 0.9) 3rem), repeating-linear-gradient(to bottom, transparent 0rem, transparent 1rem,  rgba(0, 0, 16, 0.9) 1rem, rgba(0, 0, 16, 0.9) 2rem)",
  /* 62 */
  "repeating-linear-gradient(to right, transparent 1rem, transparent 2rem, rgba(0, 0, 27, 0.7) 2rem, rgba(0, 0, 27, 0.7) 3rem), repeating-linear-gradient(to bottom, transparent 0rem, transparent 1rem,  rgba(0, 0, 27, 0.7) 1rem, rgba(0, 0, 27, 0.7) 2rem)",
  /* 63 */
  "repeating-linear-gradient(to right, transparent 1rem, transparent 2rem, rgba(48, 54, 27, 0.8) 2rem, rgba(48, 54, 27, 0.8) 3rem), repeating-linear-gradient(to bottom, transparent 0rem, transparent 1rem, rgba(48, 54, 27, 0.7) 1rem, rgba(48, 54, 27, 0.7) 2rem)",
  /* 64 */
  "repeating-linear-gradient(to right, transparent 1rem, transparent 2rem, rgba(20, 20, 0, 0.9) 2rem, rgba(20, 20, 0, 0.9) 3rem), repeating-linear-gradient(to bottom, transparent 0rem, transparent 1rem, rgba(20, 20, 0, 0.9) 1rem, rgba(20, 20, 0, 0.9) 2rem)",
  /* 65 */
  "repeating-linear-gradient(transparent 0rem, transparent 1rem, rgba(255, 255, 0, 0.3) 1rem, rgba(255, 255, 0, 0.3) 1.1rem, transparent 1.1rem, transparent 3rem), repeating-linear-gradient(transparent 0, transparent 2rem, rgba(255, 255, 0, 0.3) 2rem, rgba(255, 255, 0, 0.3) 3rem), repeating-linear-gradient(to right, transparent 0, transparent 2rem, rgba(255, 255, 0, 0.3) 2rem, rgba(255, 255, 0, 0.3) 3rem), repeating-linear-gradient(to right, transparent 0, transparent 1rem, rgba(255, 255, 0, 0.3) 1rem, rgba(255, 255, 0, 0.3) 1.1rem, transparent 1.1rem, transparent 3rem), repeating-linear-gradient(rgba(19, 0, 0, 1), rgba(19, 0, 0, 1))",
  /* 66 */
  "repeating-linear-gradient(transparent 0, transparent 0.75rem, rgba(255,255,255, 0.5) 0.75rem, rgba(255,255,255, 0.5) 0.85rem), repeating-linear-gradient(to right, transparent 0, transparent 0.75rem, rgba(255,255,255, 0.5) 0.75rem, rgba(255,255,255, 0.5) 0.85rem), repeating-linear-gradient(rgb(0, 0, 0),rgb(0, 0, 0))",
  /* 67 */
  "repeating-linear-gradient(to top, transparent 0, transparent 3rem, rgba(0, 26, 18, 0.8) 3rem, rgba(0, 26, 18, 0.8) 4rem, transparent 4rem, transparent 5rem, rgba(0, 26, 18, 0.8) 5rem, rgba(0, 26, 18, 0.8) 6rem, transparent 6rem, transparent 7rem, rgba(0, 26, 18, 0.8) 7rem, rgba(0, 26, 18, 0.8) 8rem, transparent 8rem, transparent 10rem), repeating-linear-gradient(to top, rgba(127, 0, 0, 0.6) 0, rgba(127, 0, 0, 0.6) 1rem, transparent 1rem, transparent 10rem), repeating-linear-gradient(to right, transparent 0, transparent 3rem, rgba(0, 26, 18, 0.8) 3rem, rgba(0, 26, 18, 0.8) 4rem, rgba(255, 255, 255, 0.5) 4rem, rgba(255, 255, 255, 0.5) 5rem, rgba(0, 26, 18, 0.8) 5rem, rgba(0, 26, 18, 0.8) 6rem, rgba(255, 255, 255, 0.5) 6rem, rgba(255, 255, 255, 0.5) 7rem, rgba(0, 26, 18, 0.8) 7rem, rgba(0, 26, 18, 0.8) 8rem, transparent 8rem, transparent 10rem), repeating-linear-gradient(to right, rgba(127, 0, 0, 0.6) 0, rgba(127, 0, 0, 0.6) 1rem, transparent 1rem, transparent 10rem), repeating-linear-gradient(rgba(255, 168, 0, 0.8), rgba(255, 168, 0, 0.8))",
  /* 68 */
  "repeating-linear-gradient(to right, transparent 0rem, transparent 1rem, rgba(48, 9, 0, 0.8) 1rem, rgba(48, 9, 0, 0.8) 2rem), repeating-linear-gradient(transparent 0rem, transparent 1rem, rgba(48, 9, 0, 0.7) 1rem, rgba(48, 9, 0, 0.7) 2rem)",
  /* 69 */
  "repeating-linear-gradient(to right, transparent 0rem, transparent 1rem, rgba(0, 26, 18, 0.8) 1rem, rgba(0, 26, 18, 0.8) 2rem), repeating-linear-gradient(rgba(255, 28, 27, 0.8) 0, rgba(255, 28, 27, 0.8) 1rem, transparent 1rem, transparent 2rem, rgba(0, 26, 18, 0.8) 2rem, rgba(0, 26, 18, 0.8) 3rem, transparent 3rem, transparent 4rem)",
  /* 70 */
  "repeating-linear-gradient(to right, transparent 0rem, transparent 1rem, rgba(0, 26, 18, 0.9) 1rem, rgba(0, 26, 18, 0.9) 2rem), repeating-linear-gradient(rgba(0, 26, 18, 0.7) 0, rgba(0, 26, 18, 0.7) 1rem, transparent 1rem, transparent 2rem, rgba(0, 26, 18, 0.7) 2rem, rgba(0, 26, 18, 0.7) 3rem, transparent 3rem, transparent 4rem)",
  /* 71 */
  " repeating-linear-gradient(to right, rgba(0, 0, 0, 0.9) -1rem, rgba(0, 0, 0, 0.9) 1rem, transparent 1rem, transparent 3rem),    repeating-linear-gradient(rgba(0, 0, 0, 0.9) 0, rgba(0, 0, 0, 0.9) 1.5rem, transparent 1.5rem, transparent 3rem), repeating-linear-gradient(rgb(122, 0, 0), rgb(122, 0, 0))",
  /* 72 */
  "repeating-linear-gradient(to right, rgba(96, 47, 0, 0.9) 0, rgba(96, 47, 0, 0.9) 1rem, transparent 1rem, transparent 2rem, rgba(0, 26, 18, 0.7) 2rem, rgba(0, 26, 18, 0.7) 3rem, transparent 3rem, transparent 4rem), repeating-linear-gradient(rgba(0, 26, 18, 0.7) 0, rgba(0, 26, 18, 0.7) 1rem, transparent 1rem, transparent 2rem, rgba(0, 26, 18, 0.7) 2rem, rgba(0, 26, 18, 0.7) 3rem, transparent 3rem, transparent 4rem), repeating-linear-gradient(rgba(255, 168, 0, 0.8), rgba(255, 168, 0, 0.8))",
  /* 73 */
  "repeating-linear-gradient(to right, rgba(0, 26, 18, 0.8) 0, rgba(0, 26, 18, 0.8) 0.5rem, transparent 0.5rem, transparent 1rem, rgba(255, 28, 27, 0.8) 1rem, rgba(255, 28, 27, 0.8) 1.5rem, transparent 1.5rem, transparent 2rem), repeating-linear-gradient(rgba(0, 26, 18, 0.8) 0, rgba(0, 26, 18, 0.8) 0.5rem, transparent 0.5rem, transparent 1rem, rgba(255, 28, 27, 0.8) 1rem, rgba(255, 28, 27, 0.8) 1.5rem, transparent 1.5rem, transparent 2rem)",
  /* 74 */
  "repeating-linear-gradient(to right, rgba(0, 26, 18, 0.6) 0, rgba(0, 26, 18, 0.6) 1rem, transparent 1rem, transparent 2rem, rgba(0, 26, 18, 0.6) 2rem, rgba(0, 26, 18, 0.6) 3rem, transparent 3rem, transparent 4rem), repeating-linear-gradient(rgba(0, 26, 18, 0.6) 0.5rem, rgba(0, 26, 18, 0.6) 1.5rem, transparent 1.5rem, transparent 2.5rem, rgba(0, 26, 18, 0.6) 2.5rem, rgba(0, 26, 18, 0.6) 3.5rem, transparent 3.5rem, transparent 4.5rem), repeating-linear-gradient(transparent 0.5rem, transparent 2rem, rgba(96, 47, 0, 0.9) 2rem, rgba(96, 47, 0, 1)2.1rem, transparent 2.1rem, transparent 4.5rem), repeating-linear-gradient(to right, transparent 0, transparent 1.5rem, rgba(96, 47, 0, 1) 1.5rem, rgba(96, 47, 0, 1)1.6rem, transparent 1.6rem, transparent 4rem), repeating-linear-gradient(rgba(255, 168, 0, 0.8), rgba(255, 168, 0, 0.8))",
  /* 75 */
  "repeating-linear-gradient(to right, transparent -1rem, transparent 2rem, rgba(0, 0, 28, 0.7) 2rem, rgba(0, 0, 28, 0.7) 5rem), repeating-linear-gradient(transparent 0.25rem, transparent 3.25rem, rgba(0, 0, 28, 0.7) 3.25rem, rgba(0, 0, 28, 0.7) 6.25rem)",
  /* 76*/
  "repeating-linear-gradient(to right, transparent -1rem, transparent 2rem, rgba(96, 47, 0, 0.9) 2rem, rgba(96, 47, 0, 0.9) 5rem), repeating-linear-gradient(transparent 0.25rem, transparent 3.25rem, rgba(96, 47, 0, 0.9) 3.25rem, rgba(96, 47, 0, 0.9) 6.25rem)",
  /* 77 */
  "repeating-linear-gradient(to right, transparent 0rem, transparent 1rem, rgba(0, 137, 94, 0.8) 1rem, rgba(0, 137, 94, 0.8) 2rem), repeating-linear-gradient(rgba(0, 137, 94, 0.8) 0, rgba(0, 137, 94, 0.8) 1rem, transparent 1rem, transparent 2rem, rgba(0, 137, 94, 0.8) 2rem, rgba(0, 137, 94, 0.8) 3rem, transparent 3rem, transparent 4rem)",
  /* 78 */
  "repeating-linear-gradient(to right, transparent 0rem, transparent 1rem, rgba(0, 64, 42, 0.9) 1rem, rgba(0, 64, 42, 0.9) 2rem), repeating-linear-gradient(rgba(0, 64, 42, 0.7) 0, rgba(0, 64, 42, 0.7) 1rem, transparent 1rem, transparent 2rem, rgba(0, 64, 42, 0.7) 2rem, rgba(0, 64, 42, 0.7) 3rem, transparent 3rem, transparent 4rem) ",
  /* 79 */
  "repeating-linear-gradient(to right, transparent 0rem, transparent 1rem, rgba(0, 64, 42, 0.9) 1rem, rgba(0, 64, 42, 0.9) 2rem), repeating-linear-gradient(rgba(0, 64, 42, 0.7) 0, rgba(0, 64, 42, 0.7) 1rem, transparent 1rem, transparent 2rem, rgba(0, 64, 42, 0.7) 2rem, rgba(0, 64, 42, 0.7) 3rem, transparent 3rem, transparent 4rem), repeating-linear-gradient(rgba(120, 255, 255, 0.5), rgba(120, 255, 255, 0.5))",
  /* 80 */
  " repeating-linear-gradient(to right, transparent -4rem, transparent 2rem, rgba(0, 0, 13, 0.8) 2rem, rgba(0, 0, 13, 0.8) 8rem), repeating-linear-gradient(to top, transparent -1rem, transparent 5rem, rgba(0, 0, 13, 0.8) 5rem, rgba(0, 0, 13, 0.8) 11rem)",
  /* 81 */
  "repeating-linear-gradient(to right, transparent 0, transparent 1rem, rgba(0, 94, 0, 0.6) 1rem, rgba(0, 94, 0, 0.6) 2rem),    repeating-linear-gradient(transparent 0, transparent 1rem, rgba(0, 94, 0, 0.6) 1rem, rgba(0, 94, 0, 0.6) 2rem)",
  /* 82 */
  "repeating-linear-gradient(to right, transparent 0, transparent 1rem, rgba(112, 179, 255, 0.5) 1rem, rgba(112, 179, 255, 0.5) 2rem),    repeating-linear-gradient(transparent 0, transparent 1rem, rgba(112, 179, 255, 0.5) 1rem, rgba(112, 179, 255, 0.5) 2rem)",
  /* 83 */
  "repeating-linear-gradient(to right, transparent 0, transparent .5rem, rgba(136, 64, 3, 0.8) .5rem, rgba(136, 64, 3, 0.8) 1rem)",
  /* 84 */
  "repeating-linear-gradient(to right, transparent 0, transparent 1rem, rgba(52, 79, 0, 0.8) 1rem, rgba(52, 79, 0, 0.8) 2rem)",
  /* 85 */
  "repeating-linear-gradient(to right, transparent 0, transparent 1rem, rgba(45, 145, 114, 0.9) 1rem, rgba(45, 145, 114, 0.9) 2rem)",
  /* 86 */
  "repeating-linear-gradient(to right, transparent 0, transparent 1rem, rgba(120, 158, 0, 0.8) 1rem, rgba(120, 158, 0, 0.8) 2rem)",
  /* 87 */
  "repeating-linear-gradient(to right, transparent 0, transparent 1rem, rgba(0, 34, 34, 0.9) 1rem, rgba(0, 34, 34, 0.9) 2rem)",
  /* 88 */
  "repeating-linear-gradient(to right, transparent 0, transparent .5rem, rgba(122, 0, 0, 0.8) .5rem, rgba(122, 0, 0, 0.8) 1rem), repeating-linear-gradient(rgb(250, 215, 255), rgb(250, 215, 255))"
];

var kaliteCells = document.querySelectorAll(".parent>div");
for (var b = 0; b < kaliteCells.length; b++) {
  codes.push(b + 1);
  // kaliteCells[b].classList.add('col-sm-3', 'col-md-2', 'justify-content-center');
}

var CodePlaces = document.querySelectorAll(".parent>div>p>a");
codes.forEach(function(value, index) {
  CodePlaces[index].innerHTML = "کد: " + value + "</br>" + "افزودن به سبد خرید";
});
gradients.forEach(function(value, index) {
  kaliteCells[index].style.backgroundImage = value;
});

//modal box:
// quantity calculation:
function measure() {
  var metters = document.getElementById("measurement");
  var taghe = document.getElementsByName("orderQuantityTaghe")[0].value;
  var adl = document.getElementsByName("OrderQuantityAdl")[0].value;
  switch (taghe * 40 + adl * 320) {
    case 0:
      metters.innerHTML = "... متر";
      break;
    default:
      metters.innerHTML = taghe * 40 + adl * 320 + " متر ";
      break;
  }
}

(function() {
  var modalOpaqueBox = document.querySelector("body>main>div:nth-of-type(2)");
  var modalBox = modalOpaqueBox.querySelector("div:nth-child(2)");
  var borderBox = modalOpaqueBox.querySelector("div:first-child");
  var modalCloseBox = modalBox.querySelector("span");
  // modal closing:
  modalCloseBox.addEventListener("click", function() {
    modalOpaqueBox.classList.add("zeroOpacity");
    modalOpaqueBox.addEventListener("transitionend", function() {
      if (modalOpaqueBox.classList.contains("zeroOpacity")) {
        modalOpaqueBox.classList.add("displayNone");
      }
    });
  });
  // modal opening:
  for (let index = 0; index < kaliteCells.length; index++) {
    kaliteCells[index].addEventListener("click", function(event) {
      modalBox.style.backgroundImage =
        event.currentTarget.style.backgroundImage;
      document.getElementById(
        "colorCode"
      ).innerHTML = event.currentTarget
        .querySelector("div>p>a")
        .innerHTML.replace("افزودن به سبد خرید", "");
      modalOpaqueBox.classList.remove("displayNone");
      setTimeout(function() {
        modalOpaqueBox.classList.remove("zeroOpacity");
      }, 20);
    });
  }
})();

// progress bar:
function showProgress() {
  let progressDiv = document.querySelector("#progress>div");
  let paragraph = document.querySelector("#progress>p");
  let width = 0;
  let header = document.querySelector("header");
  let main = document.querySelector("main");
  let footer = document.querySelector("footer");
  let progressBar = document.querySelector("#progress");

  function increment() {
    if (width === 100) {
      clearInterval(x);
      header.style.display = "block";
      main.style.display = "block";
      footer.style.display = "flex";
      progressBar.style.display = "none";
    } else {
      width++;
      progressDiv.style.width = width + "%";
      paragraph.innerHTML = width + " %";
    }
  }
  let x = setInterval(increment, 20);
}
// scroll effect on top logo:
window.addEventListener("scroll", () => {
  if (scrollY > 80 && window.screen.width > 700) {
    hamburgerbuttonDiv.classList.remove("displayNone");
    hamburgerButton.classList.add("displayNone");
  } else if (scrollY < 80 && window.screen.width > 700) {
    hamburgerbuttonDiv.classList.add("displayNone");
    hamburgerButton.classList.remove("displayNone");
  } else if (window.screen.width < 700) {
    hamburgerbuttonDiv.classList.remove("displayNone");
    hamburgerButton.classList.remove("displayNone");
  }
});
