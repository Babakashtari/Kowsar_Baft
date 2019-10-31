"use strict";

var radios = document.querySelectorAll("#radio-container>label>input");
var containers = document.querySelectorAll(".container");
var main = document.querySelector("main");
var sectionOne = document.querySelector("main>section:first-child");
var index = 0;
radios[index].checked = true; // search button click event:

var searchInitializer = document.querySelector("#searchInitializer");
var searchForm = document.querySelector("header>nav>ul>li:first-child>form");
searchInitializer.addEventListener("click", function() {
  searchForm.classList.toggle("zeroOpacity");
  searchForm.classList.toggle("left");

  if (searchInitializer.classList.contains("fa-search")) {
    searchInitializer.classList.remove("fa", "fa-search");
    searchInitializer.classList.add("fas", "fa-times");
  } else {
    searchInitializer.classList.remove("fas", "fa-times");
    searchInitializer.classList.add("fa", "fa-search");
  }
}); // products navbar variables:

var products = document.querySelector("#products");
var productsButton = document.querySelector("#products>span");
var productsFirstSubmenu = document.querySelector("#products>ul");
var productsButtonFontAwsome = document.querySelector("#products>span>i");
var productsFirstSubmenuList = document.querySelectorAll(
  "header>nav>ul>li>ul>li"
);
var productsFirstSubmenuSpan = document.querySelectorAll(
  "header>nav>ul>li>ul>li>span"
);
var productsFirstSubmenuFontAwesome = document.querySelectorAll(
  "header>nav>ul>li>ul>li>span>i"
);
var productsSecondSubmenu = document.querySelectorAll(
  "header>nav>ul>li>ul>li>ul"
);
var productsSecondSubmenuList = document.querySelectorAll(
  "header>nav>ul>li>ul>li>ul>li"
);
var productsSecondSubmenuLink = document.querySelectorAll(
  "header>nav>ul>li>ul>li>ul>li>a"
); // open main Products navbar click event:

productsButton.addEventListener("click", function() {
  productsFirstSubmenu.classList.toggle("displayNone");
  productsButton.classList.toggle("border-bottom");
  productsButtonFontAwsome.classList.toggle("rotate");
}); // products first navbar hover effect on main products button:

productsFirstSubmenu.addEventListener("mouseover", function() {
  productsButton.style.backgroundColor = "#8a72df";
});
productsFirstSubmenu.addEventListener("mouseout", function() {
  productsButton.style.backgroundColor = "";
}); //Products first submeu click events:

productsFirstSubmenu.addEventListener("click", function(event) {
  for (var _index = 0; _index < productsFirstSubmenuSpan.length; _index++) {
    if (
      event.target != productsFirstSubmenuSpan[_index] &&
      event.target.parentNode != productsFirstSubmenuSpan[_index] &&
      event.target != productsSecondSubmenu[_index]
    ) {
      productsFirstSubmenuList[_index].classList.remove("border-bottom");

      productsFirstSubmenuFontAwesome[_index].classList.remove("rotate");

      productsSecondSubmenu[_index].classList.add("displayNone");
    } else if (
      event.target == productsFirstSubmenuSpan[_index] ||
      event.target.parentNode == productsFirstSubmenuSpan[_index]
    ) {
      productsFirstSubmenuList[_index].classList.toggle("border-bottom");

      productsFirstSubmenuFontAwesome[_index].classList.toggle("rotate");

      productsSecondSubmenu[_index].classList.toggle("displayNone");
    }
  }
});

var ClassIterator = function ClassIterator(array) {
  for (var i = 0; i < array.length; i++) {
    array[i].classList.add("condition");
  }
};

ClassIterator(productsFirstSubmenuSpan);
ClassIterator(productsFirstSubmenuFontAwesome);
ClassIterator(productsSecondSubmenu);
ClassIterator(productsSecondSubmenuLink);
productsButton.classList.add("condition");
productsButtonFontAwsome.classList.add("condition");
productsFirstSubmenu.classList.add("condition"); // closing effect on click outside of the products menu:

