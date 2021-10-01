<?php

namespace RC\Admin;

class PostTypeSupport 
{
	public static function init () 
	{
		add_post_type_support( 'page', 'excerpt' );
	}
}
