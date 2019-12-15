<?php
header("Content-Security-Policy: 
default-src 'none';
style-src 'self' 'unsafe-inline' https://necolas.github.io/normalize.css/latest/normalize.css;
image-src 'self';
script-src 'self';
");
?>

<!-- script-src 'self' 'unsafe-inline' https://*.googleapis.com maps.gstatic.com 'unsafe-eval' -->