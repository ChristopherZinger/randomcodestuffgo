<?php
  $args = array(
    'post_type' => 'post',
    'post_per_page' => '6'
  );

  $the_query = new WP_Query($args);
?>

<div class="rc-block six-latest-posts">
  <div class="six-latest-posts__content">
    <?php 
      if ( $the_query->have_posts() ) { 
        while( $the_query->have_posts() ) { 
          $the_query->the_post(); 
    ?>
      <div class="six-latest-posts__card">
        <h5 class="six-latest-posts__card-header">
          <?= esc_html( the_title() ); ?>
        </h5>

        <div class="six-latest-posts__card-tags">
          <?php get_template_part('template-parts/part-inline-tags'); ?>
        </div>

        <?= esc_html( the_excerpt() ); ?> 
      </div>
    <?php 
        }
      } else { 
    ?>
      <p>Sorry, no posts here. </p>
    <?php } ?>
  </div>
</div>