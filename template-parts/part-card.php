<?php
	$title = $args['title'] ?? '';
	$excerpt = $args['excerpt'] ?? __('No description');
	$styles = $args['styles'] ?? '';
	$linkURL = $args['linkURL'] ?? 'javascript:;';
?>

<div class="card" <?= esc_attr($styles); ?>">
	<h6 class="card__header"><?= esc_html($title); ?></h6>
	<p class="card__text"><?= esc_html($excerpt); ?></p>
	<a class="card__link" href="<?= esc_attr($linkURL); ?>"></a>
</div>