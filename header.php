<?php
  $current_user = wp_get_current_user();
  $adminIsLoggedIn = false;
  if (user_can( $current_user, 'administrator' )) {
    $adminIsLoggedIn = true;
  }

  $adminStyle = $adminIsLoggedIn ? 'is-logged--admin' : '';


  $wpSiteUrl = get_site_url();
  $searchUrl = "{$wpSiteUrl}/?s=";
?>

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
<body class="<?= esc_attr($adminStyle); ?>">
    <div class="content" >
    <header class="primary-menu grid-x">
        <div class="cell small-6 medium-1 show-for-large"></div>

        <div class="cell auto">
          <?php
            wp_nav_menu(
              array(
                'menu' => 'primary',
                'container' => '',
                'theme_location' => 'primary',
                'menu_class' => 'primary-menu__items-left',
                'depth' => '2'
              )
            )
          ?>
        </div>

        <div class="cell small-6 medium-3 primary-menu__icons">
            <div class="primary-menu__hamburger show-for-small-only"></div>
            <div class="primary-menu__color-mode show-for-medium"></div>
            <div class="primary-menu__search show-for-medium">
              <a href="<?= esc_url($searchUrl); ?>"></a>
            </div>
        </div>
    </header>
  </div> <!-- primary menu wrapper -->
