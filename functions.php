<?php

require_once 'admin/bootstrap.php';


class RCTheme
{
  public function __construct ()
  {
    $this->themeConstants(); 
  }

  public function themeConstants () 
  {
    define('RC_THEME_DIR', get_template_directory());
    define('RC_THEME_URI', get_template_directory_uri());
    define('RC_THEME_URI_ASSETS', RC_THEME_URI . '/assets');
    define('RC_THEME_URI_CSS', RC_THEME_URI_ASSETS . '/css');
    define('RC_THEME_URI_JS', RC_THEME_URI_ASSETS . '/js');
    define('RC_THEME_URI_COMPONENTS', RC_THEME_URI_ASSETS . '/components');
    define('RC_THEME_URI_IMAGES', RC_THEME_URI_ASSETS . '/images');
    define('RC_THEME_DIR_INCLUDES', RC_THEME_URI . '/includes');
  }


  public function themeIncludes()
  {
      require_once RC_THEME_DIR_INCLUDES . '/autoload.php';
      require_once RC_THEME_DIR_INCLUDES . '/helpers.php';
  }
}