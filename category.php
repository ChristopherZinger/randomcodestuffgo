<?php 
	$page_object = get_queried_object(); 
	$categoryName = $page_object->cat_name;
	$categoryID = $page_object->cat_ID;
	$categoryDescription = $page_object->description;
?>

<?php get_header(); ?>
<main class="content content-category" data-category-id="<?= esc_attr($categoryID); ?>">
    <?= get_template_part( 'template-parts/part', 'post-hero', [
        'title' => $categoryName,
        'excerpt' => get_the_excerpt()
    ] ) ?>
    <div class="grid-x">
        <div class="cell medium-1 large-3 show-for-medium"></div>
        <div class="cell small-12 medium-10 large-6">
			<div class="content-category__form">
				<form id="searchform">
					<input id="s" class="page-category__input" type="text" placeholder="<?= __('Search for post in this category.', 'rc') ?>">
					<div id="searchsubmit" class="page-categoryß__clear-search-btn">clear
					</div>
				</form>
			</div>
			<div class="content-category__list-of-posts">
			</div>
        </div>
    </div>
</main>
<?php get_footer(); ?>