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


<div class="cell">
	<div>
		<?= 
			get_template_part('template-parts/part', 'home-section-header', 
				[
					'title' => 'Latest Posts', 
				]
			) 
		?>
	</div>
	
	<div class="grid-x grid-margin-x grid-margin-y" >
		<?php 
			if ($wp_query && $wp_query->have_posts()) :
				while ($wp_query->have_posts()) :
					$wp_query->the_post();
    ?>
    <div class="cell small-12 medium-4 large-2">

    <?php
					get_template_part('template-parts/part', 'card',
						[
							'title' => get_the_title(),
							'excerpt' => get_the_excerpt(),
							'styles' => 'latest-posts__card',
							'linkURL' => get_the_permalink()
						]
					);
		?>
      </div>
    <?php
      endwhile;
      endif;
    ?>

	</div>

	<div>
		<?php get_template_part( 'template-parts/part', 'pagination', ['currentPage' => $currentPage] ); ?>
	</div>
</div>

