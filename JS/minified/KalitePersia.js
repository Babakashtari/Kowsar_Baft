"use strict";var radios=document.querySelectorAll("#radio-container>label>input"),containers=document.querySelectorAll(".container"),main=document.querySelector("main"),sectionOne=document.querySelector("main>section:first-child"),index=0;radios[index].checked=!0;var searchInitializer=document.querySelector("#searchInitializer"),searchForm=document.querySelector("header>nav>ul>li:first-child>form");searchInitializer.addEventListener("click",function(){searchForm.classList.toggle("zeroOpacity"),searchForm.classList.toggle("left"),searchInitializer.classList.contains("fa-search")?(searchInitializer.classList.remove("fa","fa-search"),searchInitializer.classList.add("fas","fa-times")):(searchInitializer.classList.remove("fas","fa-times"),searchInitializer.classList.add("fa","fa-search"))});var products=document.querySelector("#products"),productsButton=document.querySelector("#products>span"),productsFirstSubmenu=document.querySelector("#products>ul"),productsButtonFontAwsome=document.querySelector("#products>span>i"),productsFirstSubmenuList=document.querySelectorAll("header>nav>ul>li>ul>li"),productsFirstSubmenuSpan=document.querySelectorAll("header>nav>ul>li>ul>li>span"),productsFirstSubmenuFontAwesome=document.querySelectorAll("header>nav>ul>li>ul>li>span>i"),productsSecondSubmenu=document.querySelectorAll("header>nav>ul>li>ul>li>ul"),productsSecondSubmenuList=document.querySelectorAll("header>nav>ul>li>ul>li>ul>li"),productsSecondSubmenuLink=document.querySelectorAll("header>nav>ul>li>ul>li>ul>li>a");productsButton.addEventListener("click",function(){productsFirstSubmenu.classList.toggle("displayNone"),productsButton.classList.toggle("border-bottom"),productsButtonFontAwsome.classList.toggle("rotate")}),productsFirstSubmenu.addEventListener("mouseover",function(){productsButton.style.backgroundColor="#8a72df"}),productsFirstSubmenu.addEventListener("mouseout",function(){productsButton.style.backgroundColor=""}),productsFirstSubmenu.addEventListener("click",function(e){for(var t=0;t<productsFirstSubmenuSpan.length;t++)e.target!=productsFirstSubmenuSpan[t]&&e.target.parentNode!=productsFirstSubmenuSpan[t]&&e.target!=productsSecondSubmenu[t]?(productsFirstSubmenuList[t].classList.remove("border-bottom"),productsFirstSubmenuFontAwesome[t].classList.remove("rotate"),productsSecondSubmenu[t].classList.add("displayNone")):e.target!=productsFirstSubmenuSpan[t]&&e.target.parentNode!=productsFirstSubmenuSpan[t]||(productsFirstSubmenuList[t].classList.toggle("border-bottom"),productsFirstSubmenuFontAwesome[t].classList.toggle("rotate"),productsSecondSubmenu[t].classList.toggle("displayNone"))});var ClassIterator=function(e){for(var t=0;t<e.length;t++)e[t].classList.add("condition")};ClassIterator(productsFirstSubmenuSpan),ClassIterator(productsFirstSubmenuFontAwesome),ClassIterator(productsSecondSubmenu),ClassIterator(productsSecondSubmenuLink),productsButton.classList.add("condition"),productsButtonFontAwsome.classList.add("condition"),productsFirstSubmenu.classList.add("condition"),window.addEventListener("click",function(e){if(!e.target.classList.contains("condition")){productsFirstSubmenu.classList.add("displayNone"),productsButtonFontAwsome.classList.remove("rotate"),productsButton.classList.remove("border-bottom");var t=function(e){for(var t=[],r=0;r<e.length;r++)t[r]=e[r];return t};t(productsSecondSubmenu).forEach(function(e){e.classList.add("displayNone")}),t(productsFirstSubmenuFontAwesome).forEach(function(e){e.classList.remove("rotate")}),t(productsFirstSubmenuList).forEach(function(e){e.classList.remove("border-bottom")})}});var hamburgerButton=document.querySelector("header>nav>div>i"),navBar=document.querySelector("header>nav>ul"),hamburgerbuttonDiv=document.querySelector("header>nav>div");setInterval(function(){document.querySelector("header>div").style.marginTop=document.querySelector("header>nav").offsetHeight+"px"},200);var hideBar=function(){showProgress(),hamburgerButton.classList.remove("far"),hamburgerButton.classList.remove("fa-window-close"),hamburgerButton.classList.add("fas"),hamburgerButton.classList.add("fa-bars");var e=document.querySelector("header>div>ul>a");window.screen.width<=700?(navBar.classList.add("displayNone"),navBar.classList.add("zeroOpacity"),e.classList.add("displayNone"),hamburgerbuttonDiv.classList.remove("displayNone")):(navBar.classList.remove("displayNone"),navBar.classList.remove("zeroOpacity"),e.classList.remove("displayNone"),hamburgerbuttonDiv.classList.add("displayNone"))};window.onresize=hideBar,hamburgerButton.addEventListener("click",function(){hamburgerButton.classList.toggle("far"),hamburgerButton.classList.toggle("fa-window-close"),hamburgerButton.classList.toggle("fas"),hamburgerButton.classList.toggle("fa-bars"),navBar.classList.contains("displayNone")&&navBar.classList.contains("zeroOpacity")?(navBar.classList.remove("displayNone"),setTimeout(function(){navBar.classList.remove("zeroOpacity")},20)):(navBar.classList.add("zeroOpacity"),navBar.addEventListener("transitionend",function(){navBar.classList.contains("zeroOpacity")&&navBar.classList.add("displayNone")}))});var prevnext=function(e){(index+=e)>radios.length-1&&(index=0),index<0&&(index=radios.length-1),radios[index].checked=!0,kalite()},checker=function(e){for(var t=document.querySelectorAll("#radio-container > label > div"),r=0;r<t.length;r++)t[r]===e.target&&(radios[r].checked=!0,kalite())},kalite=function(){for(var e=0;e<radios.length;e++)radios[e].checked?(index=e,containers[e].style.left="0",containers[e].style.transition="1s"):containers[e].style.left="100%"};kalite();var heightset=function(){sectionOne.style.height=containers[0].offsetHeight+document.getElementById("radio-container").offsetHeight+"px"};setInterval(heightset,1e3);var codes=["پرشیا 1008","پرشیا 103","پرشیا 1030","پرشیا 205.77"],images=["../images/Persia1008.jpg","../images/Persia103.jpg","../images/Persia1030.jpg","../images/Persia205.77.jpg"],kaliteCells=document.querySelectorAll(".container>div"),CodePlaces=document.querySelectorAll(".container>div>p>a");codes.forEach(function(e,t){CodePlaces[t].innerHTML="کد: "+e+"</br>افزودن به سبد خرید"}),images.forEach(function(e,t){var r=document.createElement("img");r.setAttribute("src",e),kaliteCells[t].appendChild(r)});var showProgress=function(){var e=document.querySelector("#progress>div"),t=document.querySelector("#progress>p"),r=0,s=document.querySelector("header"),o=document.querySelector("main"),a=document.querySelector("footer"),n=document.querySelector("#progress");var i=setInterval(function(){100===r?(clearInterval(i),s.style.display="block",o.style.display="block",a.style.display="flex",n.style.display="none"):(r++,e.style.width=r+"%",t.innerHTML=r+" %")},20)};window.addEventListener("scroll",function(){scrollY>80&&window.screen.width>700?(hamburgerbuttonDiv.classList.remove("displayNone"),hamburgerButton.classList.add("displayNone")):scrollY<80&&window.screen.width>700?(hamburgerbuttonDiv.classList.add("displayNone"),hamburgerButton.classList.remove("displayNone")):window.screen.width<700&&(hamburgerbuttonDiv.classList.remove("displayNone"),hamburgerButton.classList.remove("displayNone"))});for(var browser_array=["MSIE","Trident","Edge"],result=[],user_agent=navigator.userAgent,b=0;b<browser_array.length;b++)if(user_agent.indexOf(browser_array[b])>-1){confirm(result='کاربر گرامی، لطفا جهت بهره برداری از تمامی ویژگی ها و نمایش بهتر وب سایت از مرورگر های کروم و یا فایر فاکس استفاده کنید. برای دانلود فایرفاکس بر روی " اکی " کلیک کنید. برای ادامه در همین مرور گر بر روی " کنسل " کلیک کنید')&&window.location.href("https://www.mozilla.org/en-US/firefox/new/");break}