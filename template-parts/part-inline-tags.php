<?php
  $tags = $args['tags'] ?? [];
  $post = $args['postId'];

  if ($post) {
    $tags = get_the_tags($post);
  }

  if ($tags) {
    foreach($tags as $tag) {
      get_template_part('template-parts/part', 'tag',  array('tag' => $tag));
    }
  }
?>