<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


  <?php
    wp_head();
  ?>
</head>
<body>
  <header>
  <?php
    wp_nav_menu(
      array(
        'menu' => 'primary',
        'container' => '',
        'theme_location' => 'primary'
        // 'items_wrap' => '<ul id="" class="">%3$/</ul>'
      )
    )
  ?>
  </header>