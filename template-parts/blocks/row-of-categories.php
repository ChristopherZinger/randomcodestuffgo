<?php
  $title = $attributes['title'] ?? '';
  $link = $attributes['link'] ?? [];
  $categories = $attributes['categories'] ?? [];
  $linkText = $link['text'] ?? 'more';
  $linkURL = $link['url'] ?? ':javascript;';
  $openInNewTab = $link['openInNewTab'] ?? false;
  $linkName = $link['name'] ?? '';
?>


<div class="row-of-categories home-section">
  <header class="home-section__header">
    <h2 class="h6"><?= esc_html( $title ); ?></h2>
    <a class="h6" href="<?= esc_url( $linkURL ); ?>" target="<?= $openInNewTab ? '_blank' : '' ?>" name="<?= $linkName ?>"><?= esc_html( $linkText ); ?></a>
  </header>
  
  <div class="row-of-categories__body">
    <?php 
      foreach ($categories as $category) :
        $cat = get_category($category['id']);
        $posts = get_posts([
          'category' => $category['id'],
          'numberposts' => 10 
        ]);
    ?>
      <div class="row-of-categories__row grid-x grid-margin-x grid-margin-y">
        <div class="cell large-3">
          <h3 class="row-of-categories__row-title">
            <a href="<?= esc_url( get_category_link($cat) ); ?>" name="<?= esc_attr( $cat->name ); ?>">
              <?= esc_html( $cat->name ); ?>
            </a>
          </h3>
        </div>

        <div class="cell large-9">
          <div class="row-of-categories__slider">
            <?php foreach($posts as $p) : ?>
                <?php
                  get_template_part('template-parts/part', 'post-card', [
                    'hideTags' => true,
                    'title' => $p->post_title,
                    'text' => $p->post_excerpt, 
                    'url' => get_permalink($p->ID)
                  ]);
                ?>
            <?php endforeach; ?>
          </div>
          <div class="row-of-categories__slider-navigation-panel">
            <?php
              get_template_part('template-parts/part', 'tns-nav', [
                'nrOfPoints' => count($posts),
                'styles' => 'row-of-categories__slider-nav'
              ]); 

              get_template_part('template-parts/part', 'tns-controls', [
                'styles' => 'row-of-categories__slider-controls show-for-medium' 
              ]);
            ?>
          </div>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</div>