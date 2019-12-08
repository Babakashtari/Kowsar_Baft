const hideBar = () => {
  // initializing photoslider
  photoslider();
  // running hidden bar function from the header.js
  hiddenBar()
};


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
// browser check:
// prettier-ignore
const browser_array = ['MSIE', 'Trident', 'Edge'];
let result = [];
const user_agent = navigator.userAgent;
for (let b = 0; b < browser_array.length; b++) {
  if (user_agent.indexOf(browser_array[b]) > -1) {
    result =
      'کاربر گرامی، لطفا جهت بهره برداری از تمامی ویژگی ها و نمایش بهتر وب سایت از مرورگر های کروم و یا فایر فاکس استفاده کنید. برای دانلود فایرفاکس بر روی " اکی " کلیک کنید. برای ادامه در همین مرور گر بر روی " کنسل " کلیک کنید';
    if (confirm(result)) {
      window.location.href("https://www.mozilla.org/en-US/firefox/new/");
    }
    break;
  }
}
