<?php
	$seriesCategory = get_category_by_slug( 'series' );
	$subCategories = get_categories([
		'child_of' => $seriesCategory->term_id,
	]);
?>

<div class="home-series section">
	<?=
	 	get_template_part('template-parts/part', 'home-section-header',
			[
				'title' => 'Series',
				'linkText' => 'View All',
				'linkURL' => home_url( '/series/' ) 
			]
		); 
	?>

	<div class="series__cards">
		<?php foreach ($subCategories as $cat) {
			get_template_part(
				'template-parts/part', 
				'card', 
				[
					'title' => $cat->name,
					'excerpt' => $cat->category_description,
					'styles' => '',
					'linkURL' => get_category_link($cat) 
				]
			);
		} ?>
	</div>
</div>