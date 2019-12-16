<!DOCTYPE html>
<?php require "php/code_functions.php" ?>

<html lang="fa">

<head>
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
    content="فروش پارچه چهارخانه نخی، جهت پیراهن مردانه، خرج کار روپوش و لباس کار، کالیته چهارخانه با رنگ بندی متنوع، کالیته های چهارخانه 90 رنگی" />
  <meta name="author" content="Babak Ashtari" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- for SEO purposes -->
  <!-- open graph meta tags for SEO -->
  <meta property="og:title" content="صنایع نساجی کوثربافت نوین-چهارخونه" />
  <meta property="og:site_name" content="کوثربافت نوین" />
  <meta property="og:url" content="https://kowsarbaft.ir/KaliteCharkhoune.php" />
  <meta property="og:description"
    content="فروش پارچه چهارخانه نخی، جهت پیراهن مردانه، خرج کار روپوش و لباس کار، کالیته چهارخانه با رنگ بندی متنوع، کالیته های چهارخانه 90 رنگی " />
  <meta property="og:locale:alternate" content="fa_IR" />
  <meta property="og:type" content="product" />
  <meta property="og:image" content="https://kowsarbaft.ir/images/logos/kowsarbaftGraftImage.jpg" />

  <link rel="shortcut icon" href="images/logos/kowsarbaftBrownLogo.png" type="image/x-icon" />
  <!-- font awesome -->
  <link rel="stylesheet" href="CSS/all.min.css" />
  <link rel="stylesheet" href="https://necolas.github.io/normalize.css/latest/normalize.css" />
  <title>صنایع نساجی کوثر بافت نوین _ کالیته چهارخانه</title>
  <link rel="stylesheet" href="php/php_css/header.css">
  <link rel="stylesheet" href="php/php_css/footer.css">
  <link rel="stylesheet" href="CSS/kaliteCharkhoune.css" />

  <!-- https://technicalseo.com/tools/schema-markup-generator -->
  <script type="application/ld+json">
{
  "@context": "https://schema.org/", 
  "@type": "Product", 
  "name": "striped Fabric",
  "image": "https://kowsarbaft.ir/images/logos/kowsarbaftMainLogo.png",
  "description": "Striped Iranian fabric 150m width, 100% viscose and provided in 40m rolls.",
  "brand": "Kowsar Baft Novin",
  "sku": "800000",
  "mpn": "9789643674700",
  "offers": {
    "@type": "Offer",
    "url": "https://kowsarbaft.ir/KaliteCharkhoune.php",
    "priceCurrency": "IRR",
    "price": "150000",
    "priceValidUntil": "2020-03-31",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "15",
    "bestRating": "15",
    "worstRating": "5",
    "ratingCount": "1",
    "reviewCount": "1"
  },
  "review": {
    "@type": "Review",
    "name": "Checked the Price",
    "reviewBody": "Highest quality and reasonable price",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "15",
      "bestRating": "15",
      "worstRating": "5"
    },
    "datePublished": "2019-12-10",
    "author": {"@type": "Person", "name": "Babak"},
    "publisher": {"@type": "Organization", "name": "kowsarbaft novin"}
  }
}
</script>
  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <![endif]-->
</head>


