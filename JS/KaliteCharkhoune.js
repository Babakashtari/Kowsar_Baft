const radios = document.querySelectorAll("#radioContainer>label>input");
const containers = document.querySelectorAll(".parent");
const main = document.querySelector("main");
const sectionOne = document.querySelector("main>section:first-child");
let index = 0;
radios[index].checked = true;

// search button click event:
const searchInitializer = document.querySelector("#searchInitializer");
const searchForm = document.querySelector("header>nav>ul>li:first-child>form");
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
const hideBar = () => {
  // in order to have 3 onload/resize events:
  showProgress();
  // in order to reset the hamburger button on landscape/portrait change:
  hamburgerButton.classList.remove("far");
  hamburgerButton.classList.remove("fa-window-close");
  hamburgerButton.classList.add("fas");
  hamburgerButton.classList.add("fa-bars");
  const secondLogoLink = document.querySelector("header>div>ul>a");
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
const prevnext = n => {
  index += n;
  if (index > radios.length - 1) {
    index = 0;
  }
  if (index < 0) {
    index = radios.length - 1;
  }
  radios[index].checked = true;
  kalite();
};

const checker = event => {
  const radio_divs = document.querySelectorAll("#radioContainer>label>div");
  for (let i = 0; i < radio_divs.length; i++) {
    if (radio_divs[i] === event.target) {
      radios[i].checked = true;
      kalite();
    }
  }
};

const kalite = () => {
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
};
kalite();

const heightset = () => {
  sectionOne.style.height =
    containers[0].offsetHeight +
    document.getElementById("radioContainer").offsetHeight +
    "px";
};
setInterval(heightset, 1);

// array for color codes and their color RGB:
const Color_codes = [];
const gradients = [
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

const kaliteCells = document.querySelectorAll(".parent>div");
for (let b = 0; b < kaliteCells.length; b++) {
  Color_codes.push(b + 1);
  // kaliteCells[b].classList.add('col-sm-3', 'col-md-2', 'justify-content-center');
}

const CodePlaces = document.querySelectorAll(".parent>div>p>a");
Color_codes.forEach((value, index) => {
  CodePlaces[index].innerHTML = "کد: " + value + "</br>" + "افزودن به سبد خرید";
});
gradients.forEach((value, index) => {
  kaliteCells[index].style.backgroundImage = value;
});

//modal box:
// quantity calculation:
const measure = () => {
  const metters = document.getElementById("measurement");
  const taghe = document.getElementsByName("orderQuantityTaghe")[0].value;
  const adl = document.getElementsByName("OrderQuantityAdl")[0].value;
  switch (taghe * 40 + adl * 320) {
    case 0:
      metters.innerHTML = "... متر";
      break;
    default:
      metters.innerHTML = taghe * 40 + adl * 320 + " متر ";
      break;
  }
};

(() => {
  const modalOpaqueBox = document.querySelector("body>main>div:nth-of-type(2)");
  const modalBox = modalOpaqueBox.querySelector("div:nth-child(2)");
  const modalCloseBox = modalBox.querySelector("span");
  // modal closing:
  modalCloseBox.addEventListener("click", () => {
    modalOpaqueBox.classList.add("zeroOpacity");
    modalOpaqueBox.addEventListener("transitionend", () => {
      if (modalOpaqueBox.classList.contains("zeroOpacity")) {
        modalOpaqueBox.classList.add("displayNone");
      }
    });
  });
  // modal opening:
  for (let index = 0; index < kaliteCells.length; index++) {
    kaliteCells[index].addEventListener("click", event => {
      modalBox.style.backgroundImage =
        event.currentTarget.style.backgroundImage;
      document.getElementById(
        "colorCode"
      ).innerHTML = event.currentTarget
        .querySelector("div>p>a")
        .innerHTML.replace("افزودن به سبد خرید", "");
      modalOpaqueBox.classList.remove("displayNone");
      setTimeout(() => {
        modalOpaqueBox.classList.remove("zeroOpacity");
      }, 20);
    });
  }
})();

// progress bar:
const showProgress = () => {
  const progressDiv = document.querySelector("#progress>div");
  const paragraph = document.querySelector("#progress>p");
  let width = 0;
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");
  const progressBar = document.querySelector("#progress");

  const increment = () => {
    if (width === 100) {
      clearInterval(x);
      header.style.display = "block";
      main.style.display = "block";
      footer.style.display = "flex";
      progressBar.style.display = "none";
    } else {
      width++;
      progressDiv.style.width = width + "%";
      paragraph.innerHTML = width + "%";
    }
  };
  const x = setInterval(increment, 10);
};
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

const codes = [
  709.1,
  705,
  704.6,
  807.2,
  609,
  401.8,
  104,
  603,
  1008,
  1002.7,
  1008.2,
  1023,
  405,
  800.58,
  401.5,
  800.59,
  805,
  602.3,
  603.2,
  601.1,
  404.3,
  800.55,
  800.66,
  400.1,
  760,
  466,
  700.5,
  1030,
  436,
  703,
  830,
  700.11,
  345,
  840,
  120,
  101.6,
  380,
  809.1,
  360,
  206.22,
  355,
  205,
  100,
  205.77,
  102.3,
  436,
  801.7,
  900,
  704.2,
  193,
  801.62,
  103,
  1002.6,
  1002.1,
  1005,
  903.6,
  876,
  904.2,
  903,
  800.5,
  209.5,
  205.5,
  255,
  241,
  206,
  204,
  204.25,
  246,
  240,
  202.11,
  202,
  201.1,
  109,
  107.7,
  103.2,
  102.1,
  408,
  439,
  776,
  404.22,
  350,
  304,
  303,
  302
];
const colors = [
  // 709.1
  "0b0700",
  // 705
  "170d00",
  // 704.6
  "734319",
  // 807.2
  "4a2500",
  // 609
  "000e00",
  // 401.8
  "253307",
  // 104
  "0d1900",
  // 603
  "3a3207",
  // 1008
  "250a00",
  // 1002.7
  "26170d",
  // 1008.2
  "310000",
  // 1023
  "670d17",
  // 405
  "00260b",
  // 800.58
  "658000",
  // 401.5
  "525927",
  // 800.59
  "373f00",
  // 805
  "6f4800",
  // 602.3
  "876e3b",
  // 603.2
  "54461a",
  // 601.1
  "d2d971",
  // 404.3
  "008a4b",
  // 800.55
  "8fff00",
  // 800.66
  "24c900",
  // 400.1
  "2bff69",
  // 760
  "271502",
  // 466
  "dff589",
  // 700.5
  "8c8f4f",
  // 1030
  "260d0c",
  // 436
  "000a00",
  // 703
  "2f2305",
  // 830
  "b17700",
  // 700.11
  "FFFEAB",
  // 345
  "400e20",
  // 840
  "9c3e00",
  // 120
  "525c4a",
  // 101.6
  "8fa16f",
  // 380
  "020008",
  // 809.1
  "ff0f00",
  // 360
  "190019",
  // 206.22
  "011213",
  // 355
  "0f0300",
  // 205
  "041006",
  // 100
  "fff",
  // 205.77
  "000604",
  // 102.3
  "37321e",
  // 436
  "001000",
  // 801.7
  "ffff00",
  // 900
  "ffbf8a",
  // 704.2
  "382309",
  // 193
  "05fcac",
  // 801.62
  "e37400",
  // 103
  "193118",
  // 1002.6
  "360200",
  // 1002.1
  "6b2f33",
  // 1005
  "c40014",
  // 903.6
  "87240d",
  // 876
  "5e0900",
  // 904.2
  "830000",
  // 903
  "f7632a",
  // 800.5
  "ffff54",
  // 209.5
  "00000a",
  // 205.5
  "0b0b07",
  // 255
  "000803",
  // 241
  "24232c",
  // 206
  "00002e",
  // 204
  "133838",
  // 204.25
  "00234a",
  // 246
  "002424",
  // 240
  "006949",
  // 202.11
  "1a6182",
  // 202
  "2b91a6",
  // 201.1
  "808080",
  // 109
  "000",
  // 107.7
  "0a0a0a",
  // 103.2
  "181a1a",
  // 102.1
  "393d22",
  // 408
  "001202",
  // 439
  "001d0d",
  // 776
  "140900",
  // 404.22
  "004033",
  // 350
  "220000",
  // 304
  "4b2638",
  // 303
  "7a1c61",
  // 302
  "c45e6d"
];

// color picker for color comparison:
(() => {
  const teregal_select = document.querySelectorAll(
    "main>section:nth-of-type(2)>div>select[name='teregal']"
  );
  for (let n = 0; n < teregal_select.length; n++) {
    let option1 = `<option value="">کد رنگ ترگال مورد نظر خود را انتخاب کنید</option>`;
    for (let i = 0; i < colors.length; i++) {
      option1 += `<option value=${colors[i]} style="background-color:#${
        colors[i]
      }">کد رنگ:  ${codes[i]}</option>`;
    }
    teregal_select[n].innerHTML = option1;
  }

  const charkhoune_select = document.querySelectorAll(
    'main>section:nth-of-type(2)>div>select[name="Charkhoune"]'
  );
  for (let n = 0; n < charkhoune_select.length; n++) {
    let option2 = `<option value="">کد چهارخانه مورد نظر خود را انتخاب کنید</option>`;
    for (let i = 0; i < gradients.length; i++) {
      option2 += `<option value=${i} >کد چهارخونه:  ${i + 1}</option>`;
    }
    charkhoune_select[n].innerHTML = option2;
  }

  const background_select = document.querySelectorAll(
    "main>section:nth-of-type(2)>div>select[name='background']"
  );
  for (let n = 0; n < background_select.length; n++) {
    let option3 = `<option value="">کد پس زمینه مورد نظر خود را انتخاب کنید</option>`;
    for (let i = 0; i < colors.length; i++) {
      option3 += `<option value=${colors[i]} style="background-color:#${
        colors[i]
      }">کد رنگ:  ${codes[i]}</option>`;
    }
    background_select[n].innerHTML = option3;
  }
})();

const teregalpicker = event => {
  const teregal_select = document.querySelectorAll(
    "main>section:nth-of-type(2)>div>select[name='teregal']"
  );
  const T_shirt = document.querySelectorAll(
    "main>section:nth-of-type(2)>div>i"
  );
  for (let i = 0; i < teregal_select.length; i++) {
    if (event.target === teregal_select[i]) {
      T_shirt[i].style.color = "#" + event.target.value;
      T_shirt[i].classList.remove("gradient");
      T_shirt[i].classList.remove("background");
      T_shirt[i].style.backgroundImage = null;
    }
  }
};

const colorpicker = event => {
  const charkhouneh_select = document.querySelectorAll(
    'main>section:nth-of-type(2)>div>select[name="Charkhoune"]'
  );
  const T_shirt = document.querySelectorAll(
    "main>section:nth-of-type(2)>div>i"
  );
  for (let i = 0; i < charkhouneh_select.length; i++) {
    if (event.target === charkhouneh_select[i]) {
      T_shirt[i].style.backgroundImage = gradients[event.target.value];
      T_shirt[i].classList.add("gradient");
      T_shirt[i].classList.add("background");
    }
  }
};

const backgroundpicker = event => {
  const background_selector = document.querySelectorAll(
    "main>section:nth-of-type(2)>div"
  );
  const background_select = document.querySelectorAll(
    "main>section:nth-of-type(2)>div>select[name='background']"
  );
  const T_shirt = document.querySelectorAll(
    "main>section:nth-of-type(2)>div>i"
  );
  for (let i = 0; i < background_select.length; i++) {
    if (event.target === background_select[i]) {
      background_selector[i].style.backgroundColor = "#" + event.target.value;
      if (!T_shirt[i].classList.contains("gradient")) {
        T_shirt[i].classList.remove("background");
      }
    }
  }
};
