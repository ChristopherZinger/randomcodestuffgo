
<?php 
	$page_object = get_queried_object(); 
	$categoryName = $page_object->cat_name;
	$categoryID = $page_object->cat_ID;
	$subCagetories = get_categories( ['child_of' => $categoryID] );
?>

<h6>Archive.php</h6>
<?php
	foreach($subCagetories as $category) :
		var_dump($category);
		
	endforeach;
?>