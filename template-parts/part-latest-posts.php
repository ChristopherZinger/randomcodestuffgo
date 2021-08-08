<?php
	$args = [
			'post_type'      => 'post',
			'posts_per_page' => 8,
			'order'          => 'ASC',
	];

	$posts = new WP_Query($args);
?>


<div class="grid-x grid-margin-x latest-posts section">
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
				if ($posts && $posts->have_posts()) {
					while ($posts->have_posts()) {
						$posts->the_post();
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
	</div>

	<div class="cell medium-4 show-for-large">social media</div>
</div>

