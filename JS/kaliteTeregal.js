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
      containers[i].style.opacity = "1";
      containers[i].style.transition = "all 1s";
    } else {
      containers[i].style.left = "100%";
      containers[i].style.opacity = "0";
      containers[i].style.transition = "all 0s";
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
var codes = [
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
var colors = [
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
  "c45e6d",
  "",
  "",
  "",
  "",
  "",
  ""
];
var kaliteCells = document.querySelectorAll(".container>div");
var CodePlaces = document.querySelectorAll(".container>div>p>a");
codes.forEach(function(value, index) {
  CodePlaces[index].innerHTML = "کد: " + value + "</br>" + "افزودن به سبد خرید";
});
colors.forEach(function(value, index) {
  kaliteCells[index].style.backgroundColor = "#" + value;
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
      modalBox.style.backgroundColor =
        event.currentTarget.style.backgroundColor;
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
