<?php
	$seriesLink = get_permalink(get_page_by_path('series'));
	$seriesId = get_cat_id('series');
	$series = get_posts( ['category' => $seriesId, 'numberposts' => 4 ]);

	$seriesPage =  get_page_by_path( 'series' );

	if ($seriesPage) {
		$args = array(
			'post_type'      => 'page',
			'posts_per_page' => 4,
			'post_parent'    => $seriesPage->ID,
			'order'          => 'ASC',
			'orderby'        => 'menu_order'
		);
		
		$parent = new WP_Query( $args );
	}
	

?>
<div class="home-series">
	<div class="grid-x home-series__header">
		<div class="cell small-6"><h2 class="h6">Series</h2></div>

		<div class="cell small-6">
			<a href="<?= esc_attr($seriesLink); ?>" class="h6 home-series__view-all">
				View All
			</a>
		</div>
	</div>

	<div class="grid-x grid-margin-x series__cards">
		<?php
			if ($parent && $parent->have_posts()) {
				while ($parent->have_posts()) {
					$parent->the_post();
					get_template_part(
						'template-parts/part', 
						'card', 
						[
							'title' => get_the_title(),
							'excerpt' => get_the_excerpt(),
							'styles' => 'cell small-12 medium-6 large-3'
						]
					);
				}
			}
		?>

	</div>
</div>