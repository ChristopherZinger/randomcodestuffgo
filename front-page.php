
<!-- variations of main menu should be puted so separated files in template parts and isertes as wp_template_part() -->
  <?php get_header(); ?>

  <main class="content">
    <h1 class="home__header h1">Main</h1> 

    <?php get_template_part('template-parts/part-tags'); ?>
    <?php get_template_part('template-parts/part', 'series') ?>
    
  </main>

<?php get_footer(); ?>