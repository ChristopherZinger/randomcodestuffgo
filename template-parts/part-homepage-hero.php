<?php

	$title = $args['title'] ?? 'Hi, I am Chris.';
	$style = $args['style'] ?? '';

?>

<h1 class="<?= esc_attr($style); ?>"><?= esc_html($title); ?></h1>