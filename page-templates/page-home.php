<?php
/*
Template Name: Home 
*/
?>

<?php get_header(); ?>
  <main class="content">
    <h1 class="home__header h1">Main</h1> 

    <?php get_template_part('template-parts/part-tags'); ?>
    <?php get_template_part('template-parts/part', 'series') ?>
    
    <div class="grid-x grid-margin-x latest-posts section">
      <?php get_template_part('template-parts/part', 'latest-posts'); ?>
      <div class="home__social-media cell large-4 show-for-large">
          <div>
            <h2 class="h6">Social Media:</h2>
          </div>
          <?= get_template_part('template-parts/part', 'social-media'); ?>
      </div>
    </div>
  </main>
<?php get_footer(); ?>