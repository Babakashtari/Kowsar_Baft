const hamburgerButton = document.querySelector("header>nav>div>i"), navBar = document.querySelector("header>nav>ul"), hamburgerbuttonDiv = document.querySelector("header>nav>div"), products = document.querySelector("#products"), productsButton = document.querySelector("#products>span"), productsFirstSubmenu = document.querySelector("#products>ul"), productsButtonFontAwsome = document.querySelector("#products>span>i"), productsFirstSubmenuList = document.querySelectorAll("header>nav>ul>li>ul>li"), productsFirstSubmenuSpan = document.querySelectorAll("header>nav>ul>li>ul>li>span"), productsFirstSubmenuFontAwesome = document.querySelectorAll("header>nav>ul>li>ul>li>span>i"), productsSecondSubmenu = document.querySelectorAll("header>nav>ul>li>ul>li>ul"), productsSecondSubmenuList = document.querySelectorAll("header>nav>ul>li>ul>li>ul>li"), productsSecondSubmenuLink = document.querySelectorAll("header>nav>ul>li>ul>li>ul>li>a"); productsButton.addEventListener("click", () => { productsFirstSubmenu.classList.toggle("displayNone"), productsButton.classList.toggle("border-bottom"), productsButtonFontAwsome.classList.toggle("rotate") }), productsFirstSubmenu.addEventListener("mouseover", () => { productsButton.style.backgroundColor = "#8a72df" }), productsFirstSubmenu.addEventListener("mouseout", () => { productsButton.style.backgroundColor = "" }), productsFirstSubmenu.addEventListener("click", t => { for (let e = 0; e < productsFirstSubmenuSpan.length; e++)t.target != productsFirstSubmenuSpan[e] && t.target.parentNode != productsFirstSubmenuSpan[e] && t.target != productsSecondSubmenu[e] ? (productsFirstSubmenuList[e].classList.remove("border-bottom"), productsFirstSubmenuFontAwesome[e].classList.remove("rotate"), productsSecondSubmenu[e].classList.add("displayNone")) : t.target != productsFirstSubmenuSpan[e] && t.target.parentNode != productsFirstSubmenuSpan[e] || (productsFirstSubmenuList[e].classList.toggle("border-bottom"), productsFirstSubmenuFontAwesome[e].classList.toggle("rotate"), productsSecondSubmenu[e].classList.toggle("displayNone")) }); const ClassIterator = t => { for (let e = 0; e < t.length; e++)t[e].classList.add("condition") }; ClassIterator(productsFirstSubmenuSpan), ClassIterator(productsFirstSubmenuFontAwesome), ClassIterator(productsSecondSubmenu), ClassIterator(productsSecondSubmenuLink), productsButton.classList.add("condition"), productsButtonFontAwsome.classList.add("condition"), productsFirstSubmenu.classList.add("condition"), window.addEventListener("click", t => { if (!t.target.classList.contains("condition")) { productsFirstSubmenu.classList.add("displayNone"), productsButtonFontAwsome.classList.remove("rotate"), productsButton.classList.remove("border-bottom"); const t = t => { const e = []; for (let s = 0; s < t.length; s++)e[s] = t[s]; return e }; t(productsSecondSubmenu).forEach(t => { t.classList.add("displayNone") }), t(productsFirstSubmenuFontAwesome).forEach(t => { t.classList.remove("rotate") }), t(productsFirstSubmenuList).forEach(t => { t.classList.remove("border-bottom") }) } }); const searchInitializer = document.querySelector("#searchInitializer"), searchForm = document.querySelector("header>nav>ul>li:first-child>form"); searchInitializer.addEventListener("click", () => { searchForm.classList.toggle("zeroOpacity"), searchForm.classList.toggle("left"), searchInitializer.classList.contains("fa-search") ? (searchInitializer.classList.remove("fa", "fa-search"), searchInitializer.classList.add("fas", "fa-times")) : (searchInitializer.classList.remove("fas", "fa-times"), searchInitializer.classList.add("fa", "fa-search")) }), setInterval(() => { document.querySelector("header>div").style.marginTop = document.querySelector("header>nav").offsetHeight + "px" }, 200); const hideBar = () => { hamburgerButton.classList.remove("far"), hamburgerButton.classList.remove("fa-window-close"), hamburgerButton.classList.add("fas"), hamburgerButton.classList.add("fa-bars"); const t = document.querySelector("header>div>ul>a"); window.screen.width <= 700 ? (navBar.classList.add("displayNone"), navBar.classList.add("zeroOpacity"), t.classList.add("displayNone"), hamburgerbuttonDiv.classList.remove("displayNone")) : (navBar.classList.remove("displayNone"), navBar.classList.remove("zeroOpacity"), t.classList.remove("displayNone"), hamburgerbuttonDiv.classList.add("displayNone")) }; window.onresize = hideBar, hamburgerButton.addEventListener("click", () => { hamburgerButton.classList.toggle("far"), hamburgerButton.classList.toggle("fa-window-close"), hamburgerButton.classList.toggle("fas"), hamburgerButton.classList.toggle("fa-bars"), navBar.classList.contains("displayNone") && navBar.classList.contains("zeroOpacity") ? (navBar.classList.remove("displayNone"), setTimeout(() => { navBar.classList.remove("zeroOpacity") }, 20)) : (navBar.classList.add("zeroOpacity"), navBar.addEventListener("transitionend", () => { navBar.classList.contains("zeroOpacity") && navBar.classList.add("displayNone") })) }), window.addEventListener("scroll", () => { scrollY > 80 && window.screen.width > 700 ? (hamburgerbuttonDiv.classList.remove("displayNone"), hamburgerButton.classList.add("displayNone")) : scrollY < 80 && window.screen.width > 700 ? (hamburgerbuttonDiv.classList.add("displayNone"), hamburgerButton.classList.remove("displayNone")) : window.screen.width < 700 && (hamburgerbuttonDiv.classList.remove("displayNone"), hamburgerButton.classList.remove("displayNone")) }); const browser_array = ["MSIE", "Trident", "Edge"]; let result = []; const user_agent = navigator.userAgent; for (let t = 0; t < browser_array.length; t++)if (user_agent.indexOf(browser_array[t]) > -1) { confirm(result = 'کاربر گرامی، لطفا جهت بهره برداری از تمامی ویژگی ها و نمایش بهتر وب سایت از مرورگر های کروم و یا فایر فاکس استفاده کنید. برای دانلود فایرفاکس بر روی " اکی " کلیک کنید. برای ادامه در همین مرور گر بر روی " کنسل " کلیک کنید') && window.location.href("https://www.mozilla.org/en-US/firefox/new/"); break }
