<?php
	$tags = get_tags();
?>

<div class="grid-x home__tags section">
	<div class="cell medium-1 show-for-medium"></div>
	<div class="cell small-8">
      	<h2 class="home__tags-header h6">TAGS:</h2>
		<div class="home__tags-list">
			<?php get_template_part('template-parts/part','inline-tags', ['tags' => $tags]) ?>
		</div>
	</div>
</div>