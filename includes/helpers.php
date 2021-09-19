<?php

use RC\Helpers\PostHelper;
use RC\Helpers\SVGHelper;

/**
 * @param int $postId
 * @return array
 */
function rcGetShareUrls($postId = 0): array
{
    return PostHelper::getShareUrls($postId);
}

/**
 * Load icon form sprite.
 * @param $icon
 * @param string $class
 * @return string
 */
function rcGetIcon($icon, $class = ''): string
{
    return SVGHelper::getIcon($icon, $class);
}