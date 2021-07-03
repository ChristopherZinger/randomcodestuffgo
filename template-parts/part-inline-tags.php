<?php
  $posttags = get_the_tags();
  if ($posttags) {
    foreach($posttags as $tag) {
      get_template_part('template-parts/part', 'tag',  array('tag' => $tag));
    }
  }
?>