<?php
	$categoryIds = $attributes['categoryIds'] ?? [];
	$isHorizontal = $attributes['isHorizontal'] ?? false;
	$hideExcerpt = $attributes['hideExcerpt'] ?? false; 
	$showSearchForm = $attributes['showSearchForm'] ?? true;
	$categories = get_categories([
		'include' => $categoryIds 
	]);
?>

<div class="selectable-categories">
	<?php if ($showSearchForm) { ?>
		<div class="selectable-categories__form-wrapper">
			<form id="searchform">
				<input id="s" class="selectable-categories__input" type="text" placeholder="<?= __('Search for series.', 'rc') ?>">
				<div id="searchsubmit" class="selectable-categories__clear-search-btn">clear
				</div>
			</form>
		</div>
	<?php } ?>

	<?php if ($isHorizontal) { 
		get_template_part('template-parts/part', 'home-section-header', [
			'title' => 'test title'
		]);
	} ?>

	<div>
		<?php foreach ($categories as $cat) { ?>
			<div class="selectable-categories__item rc-card" data-title="<?= esc_attr(strtolower($cat->name)) ?>">
				<a class="" href="<?= get_category_link( $cat ) ?>">
					<h6 class="selectable-categories__title"><?= esc_html($cat->name) ?></h6>
					<?php if (!$hideExcerpt) { ?>
						<p class="selectable-categories__excerpt"><?= esc_html($cat->description) ?></p>
					<?php } ?>
				</a>
			</div>
		<?php } ?>
	</div>
</div>