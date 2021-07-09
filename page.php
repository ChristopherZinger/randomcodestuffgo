<?php get_header(); ?>

<main class="content">
   <h1><?php echo get_the_title() ?></h1>
    <?php the_content() ?>
</main>

<?php get_footer(); ?>