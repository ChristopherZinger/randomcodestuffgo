<?php
/*
Template Name: Home 
*/
?>

<?php get_header(); ?>
  <main class="content">
    <?= get_template_part(
      'template-parts/part', 
      'homepage-hero', 
      [
        'title' => 'Hi, I am Chris!',
        'style' => 'home__hero'
      ]) 
    ?>

    <?php get_template_part('template-parts/part-tags'); ?>
    <?php get_template_part('template-parts/part', 'series') ?>
    
    <div class="grid-x grid-margin-x latest-posts section">
      <?php get_template_part('template-parts/part', 'latest-posts'); ?>
    </div>
  </main>
<?php get_footer(); ?>