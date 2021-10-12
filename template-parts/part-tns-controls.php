<?php
  $styles = $args['styles'] ?? '';
  $next = $args['next'] ?? 'Next >';
  $prev = $args['prev'] ?? '< Prev';
?>

<div class="<?= esc_attr( $styles ); ?>">
  <span class="tns__control previous"><?= esc_html( $prev ); ?></span>
  <span class="tns__control next"><?= esc_html( $next ); ?></span>
</div>