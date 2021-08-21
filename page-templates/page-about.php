<?php
/*
Template Name: About 
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
    <div class="grid-x grid-margin-x latest-posts section">
      <div class="cell medium-1 large-2 show-for-medium"></div>
      <div class="rc-post-content cell small-12 medium-7 large-6">
        <?= the_content() ?>
        
      </div>
      <div class="home__social-media cell large-4 show-for-medium">
          <?= get_template_part('template-parts/part', 'social-media'); ?>
      </div>
    </div>
  </main>
<?php get_footer(); ?>
