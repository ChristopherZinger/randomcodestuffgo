<?php

	$title = $args['title'] ?? '';
	$style = $args['style'] ?? '';

?>

<h1 class="post__hero <?= esc_attr($style); ?>"><?= esc_html($title); ?></h1>