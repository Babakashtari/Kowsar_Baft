var radios = document.querySelectorAll("#radio-container>label>input");
var containers = document.querySelectorAll(".container");
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

// hamburger button on the green navbar for small screens:
const hamburgerButton = document.querySelector("header>nav>div>i");
const navBar = document.querySelector("header>nav>ul");
const hamburgerbuttonDiv = document.querySelector("header>nav>div");

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
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      index = i;
      containers[i].style.left = "0";
      containers[i].style.transition = "1s";
    } else {
      containers[i].style.left = "100%";
    }
  }
}

function heightset() {
  sectionOne.style.height =
    containers[0].offsetHeight +
    document.getElementById("radio-container").offsetHeight +
    "px";
}
setInterval(heightset, 1000);

// array for color codes and their color RGB:
var codes = ["پرشیا 1008", "پرشیا 103", "پرشیا 1030", "پرشیا 205.77"];
var images = [
  "../images/Persia1008.jpg",
  "../images/Persia103.jpg",
  "../images/Persia1030.jpg",
  "../images/Persia205.77.jpg"
];
var kaliteCells = document.querySelectorAll(".container>div");
var CodePlaces = document.querySelectorAll(".container>div>p>a");
codes.forEach(function(value, index) {
  CodePlaces[index].innerHTML = "کد: " + value + "</br>" + "افزودن به سبد خرید";
});
images.forEach(function(value, index) {
  var img = document.createElement("img");
  img.setAttribute("src", value);
  kaliteCells[index].appendChild(img);
});

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
      footer.style.display = "block";
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