window.addEventListener("click", function(event) {
  if (!event.target.classList.contains("condition")) {
    productsFirstSubmenu.classList.add("displayNone");
    productsButtonFontAwsome.classList.remove("rotate");
    productsButton.classList.remove("border-bottom");

    var arrayCreator = function arrayCreator(array) {
      var nouveau = [];

      for (var i = 0; i < array.length; i++) {
        nouveau[i] = array[i];
      }

      return nouveau;
    };

    arrayCreator(productsSecondSubmenu).forEach(function(item) {
      item.classList.add("displayNone");
    });
    arrayCreator(productsFirstSubmenuFontAwesome).forEach(function(item) {
      item.classList.remove("rotate");
    });
    arrayCreator(productsFirstSubmenuList).forEach(function(item) {
      item.classList.remove("border-bottom");
    });
  }
}); // hamburger button on the green navbar for small screens:

var hamburgerButton = document.querySelector("header>nav>div>i");
var navBar = document.querySelector("header>nav>ul");
var hamburgerbuttonDiv = document.querySelector("header>nav>div");
setInterval(function() {
  document.querySelector("header>div").style.marginTop =
    document.querySelector("header>nav").offsetHeight + "px";
}, 200);

var hideBar = function hideBar() {
  // in order to have 3 onload/resize events:
  showProgress(); // in order to reset the hamburger button on landscape/portrait change:

  hamburgerButton.classList.remove("far");
  hamburgerButton.classList.remove("fa-window-close");
  hamburgerButton.classList.add("fas");
  hamburgerButton.classList.add("fa-bars");
  var secondLogoLink = document.querySelector("header>div>ul>a");

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
hamburgerButton.addEventListener("click", function() {
  hamburgerButton.classList.toggle("far");
  hamburgerButton.classList.toggle("fa-window-close");
  hamburgerButton.classList.toggle("fas");
  hamburgerButton.classList.toggle("fa-bars"); // وقتی منو بسته است

  if (
    navBar.classList.contains("displayNone") &&
    navBar.classList.contains("zeroOpacity")
  ) {
    navBar.classList.remove("displayNone");
    setTimeout(function() {
      navBar.classList.remove("zeroOpacity");
    }, 20);
  } else {
    /* وقتی منو باز است */
    navBar.classList.add("zeroOpacity");
    navBar.addEventListener("transitionend", function() {
      if (navBar.classList.contains("zeroOpacity")) {
        navBar.classList.add("displayNone");
      }
    });
  }
});

var prevnext = function prevnext(n) {
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

var checker = function checker(event) {
  var radio_divs = document.querySelectorAll("#radio-container > label > div");

  for (var i = 0; i < radio_divs.length; i++) {
    if (radio_divs[i] === event.target) {
      radios[i].checked = true;
      kalite();
    }
  }
};

var kalite = function kalite() {
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      index = i;
      containers[i].style.left = "0";
      containers[i].style.transition = "1s";
    } else {
      containers[i].style.left = "100%";
    }
  }
};

kalite();

var heightset = function heightset() {
  sectionOne.style.height =
    containers[0].offsetHeight +
    document.getElementById("radio-container").offsetHeight +
    "px";
};

setInterval(heightset, 1000); // array for color codes and their color RGB:

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
}); // progress bar:

var showProgress = function showProgress() {
  var progressDiv = document.querySelector("#progress>div");
  var paragraph = document.querySelector("#progress>p");
  var width = 0;
  var header = document.querySelector("header");
  var main = document.querySelector("main");
  var footer = document.querySelector("footer");
  var progressBar = document.querySelector("#progress");

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

  var x = setInterval(increment, 20);
}; // scroll effect on top logo:

window.addEventListener("scroll", function() {
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
}); // browser check:
// prettier-ignore

var browser_array = ['MSIE', 'Trident', 'Edge'];
var result = [];
var user_agent = navigator.userAgent;

for (var b = 0; b < browser_array.length; b++) {
  if (user_agent.indexOf(browser_array[b]) > -1) {
    result =
      'کاربر گرامی، لطفا جهت بهره برداری از تمامی ویژگی ها و نمایش بهتر وب سایت از مرورگر های کروم و یا فایر فاکس استفاده کنید. برای دانلود فایرفاکس بر روی " اکی " کلیک کنید. برای ادامه در همین مرور گر بر روی " کنسل " کلیک کنید';

    if (confirm(result)) {
      window.location.href("https://www.mozilla.org/en-US/firefox/new/");
    }

    break;
  }
}
