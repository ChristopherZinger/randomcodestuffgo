
<!-- variations of main menu should be puted so separated files in template parts and isertes as wp_template_part() -->
  <?php get_header(); ?>

  <main class="content">
    <h3>Main</h3> 

    <div>
      <?= get_template_part('template-parts/part-six-latest-posts'); ?>
    </div>
  </main>

<?php get_footer(); ?>