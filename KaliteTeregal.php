<!DOCTYPE html>
<?php require "php/code_functions.php" ?>

<html lang="fa">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta http-equiv="content-security-policy" content="default-src 'none'; 
  style-src 'self' 'unsafe-inline'; 
  script-src 'self' 'unsafe-inline';
  img-src 'self';
  font-src 'self';
  frame-src https://www.google.com;
  "  >
  <meta name="description"
    content="فروش پارچه های ترگال، ارائه کالیته ترگال، جهت تولید روپوش و لباس فرم زنانه و دخترانه، کالیته ترگال 90 رنگی" />
  <meta name="author" content="Babak Ashtari" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- for SEO purposes -->
  <!-- open graph meta tags for SEO -->
  <meta property="og:title" content="صنایع نساجی کوثربافت نوین-ترگال" />
  <meta property="og:site_name" content="کوثربافت نوین" />
  <meta property="og:url" content="https://kowsarbaft.ir/KaliteTeregal.php" />
  <meta property="og:description"
    content="فروش پارچه های ترگال، ارائه کالیته ترگال، جهت تولید روپوش و لباس فرم زنانه و دخترانه، کالیته ترگال 90 رنگی" />
  <meta property="og:locale:alternate" content="fa_IR" />
  <meta property="og:type" content="product" />
  <meta property="og:image" content="https://kowsarbaft.ir/images/logos/kowsarbaftGraftImage.jpg" />
  <link rel="shortcut icon" href="images/logos/kowsarbaftBrownLogo.png" type="image/x-icon" />
  <!-- font awesome -->
  <link rel="stylesheet" href="CSS/all.min.css" />
  <!-- this is how I normalize my file using an external css -->
  <link rel="stylesheet" href="CSS/Normalizer.css" />
  <title>صنایع نساجی کوثر بافت نوین _ کالیته ترگال</title>
  <link rel="stylesheet" href="php/php_css/header.css">
  <link rel="stylesheet" href="php/php_css/footer.css">
  <link rel="stylesheet" href="php/php_css/modal.css">
  <link rel="stylesheet" href="CSS/KaliteTeregal.css" />

  <!-- https://technicalseo.com/tools/schema-markup-generator -->
  <script type="application/ld+json">
{
  "@context": "https://schema.org/", 
  "@type": "Product", 
  "name": "Teregal Fabric",
  "image": "https://kowsarbaft.ir/images/logos/kowsarbaftMainLogo.png",
  "description": "Teregal Iranian fabric 150m width, 100% viscose and provided in 40m rolls. has 2 types: simple and thick. simple is light-weight and useful for warm seasons. Thick is perfect for male clothes and suits",
  "brand": "Kowsar Baft Novin",
  "sku": "7500000",
  "mpn": "9789443674600",
  "offers": {
    "@type": "Offer",
    "url": "https://kowsarbaft.ir/KaliteCharkhoune.php",
    "priceCurrency": "IRR",
    "price": "250000",
    "priceValidUntil": "2020-03-31",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "13",
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
      "ratingValue": "13",
      "bestRating": "15",
      "worstRating": "5"
    },
    "datePublished": "2019-12-12",
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
      <!-- kalite containers and cells -->
      <h1>کالیته رنگ های ترگال:</h1>
      <h3>برای مشاهده بهتر نمونه رنگ روی کد موردنظر کلیک کنید.</h3>
      <?php ninety_cells(); ?>
    </section>
    <div id="radio-container">
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
    <?php modal_box_generator(); ?>
  </main>
<?php footer(); ?>

  <script src="JS/KaliteTeregal.js"></script>
  <script src="php/php_js/header.js"></script>
  <script src="php/php_js/modal.js"></script>
</body>

</html>