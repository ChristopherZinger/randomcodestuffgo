<?php

	$currentPage = get_query_var('page') ?: 1;
	$args = [
			'post_type'      => 'post',
			'posts_per_page' => 10,
			'order'          => 'ASC',
			'paged'			 => $currentPage
	];
	$wp_query = new WP_Query($args);
?>


<div class="cell medium-1 show-for-medium"></div>
<div class="cell medium-12 large-6">
	<div>
		<?= 
			get_template_part('template-parts/part', 'home-section-header', 
				[
					'title' => 'Latest Posts', 
				]
			) 
		?>
	</div>
	
	<div >
		<?php 
			if ($wp_query && $wp_query->have_posts()) {
				while ($wp_query->have_posts()) {
					$wp_query->the_post();
					get_template_part('template-parts/part', 'card',
						[
							'title' => get_the_title(),
							'excerpt' => get_the_excerpt(),
							'styles' => 'latest-posts__card',
							'linkURL' => get_the_permalink()
						]
					);
				}
			}
		?>
	</div>

	<div>
		<?php get_template_part( 'template-parts/part', 'pagination', ['currentPage' => $currentPage] ); ?>
	</div>
</div>

