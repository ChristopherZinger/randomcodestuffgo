<?php
	$title = $args['title'] ?? '';
	$linkText = $args['linkText'] ?? 'View All';
	$linkURL = $args['linkURL'] ?? 'javascript:;';
?>

<div class="grid-x home-series__header">
	<div class="cell small-6"><h2 class="h6"><?= esc_html($title); ?></h2></div>

	<div class="cell small-6">
		<a href="<?= esc_attr($linkURL); ?>" class="h6 home-series__view-all">
			<?= esc_html($linkText); ?>
		</a>
	</div>
</div>