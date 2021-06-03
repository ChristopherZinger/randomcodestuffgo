<?php get_header(); ?>

  <main>
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