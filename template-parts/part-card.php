<?php
	$title = $args['title'] ?? '';
	$excerpt = $args['excerpt'] ?? __('No description');
	$styles = $args['styles'] ?? '';
?>

<div class="card <?= esc_attr($styles); ?>">
	<h5 class="card__header"><?= esc_html($title); ?></h5>
	<p class="card__text show-for-medium"><?= esc_html($excerpt); ?></p>
</div>