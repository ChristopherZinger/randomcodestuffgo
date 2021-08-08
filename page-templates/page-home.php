<?php
/*
Template Name: Home 
*/
?>

<?php get_header(); ?>

  <main class="content">
    <h3>Main</h3> 

    <div>

	<?= get_template_part('template-parts/blocks/latest-posts'); ?>

    </div>
  </main>

<?php get_footer(); ?>