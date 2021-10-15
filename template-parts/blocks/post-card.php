<?php
  if ( empty( $attributes ) ) {
    return;
  }

	$mypost = $attributes['post'];

  if ( ! $mypost ) {
    return;
  }

	$postId = $mypost['id'];
	$cardpost = get_post($postId);
?>

<?= get_template_part('template-parts/part', 'post-card', ['cardpost' => $cardpost]); ?>