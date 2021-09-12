<?php get_header(); ?>

<main class="content post-page">
    <?= get_template_part( 'template-parts/part', 'post-hero', [
        'title' => get_the_title(),
        'excerpt' => get_the_excerpt()
    ] ) ?>



    <div class="grid-x grid-margin-x section">
        <div class="cell medium-1 large-2 show-for-medium"></div>
        <div class="rc-post-content cell small-12 medium-7 large-6">
        <script src="https://gist.github.com/ChristopherZinger/014b08298d3d1ce495c3488130c9d6fd.js"></script>
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

<?php
    global $post;
    echo get_post_type($post);
?>

<?php get_footer(); ?>