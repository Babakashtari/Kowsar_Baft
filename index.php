<!DOCTYPE html>
<?php require "php/code_functions.php" ?>
<html lang="fa">

<head>
  <!-- <meta charset="UTF-8" /> -->
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta http-equiv="content-security-policy" content="default-src 'none'; 
  style-src 'self' 'unsafe-inline' https://necolas.github.io/normalize.css/latest/normalize.css; 
  script-src 'self' 'unsafe-inline';
  img-src 'self';
  font-src 'self';
  frame-src https://www.google.com;
  "  >
  <meta name="description"
    content="صنایع نساجی کوثر بافت نوین، پیشرو در فروش پارچه های ترگال، مقنعه ای و چهارخانه در رنگبندی متنوع جهت  تولید مانتو، لباس کار و یونیفرم مدارس." />
  <meta name="author" content="Babak Ashtari" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- for SEO purposes -->
  <!-- open graph meta tags for SEO -->
  <meta property="og:title" content="صنایع نساجی کوثر بافت نوین" />
  <meta property="og:site_name" content="کوثر بافت نوین" />
  <meta property="og:url" content="https://kowsarbaft.ir" />
  <meta property="og:description"
    content="کوثر بافت نوین، پیشرو فروش پارچه های ترگال، مقنعه ای و چهارخانه جهت تولید مانتو، لباس کار و یونیفرم مدارس" />
  <meta property="og:locale:alternate" content="fa_IR" />
  <meta property="og:type" content="business.business" />
  <meta property="og:image" content="https://kowsarbaft.ir/images/logos/kowsarbaftGraftImage.jpg" />
  
  <!-- https://technicalseo.com/tools/schema-markup-generator -->
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Kowsar Baft Novin",
  "image": "https://kowsarbaft.ir/images/logos/kowsarbaftMainLogo.png",
  "@id": "https://kowsarbaft.ir",
  "url": "https://kowsarbaft.ir",
  "telephone": "982155158815",
  "priceRange": "5$-15$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "302, 2nd Alley, Azadi Street, Abas Abad Bazar",
    "addressLocality": "Tehran",
    "postalCode": "12345",
    "addressCountry": "IR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 35.758889,
    "longitude": 51.43311349999999
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Saturday",
      "Sunday"
    ],
    "opens": "09:00",
    "closes": "20:00"
  },{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": "Thursday",
    "opens": "09:00",
    "closes": "15:00"
  }]
}
  </script>

  <link rel="shortcut icon" href="images/logos/kowsarbaftBrownLogo.png" type="image/x-icon" />
  <!-- font awesome -->
  <link rel="stylesheet" href="CSS/all.min.css" />
  <!-- this is how I normalize my file using an external css -->
  <link rel="stylesheet" href="https://necolas.github.io/normalize.css/latest/normalize.css" />
  <title>صنایع نساجی کوثر بافت نوین - صفحه اصلی</title>
  <link rel="stylesheet" href="php/php_css/header.css">
  <link rel="stylesheet" href="php/php_css/footer.css">
  <link rel="stylesheet" href="CSS/index.css" />
  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <![endif]-->
</head>

