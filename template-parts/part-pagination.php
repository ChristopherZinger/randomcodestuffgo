<?php

	global $wp_query;
	$currentPage = $args['currentPage'];

?>

<div class="pagination section">
	<?= 
		paginate_links( array(
			'total'        => $wp_query->max_num_pages,
			'current'      => $currentPage,
			'format'       => '?paged=%#%',
			'show_all'     => false,
			'end_size'     => 1,
			'mid_size'     => 4, 
			'prev_next'    => false,
		) );
	?>
</div>