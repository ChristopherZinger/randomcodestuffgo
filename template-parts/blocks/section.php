<?php 
	$sectionName = $attributes['sectionName'] ?? '';
	$sectionSlug = $attributes['sectionSlug'] ?? '';
?>

<section 
	href="#<?= esc_attr($sectionSlug); ?>" 
	data-section-slug="<?= esc_attr($sectionSlug) ?>"
	data-section-name="<?= esc_attr($sectionName) ?>"
	class="rc-section rc-section__<?= esc_attr($sectionSlug); ?>"
>
	<?= $content ?>
</section>