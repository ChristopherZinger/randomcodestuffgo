<?php
  $title = $attributes['title'] ?? '';
  $link = $attributes['link'] ?? [];
  $linkText = $link['text'] ?? 'more';
  $linkURL = $link['url'] ?? ':javascript;';
  $openInNewTab = $link['openInNewTab'] ?? false;
  $linkName = $link['name'] ?? '';
  $ids = $attributes['ids'] ?? [];
  $isTypePost = $attributes['isTypePost'] ?? false;
  $postType = $isTypePost ? 'posts' : 'pages';

  $items = [];

  if ($postType === 'posts') {
    $items = get_posts([
      'include' => $ids
    ]);
  } else {
    $items = get_pages([
      'include' => $ids
    ]);
  }
?>

<div class="selected-posts home-section">
  <header class="home-section__header">
    <h2 class="h6"><?= esc_html( $title ); ?></h2>
    <a class="h6" href="<?= esc_url( $linkURL ); ?>" target="<?= $openInNewTab ? '_blank' : '' ?>" name="<?= $linkName ?>"><?= esc_html( $linkText ); ?></a>
  </header>

  <div class="selected-posts__body">
    <div class="selected-posts__slider-container">
      <div class="selected-posts__slider">
        <?php foreach($items as $item) : ?>
          <?php

            $itemURL = '';

            if ($postType === 'posts') {
              $itemURL = get_permalink($item->ID);
            } else {
              $itemURL = get_page_link($item->ID);
            }
          
            get_template_part('template-parts/part', 'post-card', [
              'title' => $item->post_title,
              'text' => $item->post_excerpt,
              'url' => $itemURL,
              'hideTags' => true
            ])  
          ?>
        <?php endforeach; ?>
      </div>

      <div class="selected-posts__slider-navigation-panel">
        <?php
          get_template_part('template-parts/part', 'tns-nav', [
            'nrOfPoints' => count($items),
            'styles' => 'selected-posts__slider-nav'
          ]); 

          get_template_part('template-parts/part', 'tns-controls', [
            'styles' => 'selected-posts__slider-controls show-for-medium' 
          ]);
        ?>
      </div>
    </div>
  </div>
</div>
