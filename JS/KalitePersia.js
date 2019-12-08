const radios = document.querySelectorAll("#radio-container>label>input");
const containers = document.querySelectorAll(".container");
const main = document.querySelector("main");
const sectionOne = document.querySelector("main>section:first-child");
let index = 0;
radios[index].checked = true;

const hideBar = () => {
  hiddenBar();
};

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
  const radio_divs = document.querySelectorAll(
    "#radio-container > label > div"
  );
  for (let i = 0; i < radio_divs.length; i++) {
    if (radio_divs[i] === event.target) {
      radios[i].checked = true;
      kalite();
    }
  }
};

const kalite = () => {
  for (let i = 0; i < radios.length; i++) {
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

const heightset = () => {
  sectionOne.style.height =
    containers[0].offsetHeight +
    document.getElementById("radio-container").offsetHeight +
    "px";
};
setInterval(heightset, 1000);

// array for color codes and their color RGB:
const codes = ["پرشیا 1008", "پرشیا 103", "پرشیا 1030", "پرشیا 205.77"];
const images = [
  "../images/Persia1008.jpg",
  "../images/Persia103.jpg",
  "../images/Persia1030.jpg",
  "../images/Persia205.77.jpg"
];
const kaliteCells = document.querySelectorAll(".container>div");
const CodePlaces = document.querySelectorAll(".container>div>p>a");
codes.forEach(function (value, index) {
  CodePlaces[index].innerHTML = "کد: " + value + "</br>" + "افزودن به سبد خرید";
});
images.forEach(function (value, index) {
  const img = document.createElement("img");
  img.setAttribute("src", value);
  kaliteCells[index].appendChild(img);
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
