<?php
  $postToFindTagsFor = $args['postToFindTagsFor'];

  $posttags = get_the_tags($postToFindTagsFor);
  if ($posttags) {
    foreach($posttags as $tag) {
      get_template_part('template-parts/part', 'tag',  array('tag' => $tag));
    }
  }
?>