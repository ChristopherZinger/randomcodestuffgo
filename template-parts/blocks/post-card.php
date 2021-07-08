<?php
	$postFromAttributes = $attributes['post'];
	$postId = $postFromAttributes['id'];
	$cardpost = get_post($postId);
?>

<?= get_template_part('template-parts/part', 'post-card', ['cardpost' => $cardpost]); ?>