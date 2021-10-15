<?php
  $nrOfPoints = $args['nrOfPoints'] ?? 0;
  $styles = $args['styles'] ?? '';
?>

<div class="<?= esc_attr($styles); ?>">
  <?php for ( $i = 0; $i < $nrOfPoints; $i++) : ?>
    <span class="slider-marble"></span>
  <?php endfor ?>
</div>