<?php 
	$tagName = single_tag_title('', false);
?>
<?php 
	$page_object = get_queried_object(); 
	$categoryName = $page_object->cat_name;
	$categoryID = $page_object->cat_ID;

	$subCagetories = get_categories( ['child_of' => $categoryID] );
?>

<?php get_header(); ?>
  <main class="content">
    <?= get_template_part(
      'template-parts/part', 
      'homepage-hero', 
      [
        'title' => $categoryName,
        'style' => 'home__hero'
      ]) 
    ?>

	<p>[ category.php ]</p>
    <div class="grid-x grid-margin-x latest-posts section">
	<div class="cell medium-1 large-2 show-for-medium"></div>
	<div class="cell small-12 medium-8 large-6">
	<?php
		foreach($subCagetories as $category) :
			echo $category->name;
		endforeach;
	?>
    </div>
  </main>
<?php get_footer(); ?>