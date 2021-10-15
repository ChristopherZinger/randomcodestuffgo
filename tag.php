<?php 
	$tagName = single_tag_title('', false);
?>

<?php get_header(); ?>
  <section class="content content--tag">
    <?= get_template_part(
      'template-parts/part', 
      'homepage-hero', 
      [
        'title' => 'Tag: ' . $tagName,
        'style' => 'home__hero'
      ]) 
    ?>

    <?php get_template_part('template-parts/part-tags'); ?>
    
    <div class="grid-x grid-margin-x latest-posts section">
	<div class="cell medium-1 large-2 show-for-medium"></div>
	<div class="cell small-12 medium-8 large-6">
		<?= single_tag_title() ?>
		<div class="search__results">
			<?php while ( have_posts() ) : the_post(); ?>
				<?= get_template_part( 'template-parts/part', 'card', [
					'title' => get_the_title(),
					'excerpt' => get_the_excerpt(),
					'linkURL' => get_permalink(),
				] ) ?>
			<?php endwhile; ?>
		</div>
    </div>
  </main>
<?php get_footer(); ?>