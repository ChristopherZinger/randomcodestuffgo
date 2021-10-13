<?php get_header(); ?>

<main class="content content--page">
    <?= get_template_part( 'template-parts/part', 'post-hero', [
        'title' => get_the_title(),
        'excerpt' => get_the_excerpt()
    ] ) ?>
    </div>

    <div class="grid-x">
        <div class="cell medium-1 large-3 show-for-medium"></div>
        <div class="cell small-12 medium-10 large-6">
            <?php the_content() ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>