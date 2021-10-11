<?php
	$cardpost = $args['cardpost'] ?? [];
	$title = $args['title'] ?? $cardpost->post_title ?? '';
	$text = $args['text'] ?? $cardpost->post_excerpt ?? __('This item does not have a description yet.', 'rc');
  $hideTags = $args['hideTags'] ?? false;
  $url = $args['url'] ?? '';
?>

<div class="post-card">
	<header class="post-card__header">
		<?= esc_html( $title ); ?>
	</header>

  <?php if (! $hideTags ) : ?>
    <div class="post-card__tags">
      <?php get_template_part('template-parts/part-inline-tags', null, ['postId' => $cardpost->ID]); ?>
    </div>
  <?php endif; ?>

	<p class="post-card__excerpt">
		<?= esc_html( $text ); ?> 
	</p>

  <?php if ($url) : ?>
    <a href="<?= esc_url($url); ?>" name="<?= esc_attr($title); ?>" class="cover-link"></a>
  <?php endif; ?>
</div>