<?php
  $ids = $attributes['ids'] ?? [];
  $isTypePost = $attributes['isTypePost'] ?? true;
  $hideSearchBar = $attributes['hideSearchBar'] ?? false;

  $myquery = new WP_Query([
    'post_type' => $isTypePost ? 'post' : 'page', 
    'post__in' => $ids,
    'orderby' => 'post__in'
  ]);
?>

<div class='post-list-with-search'>
  <?php if ( count($ids) > 0 ) : ?>
    <?php
      if ( ! $hideSearchBar ) {
        get_template_part('template-parts/part', 'searchform',[
          'formStyle' => 'post-list-with-search__form'
        ]);
      }
    ?>
    <div class="post-list-with-search__list">
      <?php if ($myquery->have_posts()): ?>
        <?php while( $myquery->have_posts() ) : $myquery->the_post(); ?>
            <div id="<?= esc_attr( 'slug????' ); ?>" data-title="<?= esc_attr( strtolower( get_the_title() ) ); ?>" class="post-list-with-search__item">
              <?php get_template_part('template-parts/part', 'post-card', [
                'title' => get_the_title(),
                'text' => get_the_excerpt(),
                'url' => $isTypePost ? get_permalink( get_the_ID() ) : get_page_link( get_the_id() ),
                'hideTags' => true,
              ]) ?>
            </div>
        <?php endwhile; ?>
      <?php endif; ?>
    </div>
  <?php else : ?>
    <?= esc_html(__('Sorry, no posts found.', 'rc')); ?>
  <?php endif ?>
</div>