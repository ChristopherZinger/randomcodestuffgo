<?php

namespace RC\Helpers;

class SVGHelper 
{
	public static function getIcon($icon, $class = ''): string
	{
		$iconPath = RC_THEME_URI_ASSETS . '/svg/sprite.svg#' . $icon;

		return "<svg class=\"icon icon--$icon $class\" aria-hidden=\"true\"><use xlink:href=\"$iconPath\"></use></svg>";
	}

}