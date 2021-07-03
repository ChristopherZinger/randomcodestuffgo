
<!-- variations of main menu should be puted so separated files in template parts and isertes as wp_template_part() -->
  <?php get_header(); ?>

  <main class="content">
    <h3>Main</h3> 
    <?php
    if ( have_posts() )
    {
      while ( have_posts() ) 
      {
        the_post();
        the_content();
      } 
    } else {
      echo '<p>There are no posts here.</p>';
    }

    ?>
  </main>

<?php get_footer(); ?>