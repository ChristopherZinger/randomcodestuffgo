<?php
/*
Template Name: About 
*/
?>

<?php get_header(); ?>
  <main class="content content--about">
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
      <div class="cell large-1 show-for-large"></div>
      <div class="cell medium-4 large-3 show-for-medium">
          <div class="side-bar side-bar--sticky">
            <?= get_template_part('template-parts/part', 'social-media'); ?>
            <div class="sidebar-location-navigation"></div>
          </div>
      </div>
    </div>
  </main>
<?php get_footer(); ?>
