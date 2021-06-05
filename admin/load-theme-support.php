<?php

// theme support: automatic title
function rc_theme_support () 
{
  add_theme_support( 'title-tag' );
}

add_action( 'after_setup_theme', 'rc_theme_support' );