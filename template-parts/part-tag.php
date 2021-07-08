<?php
  $tag = $args['tag'];

  if ($tag) { 
?>
  <a href="<?= esc_attr( get_tag_link( $tag ) ); ?>" class="rc-tag"><?= esc_html($tag->name) ?></a>

<?php } ?>
