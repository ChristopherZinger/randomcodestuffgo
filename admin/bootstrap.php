<?php

// load styles
function rc_register_styles () 
{
  $version = wp_get_theme()->get( 'Version' );
  wp_enqueue_style( 'rc-styles', get_template_directory_uri() . '/style.css', array(), $version, 'all' );
};

add_action( 'wp_enqueue_scripts', 'rc_register_styles');