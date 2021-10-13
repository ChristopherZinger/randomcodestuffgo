<?php
  $ids = $attributes['ids'] ?? [];
  $isTypePost = $attributes['isTypePost'] ?? true;
  $hideSearchBar = $attributes['hideSearchBar'] ?? false;

  $posts = [];

  if (count($ids) > 0 ) {
    if ($isTypePost) {
      $posts = get_posts([
        'numberposts' => -1,
        'include' => $ids
      ]);
    } else {
      $posts = get_pages([
        'numberposts' => -1,
        'include' => $ids
      ]);
    }
  }
?>

<div class='post-list-with-search'>
  <?php if ( count($posts) > 0 ) : ?>
    <?php
      if ( ! $hideSearchBar ) {
        get_template_part('template-parts/part', 'searchform',[
          'formStyle' => 'post-list-with-search__form'
        ]);
      }
    ?>
    <div class='post-list-with-search__list'>
      <?php foreach ( $posts as $mypost ) : ?>
          <div id="<?= esc_attr( $mypost->post_name ); ?>" data-title="<?= esc_attr( strtolower($mypost->post_title) ); ?>" class="post-list-with-search__item">
            <?php get_template_part('template-parts/part', 'post-card', [
              'title' => $mypost->post_title,
              'text' => $mypost->post_excerpt,
              'url' => get_permalink($mypost->ID),
              'hideTags' => true,
            ]) ?>
          </div>
      <?php endforeach; ?>
    </div>
  <?php else : ?>
    <?= esc_html(__('Sorry, no posts found.', 'rc')); ?>
  <?php endif ?>
</div>