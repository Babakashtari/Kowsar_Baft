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
// in order to add condition class for closing navbars dynamically:
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

setInterval(() => {
  document.querySelector("header>div").style.marginTop =
    document.querySelector("header>nav").offsetHeight + "px";
}, 200);
const hideBar = () => {
  // in order to have 3 onload/resize events:
  showProgress();
  photoslider();
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
      paragraph.innerHTML = width + " %";
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

//homepage photoslider: prettier-ignore
const radios = document.querySelectorAll(
  "main > section > div > label> input "
);
let index = 0;
const photoslider = () => {
  const photos = document.querySelectorAll("main>section>div:nth-child(1)>div");
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      index = i;
      photos[i].style.display = "inline";
      const x = setTimeout(() => {
        photos[i].style.left = "0";
      }, 1);
    } else {
      photos[i].style.left = "100%";
      photos[i].style.display = "none";
    }
  }
};
// left and right buttons:
const sideMoves = (n = 1) => {
  index += n;
  if (index > radios.length - 1) {
    index = 0;
  }
  if (index < 0) {
    index = radios.length - 1;
  }
  radios[index].checked = true;
  photoslider();
};
let timer = setInterval(sideMoves, 4000);
const photoslider_container = document.querySelector(
  "main>section>div:nth-child(1)"
);
photoslider_container.addEventListener("mouseenter", () => {
  clearInterval(timer);
});
photoslider_container.addEventListener("mouseleave", () => {
  timer = setInterval(sideMoves, 4000);
});