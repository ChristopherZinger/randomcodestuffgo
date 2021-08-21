<?php

class RCTheme
{
  public function __construct ()
  {
    $this->themeConstants(); 
    $this->themeActions();
    $this->themeIncludes();
  }

  public function themeConstants () 
  {
    define('RC_THEME_DIR', get_template_directory());
    define('RC_THEME_DIR_ASSETS', RC_THEME_DIR . '/assets');
    define('RC_THEME_DIR_CSS', RC_THEME_DIR_ASSETS . '/css');
    define('RC_THEME_DIR_JS', RC_THEME_DIR_ASSETS . '/js');
    define('RC_THEME_DIR_COMPONENTS', RC_THEME_DIR_ASSETS . '/components');
    define('RC_THEME_DIR_IMAGES', RC_THEME_DIR_ASSETS . '/images');
    define('RC_THEME_DIR_INCLUDES', RC_THEME_DIR . '/includes');
    define('RC_THEME_URI', get_template_directory_uri());
    define('RC_THEME_URI_ASSETS', RC_THEME_URI . '/assets');
    define('RC_THEME_URI_CSS', RC_THEME_URI_ASSETS . '/css');
    define('RC_THEME_URI_JS', RC_THEME_URI_ASSETS . '/js');
    define('RC_THEME_URI_COMPONENTS', RC_THEME_URI_ASSETS . '/components');
    define('RC_THEME_URI_IMAGES', RC_THEME_URI_ASSETS . '/images');
  }


  public function themeIncludes()
  {
      require_once RC_THEME_DIR_INCLUDES . '/autoload.php';
      require_once RC_THEME_DIR_INCLUDES . '/helpers.php';
  }

  public function themeActions () 
  {
    add_action('after_setup_theme', [$this, 'themeSetup']);
    add_action('wp_enqueue_scripts', [$this, 'themeStylesAndScripts'], 999);
    add_action('admin_enqueue_scripts', [$this, 'adminStylesAndScripts']);
  }

  public function themeSetup () 
  {
    $this->themeSupports();
    $this->themeMenus();
  }

  public function themeStylesAndScripts () 
  {
    $version = wp_get_theme()->get( 'Version' );

    wp_enqueue_style( 'wpb-google-fonts', 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap', false );
    wp_enqueue_style( 'wpb-google-fonta', 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap', false);

    wp_enqueue_style(
      'rc_stylesheet', 
      get_template_directory_uri() . '/style.css', 
      array(), 
      filemtime( RC_THEME_DIR . '/style.css'), 
      'all'
    );

    wp_enqueue_script(
      'rc_app_script',
      RC_THEME_URI_JS . '/app.min.js', 
      array(),
      filemtime( RC_THEME_DIR_JS . '/app.min.js'), 
      true
    );
  }

  public function adminStylesAndScripts () 
  {
    wp_enqueue_style(
      'rc.admin', 
      RC_THEME_URI . '/admin.css', 
      false, 
      filemtime( RC_THEME_DIR . '/admin.css')
    );
    
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
      filemtime( RC_THEME_DIR_JS . '/gutenberg.min.js' )
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

  public function themeSupports ()
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
    add_theme_support( 'editor-styles' );
    add_editor_style();
  }

  public function themeMenus () 
  {
    $locations = array(
      'primary' => 'Primary Menu',
      'footer-left' => 'Footer Menu Left',
      'footer-right' => 'Footer Menu Right'
    );
  
    register_nav_menus($locations);
  }
}

new RCTheme();