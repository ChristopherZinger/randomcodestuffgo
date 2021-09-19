<?php 
	$postId = $attributes['postIdToLinkTo'];

	if ( ! $postId ) {
		return;
	}

	$isForward = $attributes['isForward'] ?? true; 
	$isForwardStyle = $isForward ? '' : 'is-backwards'; 
	$title = $attributes['overritePostTitle'] ?? get_the_title( $postId );
	$text = $attributes['text'] ?? 'Go To Next Post';

?>

<div class="next-prev-btn <?= esc_attr( $isForwardStyle ); ?>">
	<div class="next-prev-btn__content">
		<h6 class="next-prev-btn__text"><?= esc_html($text); ?></h6>
		<h5 class="next-prev-btn__title"><?= esc_html($title); ?></h5>
	</div>
	<?= rcGetIcon('arrow-right') ?>
	<a class="cover-link" href="<?= get_the_permalink(	$postId ); ?>"></a>
</div>