<?php

function rc_load_styles () {
  $version = wp_get_theme()->get( 'Version' );
  wp_enqueue_style(
    'rc_stylesheet', 
    get_template_directory_uri() . '/dist/assets/css/styles.css', 
    array(), 
    $version, 
    'all');
}

add_action('wp_enqueue_scripts', 'rc_load_styles');