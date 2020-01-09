<?php 
function head(){
  echo '<header>
  <nav>
    <div class="displayNone">
      <i class="fas fa-bars"></i>
      <img src="images/logos/kowsarbaftTopLogo.png" alt="logo" width="40%" height="auto" />
    </div>
    <ul>
      <li>
        <form action="#" class="left zeroOpacity">
          <a href="">
            <i id="search-button" class="fa fa-search"></i>
          </a>
          <input type="search" class="search" placeholder="جستجو کنید" value="" />
        </form>
      </li>
      <li><i id="searchInitializer" class="fas fa-search"></i></li>
      <li>
        <a href="index.php"><i class="fa fa-home"></i></a>
      </li>
      <!-- لیست محصولات -->
      <li id="products">
        <span><i class="fa fa-caret-down"></i>&nbsp;محصولات</span>
        <ul class="displayNone">
          <li>
            <span><i class="fa fa-caret-down"></i>&nbsp;ترگال</span>
            <ul class="displayNone">
              <li><a href="KaliteTeregal.php">ساده</a></li>
              <li><a href="kaliteDotted.php">خالدار</a></li>
              <li>
                <a href="https://chibepoosham.com/shopping-guide-tergal-fabric/" target="_blank">درباره ترگال</a>
              </li>
            </ul>
          </li>
          <li>
            <span><i class="fa fa-caret-down"></i>&nbsp;مقنعه ای</span>
            <ul class="displayNone">
              <li>
                <a href="#">در دست ساخت</a>
              </li>
            </ul>
          </li>
          <li>
            <span><i class="fa fa-caret-down"></i>&nbsp;پرشیا</span>
            <ul class="displayNone">
              <li><a href="KalitePersia.php">ساده</a></li>
              <li><a href="#">لنین</a></li>

            </ul>
          </li>
          <li>
            <span><i class="fa fa-caret-down"></i>&nbsp;چهارخونه</span>
            <ul class="displayNone">
              <li><a href="KaliteCharkhoune.php">کالیته چهارخونه</a></li>
              <li>
                <a href="https://chibepoosham.com/new-plaid-fabrics/" target="_blank">درباره چهارخانه</a>
              </li>
            </ul>
          </li>
          <li>
            <span><i class="fa fa-caret-down"></i>&nbsp;فاستونی</span>
            <ul class="displayNone">
              <li><a href="Fastoni.php">کالیته فاستونی</a></li>
              <li><a href="https://chibepoosham.com/shopping-guide-fabric/">درباره فاستونی</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a href="aboutUs.php"><i class="fa fa-exclamation"></i>&nbsp;درباره ما</a>
      </li>
      <li>
        <a href="#"><i class="fa fa-volume-control-phone"></i>&nbsp; تماس با ما</a>
      </li>
    </ul>
  </nav>
  <!-- white manu bar and logo container -->
  <div>
    <ul>
      <a href="#">
        <img src="images/logos/kowsarbaftMainLogo.png" alt="Kosar Baft" width="auto" height="100rem" />
      </a>
      <li>
        <a href=""><i class="fa fa-shopping-cart"></i>&nbsp;&nbsp;سبد خرید
        </a>
      </li>
      <li>
        <a href=""> <i class="fa fa-user"></i>&nbsp;&nbsp;نام کاربر</a>
      </li>
      <li>
        <a href=""><i class="fa fa-sign-in"></i>&nbsp;&nbsp;ثبت نام / ورود</a>
      </li>
    </ul>
  </div>
</header>';
}

function footer(){
  echo '
  <footer>
    <section>
      <p>
        ارتباط با ما:
      </p>
      <hr />
      <table>
        <tr>
          <td><i class="fas fa-address-card"></i></td>
          <td>
            <p>
              آدرس: تهران، بازار بزرگ، بازار عباس آباد، سرای آزادی، دالان دوم،
              پلاک
              <span class="Yekan">302</span>، کوثر بافت نوین
            </p>
          </td>
        </tr>
        <tr>
          <td><i class="fas fa-phone-square"></i></td>
          <td>
            <p>
              تلفن:
              <span class="Yekan">02155158815</span> -
              <span class="Yekan">02155594456</span> -
              <span class="Yekan">09121852463</span>
            </p>
          </td>
        </tr>
        <tr>
          <td><i class="fas fa-blog"></i></td>
          <td>
            <p>www.kowsarbaft.ir</p>
          </td>
        </tr>
      </table>

      <hr />
      <p>
        <span>راه های ارتباطی با ما:</span>
        <a href="https://t.me/Kowsarbaft/"><i class="fab fa-telegram"></i></a>
        <a href="https://wa.me/989101912590"><i class="fab fa-whatsapp-square"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-twitter-square"></i></a>
      </p>
    </section>
    <section>
      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.1342233765663!2d51.41869201525869!3d35.673696880196005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQwJzI1LjMiTiA1McKwMjUnMTUuMiJF!5e0!3m2!1sen!2s!4v1560931605658!5m2!1sen!2s"
          width="100%" height="100%" frameborder="" style="border:0" allowfullscreen></iframe>
      </div>
    </section>
    <section>
      <p>
        کلیه حقوق مادی و معنوی این وبسایت به
        <span>شرکت کوثر بافت نوین</span> تعلق دارد.
      </p>
    </section>
  </footer>
  ';
}

function ninety_cells(){
  // رنگ های کالیته های ترگال ساده و چهارخانه
  for($i = 0; $i<8; $i++){
    echo "<div class='container'>";
    for($l = 0; $l<12; $l++){
      echo "<div><p><a href='#'></a></p></div>";
    }
    echo "</div>";
  }
}

function ninety_cells_radio_buttons(){
  // رادیو باتن های کالیته های ترگال ساده و چهارخانه
  for($i=0; $i<8; $i++){
    echo "<label for=''><input type='radio' name='selector' id='first' /><div onclick='checker(event)'></div></label>";
  }
}

function dotted_cells(){
  // خانه های کالیته خالدار
  for($i=0; $i<11; $i++){
    echo '<div id="cell' . ($i+1) . '">';
    echo '<p class="label">' . 'کد ' . ($i+1) . '<br />' . 'افزودن به سبد خرید' .'</p>';
    echo '</div>';
  }
}

function Fastoni_cells(){
  // خانه های کالیته فاستونی طرح حلزونی
  $Fastoni_codes = [
    "زرشکی", "زرد", "یاسی", "کرم" 
  ];
  $Fastoni_images = [    
  "images/kalite/fastoni_halazoni/Fastoni_halazoni_zereshki.jpg",
  "images/kalite/fastoni_halazoni/Fastoni_halazoni_zard.jpg",
  "images/kalite/fastoni_halazoni/Fastoni_halazoni_yasi.jpg",
  "images/kalite/fastoni_halazoni/Fastoni_halazoni_creamy.jpg"
];
  for($i=0; $i<4; $i++){
    echo '<div id="cell' . ($i+1) . '">'. '<img src="'.$Fastoni_images[$i]. '" />';
    echo '<p class="label">' . 'فاستونی طرح حلزونی -  ' . $Fastoni_codes[$i] . '<br />' . 'افزودن به سبد خرید' .'</p>';
    echo '</div>';
  }
}

function Persia_mechanic_cells(){
  // خانه های کالیته پرشیا مکانیک:

}

?>

