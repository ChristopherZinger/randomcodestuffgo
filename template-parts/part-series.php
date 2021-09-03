<?php
	$seriesPage =  get_page_by_path( 'series' );
	$seriesLink = get_permalink($seriesPage);

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

<div class="home-series section">
	<?=
	 	get_template_part('template-parts/part', 'home-section-header',
			[
				'title' => 'Series',
				'linkText' => 'View All',
				'linkURL' => $seriesLink
			]
		); 
	?>

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
							'styles' => 'cell small-12 medium-6 large-3',
							'linkURL' => get_the_permalink()
						]
					);
				}
			}
		?>

	</div>
</div>