"use strict";var radios=document.querySelectorAll("#radioContainer>label>input"),containers=document.querySelectorAll(".parent"),main=document.querySelector("main"),sectionOne=document.querySelector("main>section:first-child"),index=0;radios[index].checked=!0;var searchInitializer=document.querySelector("#searchInitializer"),searchForm=document.querySelector("header>nav>ul>li:first-child>form");searchInitializer.addEventListener("click",function(){searchForm.classList.toggle("zeroOpacity"),searchForm.classList.toggle("left"),searchInitializer.classList.contains("fa-search")?(searchInitializer.classList.remove("fa","fa-search"),searchInitializer.classList.add("fas","fa-times")):(searchInitializer.classList.remove("fas","fa-times"),searchInitializer.classList.add("fa","fa-search"))});var hamburgerButton=document.querySelector("header>nav>div>i"),navBar=document.querySelector("header>nav>ul"),hamburgerbuttonDiv=document.querySelector("header>nav>div"),products=document.querySelector("#products"),productsButton=document.querySelector("#products>span"),productsFirstSubmenu=document.querySelector("#products>ul"),productsButtonFontAwsome=document.querySelector("#products>span>i"),productsFirstSubmenuList=document.querySelectorAll("header>nav>ul>li>ul>li"),productsFirstSubmenuSpan=document.querySelectorAll("header>nav>ul>li>ul>li>span"),productsFirstSubmenuFontAwesome=document.querySelectorAll("header>nav>ul>li>ul>li>span>i"),productsSecondSubmenu=document.querySelectorAll("header>nav>ul>li>ul>li>ul"),productsSecondSubmenuList=document.querySelectorAll("header>nav>ul>li>ul>li>ul>li"),productsSecondSubmenuLink=document.querySelectorAll("header>nav>ul>li>ul>li>ul>li>a");productsButton.addEventListener("click",function(){productsFirstSubmenu.classList.toggle("displayNone"),productsButton.classList.toggle("border-bottom"),productsButtonFontAwsome.classList.toggle("rotate")}),productsFirstSubmenu.addEventListener("mouseover",function(){productsButton.style.backgroundColor="#8a72df"}),productsFirstSubmenu.addEventListener("mouseout",function(){productsButton.style.backgroundColor=""}),productsFirstSubmenu.addEventListener("click",function(r){for(var e=0;e<productsFirstSubmenuSpan.length;e++)r.target!=productsFirstSubmenuSpan[e]&&r.target.parentNode!=productsFirstSubmenuSpan[e]&&r.target!=productsSecondSubmenu[e]?(productsFirstSubmenuList[e].classList.remove("border-bottom"),productsFirstSubmenuFontAwesome[e].classList.remove("rotate"),productsSecondSubmenu[e].classList.add("displayNone")):r.target!=productsFirstSubmenuSpan[e]&&r.target.parentNode!=productsFirstSubmenuSpan[e]||(productsFirstSubmenuList[e].classList.toggle("border-bottom"),productsFirstSubmenuFontAwesome[e].classList.toggle("rotate"),productsSecondSubmenu[e].classList.toggle("displayNone"))});var ClassIterator=function(r){for(var e=0;e<r.length;e++)r[e].classList.add("condition")};ClassIterator(productsFirstSubmenuSpan),ClassIterator(productsFirstSubmenuFontAwesome),ClassIterator(productsSecondSubmenu),ClassIterator(productsSecondSubmenuLink),productsButton.classList.add("condition"),productsButtonFontAwsome.classList.add("condition"),productsFirstSubmenu.classList.add("condition"),window.addEventListener("click",function(r){if(!r.target.classList.contains("condition")){productsFirstSubmenu.classList.add("displayNone"),productsButtonFontAwsome.classList.remove("rotate"),productsButton.classList.remove("border-bottom");var e=function(r){for(var e=[],a=0;a<r.length;a++)e[a]=r[a];return e};e(productsSecondSubmenu).forEach(function(r){r.classList.add("displayNone")}),e(productsFirstSubmenuFontAwesome).forEach(function(r){r.classList.remove("rotate")}),e(productsFirstSubmenuList).forEach(function(r){r.classList.remove("border-bottom")})}}),setInterval(function(){document.querySelector("header>div").style.marginTop=document.querySelector("header>nav").offsetHeight+"px"},200);var hideBar=function(){showProgress(),hamburgerButton.classList.remove("far"),hamburgerButton.classList.remove("fa-window-close"),hamburgerButton.classList.add("fas"),hamburgerButton.classList.add("fa-bars");var r=document.querySelector("header>div>ul>a");window.screen.width<=700?(navBar.classList.add("displayNone"),navBar.classList.add("zeroOpacity"),r.classList.add("displayNone"),hamburgerbuttonDiv.classList.remove("displayNone")):(navBar.classList.remove("displayNone"),navBar.classList.remove("zeroOpacity"),r.classList.remove("displayNone"),hamburgerbuttonDiv.classList.add("displayNone"))};window.onresize=hideBar,hamburgerButton.addEventListener("click",function(){hamburgerButton.classList.toggle("far"),hamburgerButton.classList.toggle("fa-window-close"),hamburgerButton.classList.toggle("fas"),hamburgerButton.classList.toggle("fa-bars"),navBar.classList.contains("displayNone")&&navBar.classList.contains("zeroOpacity")?(navBar.classList.remove("displayNone"),setTimeout(function(){navBar.classList.remove("zeroOpacity")},20)):(navBar.classList.add("zeroOpacity"),navBar.addEventListener("transitionend",function(){navBar.classList.contains("zeroOpacity")&&navBar.classList.add("displayNone")}))});var prevnext=function(r){(index+=r)>radios.length-1&&(index=0),index<0&&(index=radios.length-1),radios[index].checked=!0,kalite()},checker=function(r){for(var e=document.querySelectorAll("#radioContainer>label>div"),a=0;a<e.length;a++)e[a]===r.target&&(radios[a].checked=!0,kalite())},kalite=function(){for(var r=0;r<radios.length;r++)radios[r].checked?(index=r,containers[r].style.left="0",containers[r].style.opacity="1",containers[r].style.transition="all ease-out 1s"):(containers[r].style.left="100%",containers[r].style.opacity="0",containers[r].style.transition="all 0s")};kalite();var heightset=function(){sectionOne.style.height=containers[0].offsetHeight+document.getElementById("radioContainer").offsetHeight+"px"};setInterval(heightset,1);for(var Color_codes=[],gradients=["repeating-linear-gradient(to right, transparent 0, transparent 1rem, rgba(22, 166, 101, 0.5) 1rem, rgba(22, 166, 101, 0.5) 2rem),    repeating-linear-gradient(transparent 0, transparent 1rem, rgba(22, 166, 101, 0.5) 1rem, rgba(22, 166, 101, 0.5) 2rem)","repeating-linear-gradient(to right, transparent 0, transparent 1rem, rgba(0, 87, 255, 0.6) 1rem, rgba(0, 87, 255, 0.6) 2rem),    repeating-linear-gradient(transparent 0, transparent 1rem, rgba(0, 87, 255, 0.6) 1rem, rgba(0, 87, 255, 0.6) 2rem)","repeating-linear-gradient(to right, rgba(91, 0, 57, 0.6) 0, rgba(91, 0, 57, 0.6) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(91, 0, 57, 0.5) 0, rgba(91, 0, 57, 0.5) 1rem, transparent 1rem, transparent 2rem)","repeating-linear-gradient(to right, rgba(209, 41, 0, 0.7) 0, rgba(209, 41, 0, 0.7) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(209, 41, 0, 0.5) 0, rgba(209, 41, 0, 0.5) 1rem, transparent 1rem, transparent 2rem)","repeating-linear-gradient(to right, rgba(135, 61, 0, 0.6) 0, rgba(135, 61, 0, 0.6) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(135, 61, 0, 0.8) 0, rgba(135, 61, 0, 0.8) 1rem, transparent 1rem, transparent 2rem)","repeating-linear-gradient(to right, rgba(66, 28, 0, 0.8) 0, rgba(66, 28, 0, 0.8) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(66, 28, 0, 0.6) 0, rgba(66, 28, 0, 0.6) 1rem, transparent 1rem, transparent 2rem), linear-gradient(rgba(197, 0, 0, 0.3), rgba(197, 0, 0, 0.3))","repeating-linear-gradient(to right, rgba(172, 0, 0, 0.7) 0, rgba(172, 0, 0, 0.7) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(172, 0, 0, 0.5) 0, rgba(172, 0, 0, 0.5) 1rem, transparent 1rem, transparent 2rem), linear-gradient(rgba(255, 0, 0, 0.2), rgba(255, 0, 0, 0.2))","repeating-linear-gradient(to right, rgba(250, 64, 56, 0.7) 0, rgba(250, 64, 56, 0.7) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(250, 64, 56, 0.7) 0, rgba(250, 64, 56, 0.7) 1rem, transparent 1rem, transparent 2rem)","repeating-linear-gradient(to right, rgba(105, 40, 0, 0.5) 0, rgba(105, 40, 0, 0.5) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(105, 40, 0, 0.5) 0, rgba(105, 40, 0, 0.5) 1rem, transparent 1rem, transparent 2rem)","repeating-linear-gradient(to right, rgba(255, 48, 0, 0.7) 0, rgba(255, 48, 0, 0.7) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(255, 48, 0, 0.7) 0, rgba(255, 48, 0, 0.7) 1rem, transparent 1rem, transparent 2rem)","repeating-linear-gradient(to right, rgba(0, 87, 255, 0.6) 0, rgba(0, 87, 255, 0.6) 0.5rem, transparent 0.5rem, transparent 1rem),    repeating-linear-gradient(rgba(0, 87, 255, 0.5) 0, rgba(0, 87, 255, 0.5) 0.5rem, transparent 0.5rem, transparent 1rem)","repeating-linear-gradient(to right, rgba(255, 175, 0, 0.7) 0, rgba(255, 175, 0, 0.7) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(255, 175, 0, 0.5) 0, rgba(255, 175, 0, 0.5) 1rem, transparent 1rem, transparent 2rem)","repeating-linear-gradient(to right, rgba(255, 119, 0, 0.7) 0, rgba(255, 119, 0, 0.7) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(255, 119, 0, 0.5) 0, rgba(255, 119, 0, 0.5) 1rem, transparent 1rem, transparent 2rem)","repeating-linear-gradient(to right, rgba(0, 94, 0, 0.6) 0, rgba(0, 94, 0, 0.6)  1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(0, 94, 0, 0.6) 0, rgba(0, 94, 0, 0.6) 1rem, transparent 1rem, transparent 2rem)","repeating-linear-gradient(to right, rgba(52, 79, 0, 0.8) 0, rgba(52, 79, 0, 0.8) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(52, 79, 0, 0.8) 0, rgba(52, 79, 0, 0.8) 1rem, transparent 1rem, transparent 2rem)","repeating-linear-gradient(to right, rgba(255, 28, 27, 0.6) 0, rgba(255, 28, 27, 0.6) 1rem, transparent 1rem, transparent 2rem),    repeating-linear-gradient(rgba(255, 28, 27, 0.6) 0, rgba(255, 28, 27, 0.6) 1rem, transparent 1rem, transparent 2rem)","repeating-linear-gradient(to right, rgba(0, 51, 86, 0.8) 0, rgba(0, 51, 86, 0.8) 0.5rem, transparent 0.5rem, transparent 1rem),    repeating-linear-gradient(rgba(0, 51, 86, 0.6) 0, rgba(0, 51, 86, 0.6) 0.5rem, transparent 0.5rem, transparent 1rem)","repeating-linear-gradient(to right, rgba(136, 64, 3, 0.8) 0, rgba(136, 64, 3, 0.8) 0.5rem, transparent 0.5rem, transparent 1rem),    repeating-linear-gradient(rgba(136, 64, 3, 0.8) 0, rgba(136, 64, 3, 0.8) 0.5rem, transparent 0.5rem, transparent 1rem)","repeating-linear-gradient(to right, rgba(0, 26, 18, 0.8) 0, rgba(0, 26, 18, 0.8) 0.5rem, transparent 0.5rem, transparent 1rem),    repeating-linear-gradient(rgba(0, 26, 18, 0.8) 0, rgba(0, 26, 18, 0.8) 0.5rem, transparent 0.5rem, transparent 1rem)","repeating-linear-gradient(to right, rgba(143, 0, 0, 0.7) 0, rgba(143, 0, 0, 0.7) 0.5rem, transparent 0.5rem, transparent 1rem),    repeating-linear-gradient(rgba(143, 0, 0, 0.7) 0, rgba(143, 0, 0, 0.7) 0.5rem, transparent 0.5rem, transparent 1rem)","repeating-linear-gradient(to right, transparent -1rem, transparent 1rem, rgba(0, 0, 35, 0.7) 1rem, rgba(0, 0, 35, 0.7) 3rem, transparent 3rem, transparent 5rem, rgba(127, 0, 0, 0.6) 5rem, rgba(127, 0, 0, 0.6) 7rem), repeating-linear-gradient(rgba(0, 0, 35, 0.7) 0, rgba(0, 0, 35, 0.7) 2rem, transparent 2rem, transparent 4rem, rgba(0, 75, 0, 0.7) 4rem, rgba(0, 75, 0, 0.7) 6rem, transparent 6rem, transparent 8rem), repeating-linear-gradient(rgba(255, 168, 0, 0.5), rgba(255, 168, 0, 0.5))","repeating-linear-gradient(to right, transparent -3rem, transparent -1rem, rgba(0, 0, 35, 0.7) -1rem, rgba(0, 0, 35, 0.7) 1rem, transparent 1rem, transparent 3rem, rgba(127, 0, 0, 0.6) 3rem, rgba(127, 0, 0, 0.6) 5rem), repeating-linear-gradient(to top, transparent -3rem, transparent -1rem, rgba(0, 0, 35, 0.7) -1rem, rgba(0, 0, 35, 0.7) 1rem, transparent 1rem, transparent 3rem, rgba(127, 0, 0, 0.6) 3rem, rgba(127, 0, 0, 0.6) 5rem), repeating-linear-gradient(rgba(255, 168, 0, 0.5), rgba(255, 168, 0, 0.5))","repeating-linear-gradient(to right, rgba(250, 64, 56, 0.7) 0, rgba(250, 64, 56, 0.7) 0.5rem, transparent 0.5rem, transparent 1rem),    repeating-linear-gradient(rgba(250, 64, 56, 0.7) 0, rgba(250, 64, 56, 0.7) 0.5rem, transparent 0.5rem, transparent 1rem)","repeating-linear-gradient(to right, rgba(255, 175, 0, 0.7) 0, rgba(255, 175, 0, 0.7) 0.5rem, transparent 0.5rem, transparent 1rem),    repeating-linear-gradient(rgba(255, 175, 0, 0.7) 0, rgba(255, 175, 0, 0.7) 0.5rem, transparent 0.5rem, transparent 1rem)","repeating-linear-gradient(to right, rgba(0, 51, 86, 0.8) 0, rgba(0, 51, 86, 0.8) 0.4rem, transparent .4rem, transparent 1rem, rgba(0, 51, 86, 0.8) 1rem, rgba(0, 51, 86, 0.8) 1.4rem)","repeating-linear-gradient(to right, rgba(135, 61, 0, 0.8) 0, rgba(135, 61, 0, 0.8) 0.4rem, transparent .4rem, transparent 1rem, rgba(135, 61, 0, 0.8) 1rem,  rgba(135, 61, 0, 0.8) 1.4rem)","repeating-linear-gradient(to right, rgba(66, 28, 0, 0.9) 0, rgba(66, 28, 0, 0.9) 0.4rem, transparent 0.4rem, transparent 1rem, rgba(66, 28, 0, 0.9) 1rem, rgba(66, 28, 0, 0.9) 1.4rem), linear-gradient(rgba(197, 0, 0, 0.2), rgba(197, 0, 0, 0.2))","repeating-linear-gradient(to right, rgba(0, 26, 18, 0.8) 0, rgba(0, 26, 18, 0.8) 0.4rem, transparent 0.4rem, transparent 1rem, rgba(0, 26, 18, 0.8) 1rem, rgba(0, 26, 18, 0.8) 1.4rem)","repeating-linear-gradient(to right, rgba(0, 87, 255, 0.6) 0, rgba(0, 87, 255, 0.6) 0.4rem, transparent 0.4rem, transparent 1rem, rgba(0, 87, 255, 0.6) 1rem, rgba(0, 87, 255, 0.6) 1.4rem)","repeating-linear-gradient(to right, rgba(91, 0, 57, 0.7) 0, rgba(91, 0, 57, 0.7) 0.4rem, transparent 0.4rem, transparent 1rem, rgba(91, 0, 57, 0.7) 1rem, rgba(91, 0, 57, 0.7) 1.4rem)","repeating-linear-gradient(to right, rgba(255, 0, 26, 0.7) 0, rgba(255, 0, 26, 0.7) 0.4rem, transparent 0.4rem, transparent 1rem, rgba(255, 0, 26, 0.7) 1rem, rgba(255, 0, 26, 0.7) 1.4rem)","repeating-linear-gradient(to right, rgba(255, 0, 0, 0.9) 0, rgba(255, 0, 0, 0.9) 0.4rem, transparent 0.4rem, transparent 1rem, rgba(255, 0, 0, 0.9) 1rem, rgba(255, 0, 0, 0.9) 1.4rem), linear-gradient(rgba(197, 0, 0, 0.2), rgba(197, 0, 0, 0.2))","repeating-linear-gradient(to right, rgba(255, 175, 0, 0.9) 0, rgba(255, 175, 0, 0.9) 0.2rem, transparent 0.2rem, transparent 0.5rem, rgba(255, 175, 0, 0.9) 0.5rem, rgba(255, 175, 0, 0.9) 0.7rem)"," repeating-linear-gradient(to right, rgba(0, 175, 0, 0.9) 0, rgba(0, 175, 0, 0.9) 0.4rem, transparent 0.4rem, transparent 1rem, rgba(0, 175, 0, 0.9) 1rem, rgba(0, 175, 0, 0.9) 1.4rem)","repeating-linear-gradient(to right, rgba(255, 255, 0, 0.9) 0,rgba(255, 255, 0, 0.9) 0.4rem, transparent 0.4rem, transparent 1rem, rgba(255, 255, 0, 0.9) 1rem, rgba(255, 255, 0, 0.9) 1.4rem)","repeating-linear-gradient(to right, rgba(255, 87, 0, 1) 0, rgba(255, 87, 0, 1) 0.4rem, transparent 0.4rem, transparent 1rem, rgba(255, 87, 0, 1) 1rem, rgba(255, 87, 0, 1) 1.4rem)","repeating-linear-gradient(to right, rgba(255, 0, 0, 0.8) 0, rgba(255, 0, 0, 0.8) 0.2rem, transparent 0.2rem, transparent 0.5rem, rgba(255, 0, 0, 0.8) 0.5rem, rgba(255, 0, 0, 0.8) 0.7rem)","repeating-linear-gradient(to right, rgba(91, 0, 57, 0.9) 0, rgba(91, 0, 57, 0.9) 0.2rem, transparent 0.2rem, transparent 0.5rem, rgba(91, 0, 57, 0.9) 0.5rem, rgba(91, 0, 57, 0.9) 0.7rem)","repeating-linear-gradient(to right, rgba(0, 0, 158, 0.7) 0, rgba(0, 0, 158, 0.7) 0.2rem, transparent 0.2rem, transparent 0.5rem, rgba(0, 0, 158, 0.7) 0.5rem, rgba(0, 0, 158, 0.7) 0.7rem)","repeating-linear-gradient(to right,  rgba(48, 54, 27, 0.9) 0, rgba(48, 54, 27, 0.9) 0.2rem, transparent 0.2rem, transparent 0.5rem,  rgba(48, 54, 27, 0.9) 0.5rem,  rgba(48, 54, 27, 0.9) 0.7rem)","repeating-linear-gradient(to right, transparent -4rem, transparent 2rem, rgba(91, 0, 57, 0.7) 2rem, rgba(91, 0, 57, 0.7) 8rem), repeating-linear-gradient(transparent 0, transparent 5.5rem, rgba(91, 0, 57, 0.7) 5.5rem, rgba(91, 0, 57, 0.7) 11rem)","repeating-linear-gradient(to right, transparent -9rem, transparent -3rem, rgba(0, 18, 255, 0.5) -3rem, rgba(0, 18, 255, 0.5) 3rem), repeating-linear-gradient(transparent 0, transparent 5.5rem, rgba(0, 18, 255, 0.8) 5.5rem, rgba(0, 18, 255, 0.8) 11rem)","repeating-linear-gradient(to right, transparent -5rem, transparent 1rem, rgba(0, 0, 61, 0.8) 1rem, rgba(0, 0, 61, 0.8) 7rem), repeating-linear-gradient(transparent -7rem, transparent -1.5rem, rgba(0, 0, 61, 0.6) -1.5rem, rgba(0, 0, 61, 0.6) 4rem)","repeating-linear-gradient(to right, transparent -5rem, transparent 1rem, rgba(0, 0, 0, 0.8) 1rem, rgba(0, 0, 0, 0.8) 7rem), repeating-linear-gradient(transparent -15rem, transparent -7rem, rgba(0, 0, 0, 0.7) -7rem, rgba(0, 0, 0, 0.7) 1rem)","repeating-linear-gradient(to right, rgba(250, 64, 56, 0.7) -5rem, rgba(250, 64, 56, 0.7) 1rem, transparent 1rem, transparent 7rem), repeating-linear-gradient(transparent -3.5rem, transparent 2.5rem, rgba(250, 64, 56, 0.6) 2.5rem, rgba(250, 64, 56, 0.6) 8.5rem)","repeating-linear-gradient(to right, transparent -1rem, transparent 5rem, rgba(176, 0, 2, 0.8) 5rem, rgba(176, 0, 2, 0.8) 11rem), repeating-linear-gradient(transparent -3.5rem, transparent 2.5rem, rgba(176, 0, 2, 0.9) 2.5rem, rgba(176, 0, 2, 0.9) 8.5rem)","repeating-linear-gradient(to right, transparent 0, transparent 6rem, rgba(255, 59, 0, 0.6) 6rem, rgba(255, 59, 0, 0.6) 12rem), repeating-linear-gradient(transparent -8rem, transparent -1rem, rgba(255, 59, 0, 0.8) -1rem, rgba(255, 59, 0, 0.8) 6rem)","repeating-linear-gradient(to right, transparent -4rem, transparent 2rem, rgba(255, 143, 0, 0.8) 2rem, rgba(255, 143, 0, 0.8) 8rem), repeating-linear-gradient(transparent -1rem, transparent 5rem, rgba(255, 143, 0, 0.8) 5rem, rgba(255, 143, 0, 0.8) 11rem)","repeating-linear-gradient(to right, transparent -1rem, transparent 2rem, rgba(0, 75, 0, 0.9) 2rem, rgba(0, 75, 0, 0.9) 5rem), repeating-linear-gradient(transparent 0.25rem, transparent 3.25rem, rgba(0, 75, 0, 0.7) 3.25rem, rgba(0, 75, 0, 0.7) 6.25rem)","repeating-linear-gradient(to right, transparent -1rem, transparent 2rem, rgba(96, 47, 0, 0.8) 2rem, rgba(96, 47, 0, 0.8) 5rem), repeating-linear-gradient(transparent 0.25rem, transparent 3.25rem, rgba(96, 47, 0, 0.7) 3.25rem, rgba(96, 47, 0, 0.7) 6.25rem)","repeating-linear-gradient(to right, transparent -1rem, transparent 2rem, rgba(99, 0, 0, 0.8) 2rem, rgba(99, 0, 0, 0.8) 5rem), repeating-linear-gradient(transparent 0.25rem, transparent 3.25rem, rgba(99, 0, 0, 0.7) 3.25rem, rgba(99, 0, 0, 0.7) 6.25rem), linear-gradient(rgba(197, 0, 0, 0.3), rgba(197, 0, 0, 0.3))"," repeating-linear-gradient(to right, transparent -1rem, transparent 2rem, rgba(0, 0, 0, 0.8) 2rem, rgba(0, 0, 0, 0.8) 5rem), repeating-linear-gradient(transparent 0.25rem, transparent 3.25rem, rgba(0, 0, 0, 0.7) 3.25rem, rgba(0, 0, 0, 0.7) 6.25rem)","repeating-linear-gradient(to left, transparent -1rem, transparent 2rem, rgba(250, 37, 55, 0.7) 2rem, rgba(250, 37, 55, 0.7) 5rem), repeating-linear-gradient(rgba(250, 37, 55, 0.7) 0, rgba(250, 37, 55, 0.7) 3rem, transparent 3rem, transparent 6rem)","repeating-linear-gradient(to right, transparent -1rem, transparent 2rem, rgba(91, 0, 57, 0.7) 2rem, rgba(91, 0, 57, 0.7) 5rem), repeating-linear-gradient(to top, rgba(91, 0, 57, 0.7) 0, rgba(91, 0, 57, 0.7) 3rem, transparent 3rem, transparent 6rem)","repeating-linear-gradient(to right, transparent -5.75rem, transparent -2.75rem, rgba(0, 87, 255, 0.6) -2.75rem, rgba(0, 87, 255, 0.6) 0.25rem), repeating-linear-gradient(to top, rgba(0, 87, 255, 0.6) -1.5rem, rgba(0, 87, 255, 0.6) 1.5rem, transparent 1.5rem, transparent 4.5rem)","repeating-linear-gradient(to right, transparent -5.75rem, transparent -2.75rem, rgba(0, 0, 61, 0.8) -2.75rem, rgba(0, 0, 61, 0.8) 0.25rem), repeating-linear-gradient(to top, rgba(0, 0, 61, 0.8) -1.5rem, rgba(0, 0, 61, 0.8) 1.5rem, transparent 1.5rem, transparent 4.5rem)","repeating-linear-gradient(to right, transparent -5.75rem, transparent -2.75rem, rgba(255, 143, 0, 0.8) -2.75rem, rgba(255, 143, 0, 0.8) 0.25rem), repeating-linear-gradient(to top, rgba(255, 143, 0, 0.8) -1.5rem, rgba(255, 143, 0, 0.8) 1.5rem, transparent 1.5rem, transparent 4.5rem)","repeating-linear-gradient(to right, transparent -5.75rem, transparent -2.75rem, rgba(255, 41, 0, 0.8) -2.75rem, rgba(255, 41, 0, 0.8) 0.25rem), repeating-linear-gradient(to top, rgba(255, 41, 0, 0.8) -1.5rem, rgba(255, 41, 0, 0.8) 1.5rem, transparent 1.5rem, transparent 4.5rem)","repeating-linear-gradient(to right, transparent -2rem, transparent 1rem, rgba(176, 0, 2, 0.8) 1rem, rgba(176, 0, 2, 0.8) 4rem), repeating-linear-gradient(to top, transparent -1rem, transparent 2rem,  rgba(176, 0, 2, 0.8) 2rem, rgba(176, 0, 2, 0.8) 5rem)","repeating-linear-gradient(to right, transparent -1rem, transparent 2rem, rgba(209, 41, 0, 0.7) 2rem, rgba(209, 41, 0, 0.7) 5rem), repeating-linear-gradient(to bottom, transparent 0rem, transparent 3rem,  rgba(209, 41, 0, 0.7) 3rem, rgba(209, 41, 0, 0.7) 6rem)","repeating-linear-gradient(to right, transparent 1rem, transparent 2rem, rgba(0, 0, 16, 0.9) 2rem, rgba(0, 0, 16, 0.9) 3rem), repeating-linear-gradient(to bottom, transparent 0rem, transparent 1rem,  rgba(0, 0, 16, 0.9) 1rem, rgba(0, 0, 16, 0.9) 2rem)","repeating-linear-gradient(to right, transparent 1rem, transparent 2rem, rgba(0, 0, 27, 0.7) 2rem, rgba(0, 0, 27, 0.7) 3rem), repeating-linear-gradient(to bottom, transparent 0rem, transparent 1rem,  rgba(0, 0, 27, 0.7) 1rem, rgba(0, 0, 27, 0.7) 2rem)","repeating-linear-gradient(to right, transparent 1rem, transparent 2rem, rgba(48, 54, 27, 0.8) 2rem, rgba(48, 54, 27, 0.8) 3rem), repeating-linear-gradient(to bottom, transparent 0rem, transparent 1rem, rgba(48, 54, 27, 0.7) 1rem, rgba(48, 54, 27, 0.7) 2rem)","repeating-linear-gradient(to right, transparent 1rem, transparent 2rem, rgba(20, 20, 0, 0.9) 2rem, rgba(20, 20, 0, 0.9) 3rem), repeating-linear-gradient(to bottom, transparent 0rem, transparent 1rem, rgba(20, 20, 0, 0.9) 1rem, rgba(20, 20, 0, 0.9) 2rem)","repeating-linear-gradient(transparent 0rem, transparent 1rem, rgba(255, 255, 0, 0.3) 1rem, rgba(255, 255, 0, 0.3) 1.1rem, transparent 1.1rem, transparent 3rem), repeating-linear-gradient(transparent 0, transparent 2rem, rgba(255, 255, 0, 0.3) 2rem, rgba(255, 255, 0, 0.3) 3rem), repeating-linear-gradient(to right, transparent 0, transparent 2rem, rgba(255, 255, 0, 0.3) 2rem, rgba(255, 255, 0, 0.3) 3rem), repeating-linear-gradient(to right, transparent 0, transparent 1rem, rgba(255, 255, 0, 0.3) 1rem, rgba(255, 255, 0, 0.3) 1.1rem, transparent 1.1rem, transparent 3rem), repeating-linear-gradient(rgba(19, 0, 0, 1), rgba(19, 0, 0, 1))","repeating-linear-gradient(transparent 0, transparent 0.75rem, rgba(255,255,255, 0.5) 0.75rem, rgba(255,255,255, 0.5) 0.85rem), repeating-linear-gradient(to right, transparent 0, transparent 0.75rem, rgba(255,255,255, 0.5) 0.75rem, rgba(255,255,255, 0.5) 0.85rem), repeating-linear-gradient(rgb(0, 0, 0),rgb(0, 0, 0))","repeating-linear-gradient(to top, transparent 0, transparent 3rem, rgba(0, 26, 18, 0.8) 3rem, rgba(0, 26, 18, 0.8) 4rem, transparent 4rem, transparent 5rem, rgba(0, 26, 18, 0.8) 5rem, rgba(0, 26, 18, 0.8) 6rem, transparent 6rem, transparent 7rem, rgba(0, 26, 18, 0.8) 7rem, rgba(0, 26, 18, 0.8) 8rem, transparent 8rem, transparent 10rem), repeating-linear-gradient(to top, rgba(127, 0, 0, 0.6) 0, rgba(127, 0, 0, 0.6) 1rem, transparent 1rem, transparent 10rem), repeating-linear-gradient(to right, transparent 0, transparent 3rem, rgba(0, 26, 18, 0.8) 3rem, rgba(0, 26, 18, 0.8) 4rem, rgba(255, 255, 255, 0.5) 4rem, rgba(255, 255, 255, 0.5) 5rem, rgba(0, 26, 18, 0.8) 5rem, rgba(0, 26, 18, 0.8) 6rem, rgba(255, 255, 255, 0.5) 6rem, rgba(255, 255, 255, 0.5) 7rem, rgba(0, 26, 18, 0.8) 7rem, rgba(0, 26, 18, 0.8) 8rem, transparent 8rem, transparent 10rem), repeating-linear-gradient(to right, rgba(127, 0, 0, 0.6) 0, rgba(127, 0, 0, 0.6) 1rem, transparent 1rem, transparent 10rem), repeating-linear-gradient(rgba(255, 168, 0, 0.8), rgba(255, 168, 0, 0.8))","repeating-linear-gradient(to right, transparent 0rem, transparent 1rem, rgba(48, 9, 0, 0.8) 1rem, rgba(48, 9, 0, 0.8) 2rem), repeating-linear-gradient(transparent 0rem, transparent 1rem, rgba(48, 9, 0, 0.7) 1rem, rgba(48, 9, 0, 0.7) 2rem)","repeating-linear-gradient(to right, transparent 0rem, transparent 1rem, rgba(0, 26, 18, 0.8) 1rem, rgba(0, 26, 18, 0.8) 2rem), repeating-linear-gradient(rgba(255, 28, 27, 0.8) 0, rgba(255, 28, 27, 0.8) 1rem, transparent 1rem, transparent 2rem, rgba(0, 26, 18, 0.8) 2rem, rgba(0, 26, 18, 0.8) 3rem, transparent 3rem, transparent 4rem)","repeating-linear-gradient(to right, transparent 0rem, transparent 1rem, rgba(0, 26, 18, 0.9) 1rem, rgba(0, 26, 18, 0.9) 2rem), repeating-linear-gradient(rgba(0, 26, 18, 0.7) 0, rgba(0, 26, 18, 0.7) 1rem, transparent 1rem, transparent 2rem, rgba(0, 26, 18, 0.7) 2rem, rgba(0, 26, 18, 0.7) 3rem, transparent 3rem, transparent 4rem)"," repeating-linear-gradient(to right, rgba(0, 0, 0, 0.9) -1rem, rgba(0, 0, 0, 0.9) 1rem, transparent 1rem, transparent 3rem),    repeating-linear-gradient(rgba(0, 0, 0, 0.9) 0, rgba(0, 0, 0, 0.9) 1.5rem, transparent 1.5rem, transparent 3rem), repeating-linear-gradient(rgb(122, 0, 0), rgb(122, 0, 0))","repeating-linear-gradient(to right, rgba(96, 47, 0, 0.9) 0, rgba(96, 47, 0, 0.9) 1rem, transparent 1rem, transparent 2rem, rgba(0, 26, 18, 0.7) 2rem, rgba(0, 26, 18, 0.7) 3rem, transparent 3rem, transparent 4rem), repeating-linear-gradient(rgba(0, 26, 18, 0.7) 0, rgba(0, 26, 18, 0.7) 1rem, transparent 1rem, transparent 2rem, rgba(0, 26, 18, 0.7) 2rem, rgba(0, 26, 18, 0.7) 3rem, transparent 3rem, transparent 4rem), repeating-linear-gradient(rgba(255, 168, 0, 0.8), rgba(255, 168, 0, 0.8))","repeating-linear-gradient(to right, rgba(0, 26, 18, 0.8) 0, rgba(0, 26, 18, 0.8) 0.5rem, transparent 0.5rem, transparent 1rem, rgba(255, 28, 27, 0.8) 1rem, rgba(255, 28, 27, 0.8) 1.5rem, transparent 1.5rem, transparent 2rem), repeating-linear-gradient(rgba(0, 26, 18, 0.8) 0, rgba(0, 26, 18, 0.8) 0.5rem, transparent 0.5rem, transparent 1rem, rgba(255, 28, 27, 0.8) 1rem, rgba(255, 28, 27, 0.8) 1.5rem, transparent 1.5rem, transparent 2rem)","repeating-linear-gradient(to right, rgba(0, 26, 18, 0.6) 0, rgba(0, 26, 18, 0.6) 1rem, transparent 1rem, transparent 2rem, rgba(0, 26, 18, 0.6) 2rem, rgba(0, 26, 18, 0.6) 3rem, transparent 3rem, transparent 4rem), repeating-linear-gradient(rgba(0, 26, 18, 0.6) 0.5rem, rgba(0, 26, 18, 0.6) 1.5rem, transparent 1.5rem, transparent 2.5rem, rgba(0, 26, 18, 0.6) 2.5rem, rgba(0, 26, 18, 0.6) 3.5rem, transparent 3.5rem, transparent 4.5rem), repeating-linear-gradient(transparent 0.5rem, transparent 2rem, rgba(96, 47, 0, 0.9) 2rem, rgba(96, 47, 0, 1)2.1rem, transparent 2.1rem, transparent 4.5rem), repeating-linear-gradient(to right, transparent 0, transparent 1.5rem, rgba(96, 47, 0, 1) 1.5rem, rgba(96, 47, 0, 1)1.6rem, transparent 1.6rem, transparent 4rem), repeating-linear-gradient(rgba(255, 168, 0, 0.8), rgba(255, 168, 0, 0.8))","repeating-linear-gradient(to right, transparent -1rem, transparent 2rem, rgba(0, 0, 28, 0.7) 2rem, rgba(0, 0, 28, 0.7) 5rem), repeating-linear-gradient(transparent 0.25rem, transparent 3.25rem, rgba(0, 0, 28, 0.7) 3.25rem, rgba(0, 0, 28, 0.7) 6.25rem)","repeating-linear-gradient(to right, transparent -1rem, transparent 2rem, rgba(96, 47, 0, 0.9) 2rem, rgba(96, 47, 0, 0.9) 5rem), repeating-linear-gradient(transparent 0.25rem, transparent 3.25rem, rgba(96, 47, 0, 0.9) 3.25rem, rgba(96, 47, 0, 0.9) 6.25rem)","repeating-linear-gradient(to right, transparent 0rem, transparent 1rem, rgba(0, 137, 94, 0.8) 1rem, rgba(0, 137, 94, 0.8) 2rem), repeating-linear-gradient(rgba(0, 137, 94, 0.8) 0, rgba(0, 137, 94, 0.8) 1rem, transparent 1rem, transparent 2rem, rgba(0, 137, 94, 0.8) 2rem, rgba(0, 137, 94, 0.8) 3rem, transparent 3rem, transparent 4rem)","repeating-linear-gradient(to right, transparent 0rem, transparent 1rem, rgba(0, 64, 42, 0.9) 1rem, rgba(0, 64, 42, 0.9) 2rem), repeating-linear-gradient(rgba(0, 64, 42, 0.7) 0, rgba(0, 64, 42, 0.7) 1rem, transparent 1rem, transparent 2rem, rgba(0, 64, 42, 0.7) 2rem, rgba(0, 64, 42, 0.7) 3rem, transparent 3rem, transparent 4rem) ","repeating-linear-gradient(to right, transparent 0rem, transparent 1rem, rgba(0, 64, 42, 0.9) 1rem, rgba(0, 64, 42, 0.9) 2rem), repeating-linear-gradient(rgba(0, 64, 42, 0.7) 0, rgba(0, 64, 42, 0.7) 1rem, transparent 1rem, transparent 2rem, rgba(0, 64, 42, 0.7) 2rem, rgba(0, 64, 42, 0.7) 3rem, transparent 3rem, transparent 4rem), repeating-linear-gradient(rgba(120, 255, 255, 0.5), rgba(120, 255, 255, 0.5))"," repeating-linear-gradient(to right, transparent -4rem, transparent 2rem, rgba(0, 0, 13, 0.8) 2rem, rgba(0, 0, 13, 0.8) 8rem), repeating-linear-gradient(to top, transparent -1rem, transparent 5rem, rgba(0, 0, 13, 0.8) 5rem, rgba(0, 0, 13, 0.8) 11rem)","repeating-linear-gradient(to right, transparent 0, transparent 1rem, rgba(0, 94, 0, 0.6) 1rem, rgba(0, 94, 0, 0.6) 2rem),    repeating-linear-gradient(transparent 0, transparent 1rem, rgba(0, 94, 0, 0.6) 1rem, rgba(0, 94, 0, 0.6) 2rem)","repeating-linear-gradient(to right, transparent 0, transparent 1rem, rgba(112, 179, 255, 0.5) 1rem, rgba(112, 179, 255, 0.5) 2rem),    repeating-linear-gradient(transparent 0, transparent 1rem, rgba(112, 179, 255, 0.5) 1rem, rgba(112, 179, 255, 0.5) 2rem)","repeating-linear-gradient(to right, transparent 0, transparent .5rem, rgba(136, 64, 3, 0.8) .5rem, rgba(136, 64, 3, 0.8) 1rem)","repeating-linear-gradient(to right, transparent 0, transparent 1rem, rgba(52, 79, 0, 0.8) 1rem, rgba(52, 79, 0, 0.8) 2rem)","repeating-linear-gradient(to right, transparent 0, transparent 1rem, rgba(45, 145, 114, 0.9) 1rem, rgba(45, 145, 114, 0.9) 2rem)","repeating-linear-gradient(to right, transparent 0, transparent 1rem, rgba(120, 158, 0, 0.8) 1rem, rgba(120, 158, 0, 0.8) 2rem)","repeating-linear-gradient(to right, transparent 0, transparent 1rem, rgba(0, 34, 34, 0.9) 1rem, rgba(0, 34, 34, 0.9) 2rem)","repeating-linear-gradient(to right, transparent 0, transparent .5rem, rgba(122, 0, 0, 0.8) .5rem, rgba(122, 0, 0, 0.8) 1rem), repeating-linear-gradient(rgb(250, 215, 255), rgb(250, 215, 255))"],kaliteCells=document.querySelectorAll(".parent>div"),b=0;b<kaliteCells.length;b++)Color_codes.push(b+1);var CodePlaces=document.querySelectorAll(".parent>div>p>a");Color_codes.forEach(function(r,e){CodePlaces[e].innerHTML="کد: "+r+"</br>افزودن به سبد خرید"}),gradients.forEach(function(r,e){kaliteCells[e].style.backgroundImage=r});var measure=function(){var r=document.getElementById("measurement"),e=document.getElementsByName("orderQuantityTaghe")[0].value,a=document.getElementsByName("OrderQuantityAdl")[0].value;switch(40*e+320*a){case 0:r.innerHTML="... متر";break;default:r.innerHTML=40*e+320*a+" متر "}};!function(){var r=document.querySelector("body>main>div:nth-of-type(2)"),e=r.querySelector("div:nth-child(2)");e.querySelector("span").addEventListener("click",function(){r.classList.add("zeroOpacity"),r.addEventListener("transitionend",function(){r.classList.contains("zeroOpacity")&&r.classList.add("displayNone")})});for(var a=0;a<kaliteCells.length;a++)kaliteCells[a].addEventListener("click",function(a){e.style.backgroundImage=a.currentTarget.style.backgroundImage,document.getElementById("colorCode").innerHTML=a.currentTarget.querySelector("div>p>a").innerHTML.replace("افزودن به سبد خرید",""),r.classList.remove("displayNone"),setTimeout(function(){r.classList.remove("zeroOpacity")},20)})}();var showProgress=function(){var r=document.querySelector("#progress>div"),e=document.querySelector("#progress>p"),a=0,t=document.querySelector("header"),n=document.querySelector("main"),i=document.querySelector("footer"),g=document.querySelector("#progress"),s=setInterval(function(){100===a?(clearInterval(s),t.style.display="block",n.style.display="block",i.style.display="flex",g.style.display="none"):(a++,r.style.width=a+"%",e.innerHTML=a+"%")},10)};window.addEventListener("scroll",function(){scrollY>80&&window.screen.width>700?(hamburgerbuttonDiv.classList.remove("displayNone"),hamburgerButton.classList.add("displayNone")):scrollY<80&&window.screen.width>700?(hamburgerbuttonDiv.classList.add("displayNone"),hamburgerButton.classList.remove("displayNone")):window.screen.width<700&&(hamburgerbuttonDiv.classList.remove("displayNone"),hamburgerButton.classList.remove("displayNone"))});var codes=[709.1,705,704.6,807.2,609,401.8,104,603,1008,1002.7,1008.2,1023,405,800.58,401.5,800.59,805,602.3,603.2,601.1,404.3,800.55,800.66,400.1,760,466,700.5,1030,436,703,830,700.11,345,840,120,101.6,380,809.1,360,206.22,355,205,100,205.77,102.3,436,801.7,900,704.2,193,801.62,103,1002.6,1002.1,1005,903.6,876,904.2,903,800.5,209.5,205.5,255,241,206,204,204.25,246,240,202.11,202,201.1,109,107.7,103.2,102.1,408,439,776,404.22,350,304,303,302],colors=["0b0700","170d00","734319","4a2500","000e00","253307","0d1900","3a3207","250a00","26170d","310000","670d17","00260b","658000","525927","373f00","6f4800","876e3b","54461a","d2d971","008a4b","8fff00","24c900","2bff69","271502","dff589","8c8f4f","260d0c","000a00","2f2305","b17700","FFFEAB","400e20","9c3e00","525c4a","8fa16f","020008","ff0f00","190019","011213","0f0300","041006","fff","000604","37321e","001000","ffff00","ffbf8a","382309","05fcac","e37400","193118","360200","6b2f33","c40014","87240d","5e0900","830000","f7632a","ffff54","00000a","0b0b07","000803","24232c","00002e","133838","00234a","002424","006949","1a6182","2b91a6","808080","000","0a0a0a","181a1a","393d22","001202","001d0d","140900","004033","220000","4b2638","7a1c61","c45e6d"];!function(){for(var r=document.querySelectorAll("main>section:nth-of-type(2)>div>select[name='teregal']"),e=0;e<r.length;e++){for(var a='<option value="">کد رنگ ترگال مورد نظر خود را انتخاب کنید</option>',t=0;t<colors.length;t++)a+="<option value=".concat(colors[t],' style="background-color:#').concat(colors[t],'">کد رنگ:  ').concat(codes[t],"</option>");r[e].innerHTML=a}for(var n=document.querySelectorAll('main>section:nth-of-type(2)>div>select[name="Charkhoune"]'),i=0;i<n.length;i++){for(var g='<option value="">کد چهارخانه مورد نظر خود را انتخاب کنید</option>',s=0;s<gradients.length;s++)g+="<option value=".concat(s," >کد چهارخونه:  ").concat(s+1,"</option>");n[i].innerHTML=g}for(var m=document.querySelectorAll("main>section:nth-of-type(2)>div>select[name='background']"),o=0;o<m.length;o++){for(var p='<option value="">کد پس زمینه مورد نظر خود را انتخاب کنید</option>',l=0;l<colors.length;l++)p+="<option value=".concat(colors[l],' style="background-color:#').concat(colors[l],'">کد رنگ:  ').concat(codes[l],"</option>");m[o].innerHTML=p}}();for(var teregalpicker=function(r){for(var e=document.querySelectorAll("main>section:nth-of-type(2)>div>select[name='teregal']"),a=document.querySelectorAll("main>section:nth-of-type(2)>div>i"),t=0;t<e.length;t++)r.target===e[t]&&(a[t].style.color="#"+r.target.value,a[t].classList.remove("gradient"),a[t].classList.remove("background"),a[t].style.backgroundImage=null)},colorpicker=function(r){for(var e=document.querySelectorAll('main>section:nth-of-type(2)>div>select[name="Charkhoune"]'),a=document.querySelectorAll("main>section:nth-of-type(2)>div>i"),t=0;t<e.length;t++)r.target===e[t]&&(a[t].style.backgroundImage=gradients[r.target.value],a[t].classList.add("gradient"),a[t].classList.add("background"))},backgroundpicker=function(r){for(var e=document.querySelectorAll("main>section:nth-of-type(2)>div"),a=document.querySelectorAll("main>section:nth-of-type(2)>div>select[name='background']"),t=document.querySelectorAll("main>section:nth-of-type(2)>div>i"),n=0;n<a.length;n++)r.target===a[n]&&(e[n].style.backgroundColor="#"+r.target.value,t[n].classList.contains("gradient")||t[n].classList.remove("background"))},browser_array=["MSIE","Trident","Edge"],result=[],user_agent=navigator.userAgent,_b=0;_b<browser_array.length;_b++)if(user_agent.indexOf(browser_array[_b])>-1){confirm(result='کاربر گرامی، لطفا جهت بهره برداری از تمامی ویژگی ها و نمایش بهتر وب سایت از مرورگر های کروم و یا فایر فاکس استفاده کنید. برای دانلود فایرفاکس بر روی " اکی " کلیک کنید. برای ادامه در همین مرور گر بر روی " کنسل " کلیک کنید')&&window.location.href("https://www.mozilla.org/en-US/firefox/new/");break}