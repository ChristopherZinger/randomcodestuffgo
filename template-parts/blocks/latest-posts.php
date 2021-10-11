<?php
  $title = $attributes['title'] ?? 'Latest Posts';
  $link = $attributes['link'] ?? [];
  $linkText = $link['text'] ?? 'more';
  $linkURL = $link['url'] ?? ':javascript;';
  $openInNewTab = $link['openInNewTab'] ?? false;
  $linkName = $link['name'] ?? 'View All';

  $latestposts = get_posts([
    'numberposts' => 6
  ]);
?>

<div class="home-section latest-posts">
  <header class="home-section__header">
    <h2 class="h6"><?= esc_html( $title ); ?></h2>
    <a class="h6" href="<?= esc_url( $linkURL ); ?>" target="<?= $openInNewTab ? '_blank' : '' ?>" name="<?= $linkName ?>"><?= esc_html( $linkText ); ?></a>
  </header>
  
  <div class="home-section__body latest-posts__body">
    <?php 
        foreach( $latestposts as $mypost ) : 
          get_template_part('template-parts/part', 'post-card',[
            'cardpost' => $mypost,
            'hideTags' => true,
            'url' => get_permalink($mypost->ID)
          ]);
        endforeach;
    ?>
  </div>
</div>