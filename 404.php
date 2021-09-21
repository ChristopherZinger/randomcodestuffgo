<?php get_header(); ?>
  <article class="content">
	<div class="section">
		<div class="error-404__404">404</div>
		<div class="error-404__nothing-to-see">Nothing to see here.</div>
	</div>
    
    <div class="grid-x grid-margin-x latest-posts section">
		<div class="cell medium-1 large-2 show-for-medium"></div>
		<div class="cell small-12 medium-8 large-6">
			<?= get_search_form(); ?>
		</div>
    </div>
  </article>
<?php get_footer(); ?>