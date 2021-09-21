<?php

	$title = $args['title'] ?? '';
	$excerpt = $args['excerpt'] ?? '';
	$style = $args['style'] ?? '';

?>

<h1 class="post__hero <?= esc_attr($style); ?>"><?= esc_html($title); ?></h1>
<div class="grid-x">
	<div class="cell medium-1 show-for-medium"></div>
	<?php if ($excerpt) { ?>
		<div class="cell small-12 medium-10 large-6 post__description">
			<p class="post__description-text"><?= esc_html($excerpt) ?></p>
		</div>
	<?php } ?>
</div>