<?php

function rc_theme_support () 
{
  // theme support: automatic title
  add_theme_support( 'title-tag' );

  // removes margin-top 32px !important from html element.
  add_theme_support( 'admin-bar', array( 'callback' => '__return_false' ) );

  // thumbnails for pages
  add_theme_support( 'post-thumbnails', 'page' );

  // alignwide and align full
  add_theme_support( 'align-wide' );
  add_theme_support( 'align-full' );
}

add_action( 'after_setup_theme', 'rc_theme_support' );