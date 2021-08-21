<?php get_header(); ?>

<main class="content">
   <h1><?php echo get_the_title() ?></h1>
    <?php the_content() ?>
</main>

<?php
    global $post;

    echo get_post_type($post);
?>

<?php get_footer(); ?>