<?php
/*
Template Name: Contact
*/

  $args = array( 'numberposts' => -1, 'category_name' => 'contact' );
  $posts = get_posts( $args );  
?>

<?php get_header(); ?>

<main class="page-contact">
  <section>
    <?php the_content(); ?>

    <?php
      foreach($posts as $contactPost) {
        echo get_the_title($contactPost);
        echo get_the_content( null, false, $contactPost);
      }
    ?>
  </section>

  <aside class="page-contact__aside-image">
    <img src="<?php echo get_the_post_thumbnail_url( $post, 'large' ); ?>" alt="image" />
  </aside>
</main>