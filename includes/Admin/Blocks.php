<?php

namespace RC\Admin;

class Blocks
{
    public static function init()
    {
        self::register('selectable-categories', true);
        self::register('accordion', true);
        self::register('post-card', true);
        self::register('section', true);
        self::register('next-prev-btn', true);
        self::register('series-navigation-buttons', true);
    }

    public static function register($block_name, $server_side = false, array $attributes = [], $namespace = 'rc')
    {
        $block_arguments = [
            'editor_script' => 'rc.gutenberg',
        ];

        if ($server_side) {
            $block_arguments['render_callback'] = function ($arguments, $content) use ($block_name) {
                return static::renderCallback($arguments, $content, $block_name);
            };
        }

        if ($attributes) {
            $block_arguments['attributes'] = $attributes;
        }

        register_block_type($namespace . '/' . $block_name, $block_arguments);
    }

    public static function renderCallback($attributes, $content, $blockName = 'example')
    {
        $file = locate_template('template-parts/blocks/' . $blockName . '.php');

        if (empty($file)) {
            return sprintf(
                __('Error: No template file found for the %s block.', 'rc'),
                '<code>' . $blockName . '</code>'
            );
        }

        ob_start();
        include $file;

        return ob_get_clean();
    }
}
