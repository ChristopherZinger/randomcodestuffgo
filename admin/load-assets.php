<?php


function wpb_add_google_fonts() {
   wp_enqueue_style( 'wpb-google-fonts', 'https://fonts.googleapis.com/css2?family=Inter&display=swap', false );
}
   
add_action( 'wp_enqueue_scripts', 'wpb_add_google_fonts' );


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