<body>
<?php head(); ?>
<main>
    <section>
      <h1>کالیته رنگ های چهارخانه:</h1>
      <h3>برای مشاهده بهتر نمونه رنگ بر روی کد آن کلیک کنید.</h3>
      <!-- kalite container and kalite cells: -->
      <?php ninety_cells(); ?>
    </section>
    <div id="radioContainer">
      <span onclick="prevnext(-1)">&lt;</span>
      <?php ninety_cells_radio_buttons(); ?>
      <span onclick="prevnext(1)">&gt;</span>
    </div>
    <!-- comparison section: -->
    <h3>
      در این قسمت می توانید رنگ های انتخابی خود را در پس زمینه های مختلف با
      یکدیگر مقایسه کنید:
    </h3>
    <section>
      <div>
        <i class="fas fa-tshirt background"></i><br />
        <label for="picker1">کد ترگال برای لباس</label>
        <select name="teregal" id="picker1" onchange="teregalpicker(event)"></select>
        <label for="picker2">کد چهارخانه برای لباس</label>
        <select name="Charkhoune" id="picker2" onchange="colorpicker(event)"></select>
        <label for="picker3">کد پس زمینه لباس</label>
        <select name="background" id="picker3" onchange="backgroundpicker(event)"></select>
      </div>
      <div>
        <i class="fas fa-tshirt background"></i><br />
        <label for="picker4">کد ترگال برای لباس</label>
        <select name="teregal" id="picker4" onchange="teregalpicker(event)"></select>
        <label for="picker5">کد چهارخانه برای لباس</label>
        <select name="Charkhoune" id="picker5" onchange="colorpicker(event)"></select>
        <label for="picker6">کد پس زمینه لباس</label>
        <select name="background" id="picker6" onchange="backgroundpicker(event)"></select>
      </div>
      <div>
        <i class="fas fa-tshirt background"></i><br />
        <label for="picker7">کد ترگال برای لباس</label>
        <select name="teregal" id="picker7" onchange="teregalpicker(event)"></select>
        <label for="picker8">کد چهارخانه برای لباس</label>
        <select name="Charkhoune" id="picker8" onchange="colorpicker(event)"></select>
        <label for="picker9">کد پس زمینه لباس</label>
        <select name="background" id="picker9" onchange="backgroundpicker(event)"></select>
      </div>
    </section>

    <!-- modal opaque box -->
    <div class="displayNone zeroOpacity">
      <div id="skewBox"></div>
      <!-- modal box -->
      <div>
        <span>&times;</span>
        <table>
          <tr>
            <td colspan="2" id="Header">
            <img src="images/kowsarbaft_band_header.png" alt="Kowsarbaft_Header">
            <p>Is the Luxury Textile Collection</p>
            </td>
          </tr>
          <tr>
            <td>نوع پارچه:</td>
            <td>چهارخانه</td>
          </tr>
          <tr>
            <td>کد رنگ:</td>
            <td id="colorCode">188</td>
          </tr>
          <tr>
            <td>تعداد:</td>
            <td>
              <select name="orderQuantityTaghe" id="taghe" onchange="measure()">
                <optgroup label="تعداد طاقه">
                  <option value="0">تعداد طاقه</option>
                  <option value="1">یک طاقه</option>
                  <option value="2">دو طاقه</option>
                  <option value="3">سه طاقه</option>
                  <option value="4">چهار طاقه</option>
                  <option value="5">پنج طاقه</option>
                  <option value="6">شش طاقه</option>
                  <option value="7">هفت طاقه</option>
                  <option value="8">هشت طاقه(یک عدل)</option>
                </optgroup>
              </select><br /><br />
              <select name="OrderQuantityAdl" id="Adl" onchange="measure()">
                <optgroup label="تعداد عدل">
                  <option value="0">تعداد عدل</option>
                  <option value="1">یک عدل</option>
                  <option value="2">دو عدل</option>
                  <option value="3">سه عدل</option>
                  <option value="4">چهار عدل</option>
                  <option value="5">پنج عدل</option>
                  <option value="6">شش عدل</option>
                  <option value="7">هفت عدل</option>
                  <option value="8">هشت عدل</option>
                  <option value="9">نه عدل</option>
                  <option value="10">ده عدل</option>
                </optgroup>
              </select>
            </td>
          </tr>
          <tr>
            <td>متراژ کل:</td>
            <td id="measurement">... متر</td>
          </tr>
          <tr>
            <td colspan="2" class="center">
              <a href="#">افزودن به سبد خرید</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </main>
<?php footer(); ?>

  <script src="JS/KaliteCharkhoune.js"></script>
  <script src="php/php_js/header.js"></script>
</body>

</html>