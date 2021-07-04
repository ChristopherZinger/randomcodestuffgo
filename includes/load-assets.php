<?php

function wpb_add_google_fonts() {
   wp_enqueue_style( 'wpb-google-fonts', 'https://fonts.googleapis.com/css2?family=Inter&display=swap', false );
}
   
add_action( 'wp_enqueue_scripts', 'wpb_add_google_fonts' );


function rc_load_styles () {
  $version = wp_get_theme()->get( 'Version' );
  wp_enqueue_style(
    'rc_stylesheet', 
    get_template_directory_uri() . '/style.css', 
    array(), 
    $version, 
    'all');
}

add_action('wp_enqueue_scripts', 'rc_load_styles');


function rc_load_app_script () {
  wp_enqueue_script(
    'rc_app_script',
    get_template_directory_uri() . '/assets/js/app.min.js', 
    array(),
    '1.0.0', 
    true
  );
};

add_action('wp_enqueue_scripts', 'rc_load_app_script');


function rc_load_admin_script () {
  wp_enqueue_script( 
    'rc.gutenberg', 
    get_template_directory_uri() . '/assets/js/gutenberg.min.js',
    [
      'wp-components',
      'wp-blocks',
      'wp-i18n',
      'wp-element',
      'wp-editor',
      'wp-block-editor',
      'wp-data',
      'wp-date',
    ], 
    filemtime( get_template_directory_uri() . '/assets/js/gutenberg.min.js' )
  );

  wp_localize_script(
    'rc.gutenberg',
    'rc',
    [
      'date' => [
        'format' => get_option('date_format') . ' ' . get_option('time_format'),
      ],
    ]
  );

  wp_set_script_translations('rc.gutenberg', 'van-ons', get_template_directory_uri() . '/languages' );
}

add_action('admin_enqueue_scripts', 'rc_load_admin_script');



function load_admin_styles () {
  wp_enqueue_style(
    'rc.admin', 
    get_template_directory_uri() . '/admin.css', 
    false, 
    filemtime( get_template_directory_uri() . '/admin.css')
  );
}


add_action('admin_enqueue_scripts', 'load_admin_styles');