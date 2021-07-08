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
    <div class="content" >
    <header class="primary-menu">
      <div class="primary-menu__content-left">
        <div class="menu-item">
          <a>
          Home
          </a>
        </div>
      </div>

      <?php
        wp_nav_menu(
          array(
            'menu' => 'primary',
            'container' => '',
            'theme_location' => 'primary',
            'menu_class' => 'primary-menu__content-middle',
            'depth' => '1'
          )
        )
      ?>

      <div class="primary-menu__content-right">
        <div class="primary-menu__info menu-item">
          <a>
          Info
          </a>
        </div>

        <div class="primary-menu__mobile-button menu-item">
          menu
        </div>
      </div>
    </header>
  </div> <!-- primary menu wrapper -->
