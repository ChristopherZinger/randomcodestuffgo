<?php

namespace RC;

spl_autoload_register(
    function ($class) {
        $namespace = explode('\\', $class);

        if (array_shift($namespace) !== __NAMESPACE__) {
            return;
        }

        $result = str_replace(__NAMESPACE__ . '\\', '', $class);
        $result = str_replace('\\', '/', $result);

        require $result . '.php';
    }
);

// Autoload from root
require_once ABSPATH . 'vendor/autoload.php';

require_once 'bootstrap.php';
