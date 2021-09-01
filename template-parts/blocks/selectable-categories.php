<?php
	$categoryIds = $attributes['categoryIds'] ?? [];
	$categories = get_categories([
		'include' => $categoryIds 
	]);
?>

<div class="selectable-categories">
	<div>
		<input class="selectable-categories" type="text">
	</div>

	<div>
		<?php foreach ($categories as $cat) { ?>
			<div class="selectable-categories__section card" data-slug="<?= esc_attr(strtolower($cat->name)) ?>">
				<a class="" href="<?= get_category_link( $cat ) ?>">
					<h6 class="selectable-categories__title"><?= esc_html($cat->name) ?></h6>
					<p class="selectable-categories__excerpt"><?= esc_html($cat->description) ?></p>
				</a>
			</div>
		<?php } ?>
	</div>
</div>