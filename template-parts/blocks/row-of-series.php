<?php
  $title = $attributes['title'] ?? '';
  $link = $attributes['link'] ?? [];
  $categories = $attributes['categories'] ?? [];
  $linkText = $link['text'] ?? 'more';
  $linkURL = $link['url'] ?? ':javascript;';
  $openInNewTab = $link['openInNewTab'] ?? false;
  $linkName = $link['name'] ?? '';
?>


<div class="row-of-series home-section">
  <header class="home-section__header">
    <h2 class="h6"><?= esc_html( $title ); ?></h2>
    <a class="h6" href="<?= esc_url( $linkURL ); ?>" target="<?= $openInNewTab ? '_blank' : '' ?>" name="<?= $linkName ?>"><?= esc_html( $linkText ); ?></a>
  </header>
  
  <div class="row-of-series__body">
    <?php 
      foreach ($categories as $category) :
        $cat = get_category($category['id']);
        get_template_part('template-parts/part', 'post-card', [
          'hideTags' => true,
          'title' => $cat->name,
          'text' => $cat->description, 
          'url' => get_category_link($category['id'])
        ]);
      endforeach;
    ?>
  </div>
</div>