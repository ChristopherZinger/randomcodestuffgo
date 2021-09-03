<?php get_header(); ?>

<main class="content post-page">
    <?= get_template_part( 'template-parts/part', 'post-hero', [
        'title' => get_the_title(),
        'excerpt' => get_the_excerpt()
    ] ) ?>
    <?php the_content() ?>
</main>

<?php
    global $post;
    echo get_post_type($post);
?>

<?php get_footer(); ?>