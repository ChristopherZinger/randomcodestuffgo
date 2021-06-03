<?php

// load styles
function rc_register_styles () 
{
  $version = wp_get_theme()->get( 'Version' );
  wp_enqueue_style( 'rc-styles', get_template_directory_uri() . '/style.css', array(), $version, 'all' );
}
add_action( 'wp_enqueue_scripts', 'rc_register_styles');


// theme support: automatic title
function rc_theme_support () 
{
  add_theme_support( 'title-tag' );
}
add_action( 'after_setup_theme', 'rc_theme_support' );

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