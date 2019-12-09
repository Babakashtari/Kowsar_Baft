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