<body>
<?php head(); ?>
<main>
    <!-- photo slider section: -->
    <section>
      <!-- photo container -->
      <div>
        <div>
          <img src="images/homePhoto2.jpg" alt=" تولید انواع بلیز و شلوار مردانه و زنانه مناسب با تمامی فصول.  " />
          <div>
            <p>تامین پارچه مورد نیاز جهت انواع پوشاک مردانه و زنانه</p>
          </div>
        </div>
        <div>
          <img src="images/lebas_kar.jpg" alt="تولیدی" />
          <div>
            <p>
              تامین پارچه تولیدی ها جهت انواع لباس کار، یونیفرم و روپوش بانوان
            </p>
          </div>
        </div>
        <div>
          <img src="images/church-of-the-king-j9jZSqfH5YI-unsplash.jpg" alt="لباس فرم مدارس" />
          <div>
            <p>تکمیل و تولید لباس فرم و روپوش مدارس در سراسر کشور</p>
          </div>
        </div>
        <div>
          <img src="images/walter-otto-PT70CT6mATQ-unsplash.jpg" alt="لباس کار بیمارستان" />
          <div>
            <p>
              تکمیل لباس فرم بیمارستان ها، آزمایشگاه ها و سازمان ها
            </p>
          </div>
        </div>
        <div>
          <img src="images/jozsef-hocza-pJYd5CI_TRM-unsplash.jpg" alt="کت و شلوار و بوتیک لباس مردانه" />
          <div>
            <p>
              انواع پارچه های کجراه و پیراهنی جهت کت شلوار و پیراهن مردانه
            </p>
          </div>
        </div>
        <i class="fas fa-chevron-circle-left" onclick="sideMoves(-1)"></i>
        <i class="fas fa-chevron-circle-right" onclick="sideMoves(1)"></i>
      </div>
      <div>
        <label for="first">
          <input type="radio" name="slide" id="first" onclick="photoslider()" checked />
          <span></span>
        </label>
        <label for="second">
          <input type="radio" name="slide" id="second" onclick="photoslider()" />
          <span></span>
        </label>
        <label for="third">
          <input type="radio" name="slide" id="third" onclick="photoslider()" />
          <span></span>
        </label>
        <label for="fourth">
          <input type="radio" name="slide" id="fourth" onclick="photoslider()" />
          <span></span>
        </label>
        <label for="fifth">
          <input type="radio" name="slide" id="fifth" onclick="photoslider()" />
          <span></span>
        </label>
      </div>
    </section>
    <section>
      <h2>بر چسب مشخصات <span> محصولات </span>شرکت کوثر بافت نوین:</h2>
      <div>
        <h3>ترگال</h3>
        <ul>
          <li>
            <p>دو نوع <span>ساده</span> و <span>کجراه</span></p>
          </li>
          <li>
            <p>
              <span>ساده</span> : عرض <span class="Yekan">150</span> و وزن
              تقریبی <span class="Yekan">250</span> گرم، <span>کجراه</span> :
              وزن تقریبی <span class="Yekan">290</span> گرم
            </p>
          </li>
          <li>
            <p>طاقه های <span class="Yekan">40</span> متری</p>
          </li>
          <li>
            <p>
              <a href="./KaliteTeregal.php">کالیته</a> : رنگ بندی
              <span class="Yekan">90</span> تایی
            </p>
          </li>
          <li>
            <p>
              موارد استفاده : <span>ساده</span> جهت لباس فرم مدارس دخترانه و
              یونیفرم سازمان ها و نهاد های دولتی، : <span>کجراه</span> جهت
              لباس کار کارگاه ها، شلوار مردانه و یونیفرم مدارس پسرانه
            </p>
          </li>
          <li>
            <p>
              جهت اطلاعات بیشتر به
              <a href="https://chibepoosham.com/shopping-guide-tergal-fabric/" target="_blank">اینجا</a>
              مراجعه کنید.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h3>چهارخانه</h3>
        <ul>
          <li>
            <p>پارچه های تترون طرحدار و چهارخانه</p>
          </li>
          <li>
            <p>
              عرض <span class="Yekan">150</span> و وزن تقریبی
              <span class="Yekan">200</span> گرم
            </p>
          </li>
          <li>
            <p>طاقه های <span class="Yekan">40</span> متری</p>
          </li>
          <li>
            <p>
              <a href="./KaliteCharkhoune.php">کالیته</a>: رنگ بندی
              <span class="Yekan">90</span> تایی
            </p>
          </li>
          <li>
            <p>
              موارد استفاده: خرج کار مانتو و پوشاک زنانه، پیراهن مردانه و لباس
              فرم سازمان ها و نهاد های دولتی
            </p>
          </li>
          <li>
            <p>
              جهت اطلاعات بیشتر به
              <a href="https://chibepoosham.com/new-plaid-fabrics/" target="_blank">اینجا</a>
              مراجعه کنید.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h3>مقنعه ای</h3>
        <ul>
          <li>
            <p>پارچه های نخی خنک و سبک ایده آل برای فصول گرم</p>
          </li>
          <li>
            <p>
              عرض <span class="Yekan">150</span> و وزن تقریبی
              <span class="Yekan">200</span> گرم
            </p>
          </li>
          <li>
            <p>طاقه های <span class="Yekan">40</span> متری</p>
          </li>
          <li>
            <p>
              <a href="#">کالیته</a> رنگ بندی
              <span class="Yekan">90</span> تایی
            </p>
          </li>
          <li>
            <p>
              موارد استفاده: جهت تولید مقنعه فرم مدارس و سازمان های دولتی،
              پیراهن و تی شرت مردانه
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h3>پرشیا</h3>
        <ul>
          <li>
            <p>پارچه های لخت و مقاوم، ایده آل برای لباس فرم مدارس دخترانه</p>
          </li>
          <li>
            <p>
              عرض <span class="Yekan">150</span>، وزن تقریبی<span class="Yekan">240</span>
              گرم
            </p>
          </li>
          <li>
            <p>طاقه های <span class="Yekan">40</span> متری</p>
          </li>
          <li>
            <p>
              <a href="#">کالیته</a> رنگ بندی
              <span class="Yekan">90</span> تایی
            </p>
          </li>
          <li>
            <p>
              موارد استفاده: تولید روپوش و انواع پوشاک دخترانه
            </p>
          </li>
        </ul>
      </div>
    </section>
  </main>
  <?php footer(); ?>
  <script src="JS/index.js"></script>
  <script src="php/php_js/header.js"></script>
</body>

</html>