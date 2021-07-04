<?php

// menus
function rc_menus ()
{
  $locations = array(
    'primary' => 'Primary Menu',
    'footer' => 'Footer Meny'
  );

  register_nav_menus($locations);
}

add_action( 'init', 'rc_menus' );