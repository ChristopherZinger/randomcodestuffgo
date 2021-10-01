<?php
	$cardpost = $args['cardpost'];
	$title = $cardpost->post_title ?? '';
	$excerpt = $cardpost->post_excerpt ?? '';
?>

<div class="post-card">
	<h5 class="post-card__header">
		<?= esc_html( $title ); ?>
	</h5>

	<div class="post-card__tags">
		<?php get_template_part('template-parts/part-inline-tags', null, ['postToFindTagsFor' => $cardpost]); ?>
	</div>

	<p class="post-card__excerpt">
		<?= esc_html( $excerpt ); ?> 
	</p>
</div>