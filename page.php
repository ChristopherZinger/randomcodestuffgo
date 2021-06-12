<nav class="primary-menu">
  <?php get_header(); ?>
</nav>

<?php
  if (have_posts()) {
    echo 'there are some posts here';
  }

?>